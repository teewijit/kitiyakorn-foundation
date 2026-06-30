import { Reveal } from "@/components/common/Motion"

interface PageBannerProps {
  title: string
  subtitle?: string
}

/** แบนเนอร์หัวหน้าเพจย่อย — โทนทอง/ครีมตาม design */
export function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section className="border-b border-border-light bg-[linear-gradient(180deg,#ffffff_0%,var(--bg-cream)_100%)] py-12">
      <Reveal className="container-1200 text-center">
        <h1 className="flex items-center justify-center gap-2 font-heading text-[32px] font-semibold text-foreground max-md:text-2xl">
          {/* <Heart className="h-5 w-5 fill-gold text-gold" /> */}
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-2xl text-[15px] text-muted-foreground">
            {subtitle}
          </p>
        )}
      </Reveal>
    </section>
  )
}
