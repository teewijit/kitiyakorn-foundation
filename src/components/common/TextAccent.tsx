import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function TextAccent({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "font-heading text-[1.08em] font-semibold text-gold-dark",
        className
      )}
    >
      {children}
    </span>
  )
}
