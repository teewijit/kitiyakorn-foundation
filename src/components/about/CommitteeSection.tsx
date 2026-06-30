import { Heart } from "lucide-react"

import { committee } from "@/data/committee"
import { MotionList, Reveal } from "@/components/common/Motion"

/** รายนามคณะกรรมการมูลนิธิ — โทนเข้ม (text-dark) + ทอง ให้ดูสง่างามเป็นทางการ */
export function CommitteeSection() {
  const [chair, ...members] = committee

  return (
    <section className="bg-foreground py-16 max-lg:py-12">
      <div className="container-1200 text-white">
        <Reveal className="text-center">
          <h2 className="flex items-center justify-center gap-2 font-heading text-[26px] font-semibold max-md:text-2xl">
            <Heart className="h-5 w-5 fill-gold text-gold" />
            รายพระนาม และรายนาม คณะกรรมการ มูลนิธิฯ
          </h2>
          <p className="mt-1 text-sm text-white/60">(ชุดปัจจุบัน)</p>
          <div className="my-5 flex items-center justify-center gap-3">
            <span className="h-px flex-[0_1_80px] bg-gold" />
            <Heart className="h-3 w-3 fill-gold text-gold" />
            <span className="h-px flex-[0_1_80px] bg-gold" />
          </div>
        </Reveal>

        {/* องค์ประธาน — ไฮไลต์ */}
        <Reveal className="mx-auto mb-6 max-w-3xl rounded-2xl border border-gold/40 bg-gold/10 px-6 py-5 text-center">
          <p className="font-heading text-lg font-semibold text-gold-light">
            {chair.name}
          </p>
          <p className="mt-1 text-sm text-white/70">{chair.position}</p>
        </Reveal>

        {/* กรรมการที่เหลือ */}
        <MotionList className="mx-auto grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          {members.map((m) => (
            <li
              key={m.name}
              className="grid grid-cols-2 gap-4 px-6 py-4 transition-colors hover:bg-white/[0.07] max-md:grid-cols-1 max-md:gap-1 max-md:text-center"
            >
              <span className="font-heading text-[15px] font-medium">{m.name}</span>
              <span className="text-[14px] text-gold-light max-md:text-white/60">
                {m.position}
              </span>
            </li>
          ))}
        </MotionList>
      </div>
    </section>
  )
}
