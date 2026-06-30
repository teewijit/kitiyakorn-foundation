import {
  Children,
  cloneElement,
  isValidElement,
  type CSSProperties,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react"

import { cn } from "@/lib/utils"

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  direction?: "up" | "left" | "right"
}

function useOnceInView() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (!("IntersectionObserver" in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisible(true)
        observer.unobserve(entry.target)
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

export function Reveal({
  className,
  children,
  direction = "up",
  ...props
}: RevealProps) {
  const { ref, visible } = useOnceInView()

  return (
    <div
      ref={ref}
      data-visible={visible}
      data-motion={direction}
      className={cn("motion-reveal", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function MotionList({ className, children, ...props }: RevealProps) {
  const { ref, visible } = useOnceInView()
  const items = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return child

    return cloneElement(child as ReactElement<{ style?: CSSProperties }>, {
      style: {
        ...(child.props.style ?? {}),
        "--motion-index": index,
      } as CSSProperties,
    })
  })

  return (
    <div
      ref={ref}
      data-visible={visible}
      className={cn("motion-list", className)}
      {...props}
    >
      {items}
    </div>
  )
}
