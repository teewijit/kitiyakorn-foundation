import { Heart, ArrowRight } from "lucide-react"

import { projects } from "@/data/projects"
import { SectionHeader } from "@/components/common/SectionHeader"
import { StoryDetailDialog } from "@/components/home/StoryDetailDialog"

const featured = projects[0]

/** Story of Hope (design.md §7.6) — quote card + before/after + wide box */
export function StoryOfHope() {
  return (
    <section className="container-1200 py-[60px] max-lg:py-10">
      <SectionHeader
        title="เรื่องราวแห่งความหวัง"
        subtitle="ทุกการผ่าตัดคือชีวิตใหม่ที่มูลนิธิร่วมมอบให้"
      />

      <div className="grid grid-cols-[1.03fr_1fr] gap-6 max-lg:grid-cols-1">
        {/* ซ้าย — quote card */}
        <div className="relative overflow-hidden rounded-2xl bg-card p-6 shadow-card">
          <Heart className="h-8 w-8 fill-gold-light text-gold" />
          <p className="mt-3 text-[15px] leading-[1.8] text-foreground">
            {featured.description}
          </p>
          <p className="mt-4 font-heading text-sm font-semibold text-gold-dark">
            — {featured.title}
          </p>
          <img
            src={featured.image}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -bottom-4 -right-4 w-[200px] opacity-20 [filter:sepia(0.4)] [mask-image:linear-gradient(135deg,transparent,#000)]"
          />
          <div className="relative mt-5">
            <StoryDetailDialog item={featured}>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card-light px-4 py-2 font-heading text-[12.5px] font-medium text-gold-dark transition-smooth hover:border-gold hover:bg-gold-light"
              >
                อ่านเรื่องราว <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </StoryDetailDialog>
          </div>
        </div>

        {/* ขวา — before/after + wide box */}
        <div className="flex flex-col gap-4">
          <div className="flex items-stretch gap-4 max-[600px]:flex-col">
            <ComparisonBox
              title="ก่อนการรักษา"
              text="ผู้ป่วยยากไร้ที่ครอบครัวไม่สามารถรับผิดชอบค่าผ่าตัดหัวใจและทรวงอกได้"
            />
            <div className="grid place-items-center text-gold-dark max-[600px]:rotate-90">
              <ArrowRight className="h-6 w-6" />
            </div>
            <ComparisonBox
              title="หลังการรักษา"
              text="ได้รับการผ่าตัดต่อชีวิต กลับมาใช้ชีวิตได้อย่างมีคุณภาพและยืนยาว"
            />
          </div>
          <div className="rounded-xl border border-[#ebdcb5] bg-[#fcf6ec] p-5">
            <p className="flex items-start gap-2 text-[14px] leading-relaxed text-foreground">
              <Heart className="mt-1 h-4 w-4 shrink-0 fill-gold text-gold" />
              ทุกการสนับสนุนของท่าน คือโอกาสที่มูลนิธิจะส่งต่อให้ผู้ป่วยได้มีชีวิตใหม่อีกครั้ง
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ComparisonBox({ title, text }: { title: string; text: string }) {
  return (
    <div className="min-h-[120px] flex-1 rounded-xl border border-border-light bg-card-light px-5 py-4">
      <p className="flex items-center gap-2 font-heading text-sm font-semibold text-gold-dark">
        <span className="h-2 w-2 rounded-full bg-gold-dark" />
        {title}
      </p>
      <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{text}</p>
    </div>
  )
}
