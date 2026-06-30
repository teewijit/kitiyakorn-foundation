import type { ReactNode } from "react"
import { Heart, ArrowRight, CircleCheck, UserRound } from "lucide-react"

import { patients, getPatientById, getComparison } from "@/data/patients"
import { SectionHeader } from "@/components/common/SectionHeader"
import { Reveal } from "@/components/common/Motion"

const featured = getPatientById(13) ?? patients[0]

/** Story of Hope หน้าผลการดำเนินงาน (design.md §7.6) — quote ผู้ป่วยจริง + before/after */
export function ResultsStory() {
  const { before, after } = getComparison(featured)

  return (
    <section className="container-1200 py-[60px] max-lg:py-10">
      <SectionHeader
        title="เรื่องราวแห่งความหวัง"
        subtitle="ความเปลี่ยนแปลงที่เกิดขึ้นจริง จากการให้โอกาสในการรักษา"
      />

      <div className="grid grid-cols-[1.03fr_1fr] gap-6 max-lg:grid-cols-1">
        {/* ซ้าย — quote card */}
        <Reveal direction="left" className="relative flex flex-col overflow-hidden rounded-2xl bg-card p-6 shadow-card">
          <Heart className="h-8 w-8 fill-gold-light text-gold" />
          <p className="mt-3 text-[15px] leading-[1.8] text-foreground">
            {featured.quote}
          </p>
          <p className="mt-4 font-heading text-sm font-semibold text-foreground">
            — {featured.name}
          </p>
          <p className="text-[12px] text-gold-dark">
            ผู้รับการผ่าตัด {featured.operation} (HN {featured.hn})
          </p>
          <img
            src={featured.image}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -bottom-4 -right-4 w-[180px] rounded-tl-3xl opacity-25 [filter:sepia(0.35)] [mask-image:linear-gradient(135deg,transparent,#000)]"
          />
        </Reveal>

        {/* ขวา — before/after + wide box */}
        <Reveal direction="right" className="flex flex-col gap-4">
          <div className="flex items-stretch gap-4 max-[600px]:flex-col">
            <Box title="ก่อนการผ่าตัด" items={before} icon={<UserRound className="h-4 w-4" />} />
            <div className="grid place-items-center text-gold-dark max-[600px]:rotate-90">
              <ArrowRight className="h-6 w-6" />
            </div>
            <Box title="หลังการผ่าตัด" items={after} icon={<CircleCheck className="h-4 w-4" />} />
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-[#ebdcb5] bg-[#fcf6ec] p-5">
            <img src="/circle_heart.png" alt="" aria-hidden className="h-12 w-12 shrink-0" />
            <p className="text-[14px] leading-relaxed text-foreground">
              ทุกการสนับสนุน คือการเปลี่ยนชีวิต และสร้างรอยยิ้มให้กลับมาสู่ครอบครัวอีกครั้ง
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Box({
  title,
  items,
  icon,
}: {
  title: string
  items: string[]
  icon: ReactNode
}) {
  return (
    <div className="min-h-[120px] flex-1 rounded-xl border border-border-light bg-card-light px-5 py-4">
      <p className="flex items-center gap-1.5 font-heading text-sm font-semibold text-gold-dark">
        {icon}
        {title}
      </p>
      <ul className="mt-2 space-y-1 text-[13px] leading-relaxed text-muted-foreground">
        {items.map((it, i) => (
          <li key={i} className="flex gap-1.5">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-dark" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  )
}
