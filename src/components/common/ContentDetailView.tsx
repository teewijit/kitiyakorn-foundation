import { Link } from "react-router-dom"
import { ArrowLeft, CalendarDays } from "lucide-react"

import { ContentCard } from "@/components/common/ContentCard"
import { DonateButton } from "@/components/common/DonateButton"
import { MotionList, Reveal } from "@/components/common/Motion"
import type { ContentItem } from "@/types/content"

interface ContentDetailViewProps {
  item: ContentItem
  backTo: string
  backLabel: string
  related: ContentItem[]
}

export function ContentDetailView({
  item,
  backTo,
  backLabel,
  related,
}: ContentDetailViewProps) {
  return (
    <article className="container-1200 py-[60px] max-lg:py-10">
      <Link
        to={backTo}
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-gold-dark"
      >
        <ArrowLeft className="h-4 w-4" /> {backLabel}
      </Link>

      <div className="grid grid-cols-[1.1fr_1fr] gap-10 max-lg:grid-cols-1">
        <Reveal direction="left">
          <img
            src={item.image}
            alt={item.title}
            className="w-full rounded-2xl object-cover shadow-soft"
            style={{ background: item.background || undefined }}
          />
        </Reveal>

        <Reveal direction="right">
          <p className="flex items-center gap-1.5 text-[13px] text-muted-foreground">
            <CalendarDays className="h-4 w-4 text-gold" />
            {item.date}
          </p>
          <h1 className="mt-3 font-heading text-[26px] font-semibold leading-snug text-foreground max-md:text-2xl">
            {item.title}
          </h1>
          <p className="mt-5 text-[15px] leading-[1.9] text-muted-foreground">
            {item.description}
          </p>
          <div className="mt-8 rounded-xl border border-[#ebdcb5] bg-[#fcf6ec] p-5">
            <p className="text-[14px] text-foreground">
              ร่วมเป็นส่วนหนึ่งในการช่วยเหลือผู้ป่วยยากไร้กับมูลนิธิฯ
            </p>
            <DonateButton className="mt-3" />
          </div>
        </Reveal>
      </div>

      {related.length > 0 && (
        <Reveal className="mt-16">
          <h2 className="mb-6 font-heading text-xl font-semibold text-foreground">
            เรื่องที่เกี่ยวข้อง
          </h2>
          <MotionList className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-3 max-[700px]:grid-cols-2 max-[480px]:grid-cols-1">
            {related.map((r) => (
              <ContentCard key={`${r.kind}-${r.id}`} item={r} />
            ))}
          </MotionList>
        </Reveal>
      )}
    </article>
  )
}
