import { Heart } from "lucide-react"

import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

/** หัวข้อ section ที่ใช้ซ้ำ — title + เส้น divider ทอง 2 ข้าง + หัวใจ (design.md §7.1) */
export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 text-center", className)}>
      <h2 className="flex items-center justify-center gap-2 text-balance font-heading text-[30px] font-semibold leading-tight text-foreground max-md:text-2xl">
        <Heart className="h-[18px] w-[18px] fill-gold text-gold" />
        {title}
      </h2>
      <div className="my-3 flex items-center justify-center gap-3">
        <span className="h-px flex-[0_1_80px] bg-gold" />
        <Heart className="h-[13px] w-[13px] fill-gold text-gold" />
        <span className="h-px flex-[0_1_80px] bg-gold" />
      </div>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  )
}
