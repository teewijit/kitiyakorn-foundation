import { Reveal } from "@/components/common/Motion"

interface PageBannerProps {
  title: string
  subtitle?: string
  animated?: boolean
}

/** แบนเนอร์หัวหน้าเพจย่อย — โทนทอง/ครีมตาม design */
export function PageBanner({ title, subtitle, animated = true }: PageBannerProps) {
  const content = (
    <div className="container-1200 text-center">
      <h1 className="flex items-center justify-center gap-2 text-balance font-heading text-[36px] font-semibold leading-tight text-foreground max-md:text-[28px]">
        {/* <Heart className="h-5 w-5 fill-gold text-gold" /> */}
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  )

  return (
    <section className="border-b border-border-light bg-[linear-gradient(180deg,#ffffff_0%,var(--bg-cream)_100%)] py-12">
      {animated ? <Reveal>{content}</Reveal> : content}
    </section>
  )
}
