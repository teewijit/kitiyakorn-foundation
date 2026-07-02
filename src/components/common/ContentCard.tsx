import { Link } from "react-router-dom"
import { CalendarDays, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import type { ContentItem } from "@/types/content"

interface ContentCardProps {
  item: ContentItem
  className?: string
  calm?: boolean
}

const KIND_LABEL: Record<ContentItem["kind"], string> = {
  news: "ข่าวสาร",
  project: "โครงการ",
}

/**
 * การ์ดเนื้อหา (design.md §7.4 — เดิม patient card) ใช้กับทั้งข่าว & โครงการ
 * รูป aspect-ratio, ชื่อ clamp 2 บรรทัด, ปุ่มอ่านเพิ่มเติม margin-top auto
 */
export function ContentCard({ item, className, calm = false }: ContentCardProps) {
  const to = `/${item.kind}/${item.id}`
  return (
    <Link
      to={to}
      className={cn(
        "group flex h-full flex-col self-stretch rounded-xl border border-border-light bg-card p-3 shadow-card transition-smooth [@media(hover:hover)]:hover:border-gold-light [@media(hover:hover)]:hover:shadow-hover",
        !calm && "motion-card [@media(hover:hover)]:hover:-translate-y-1.5",
        className
      )}
    >
      <div
        className="relative mb-3 overflow-hidden rounded-lg bg-[#f5f5f5]"
        style={{ aspectRatio: "4 / 4.8" }}
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className={cn(
            "h-full w-full object-cover object-[center_30%] max-[700px]:aspect-square",
            calm ? "transition-opacity" : "motion-image-zoom group-hover:scale-[1.035]"
          )}
          style={{ background: item.background || undefined }}
        />
        <Badge className="absolute left-2 top-2 text-[10px]">
          {KIND_LABEL[item.kind]}
        </Badge>
      </div>

      <h3 className="line-clamp-2 min-h-[42px] font-heading text-[13.5px] font-semibold leading-snug text-foreground">
        {item.title}
      </h3>

      <p className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
        <CalendarDays className="h-3 w-3 text-gold" />
        {item.date}
      </p>

      <span className="mt-auto flex items-center justify-center gap-1 rounded-md border border-border bg-card-light py-2 font-heading text-[11.5px] font-medium text-gold-dark transition-smooth group-hover:border-gold group-hover:bg-gold-light">
        อ่านเพิ่มเติม
        <ArrowRight className="h-3 w-3" />
      </span>
    </Link>
  )
}
