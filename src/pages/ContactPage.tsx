import { MapPin, Phone, Mail, Clock } from "lucide-react"

import { site } from "@/data/site"
import { PageBanner } from "@/components/common/PageBanner"
import { DonateButton } from "@/components/common/DonateButton"
import { MotionList, Reveal } from "@/components/common/Motion"

const items = [
  {
    icon: MapPin,
    title: "ที่อยู่สำนักงาน",
    lines: [site.contact.office],
  },
  {
    icon: Phone,
    title: "โทรศัพท์",
    lines: [
      `สำนักงานมูลนิธิ (${site.contact.contactName}) ${site.contact.phoneOffice}`,
      `ภาควิชาศัลยศาสตร์ฯ ${site.contact.phoneDept}`,
    ],
  },
  {
    icon: Mail,
    title: "อีเมล",
    lines: ["info@kitiyakarafoundation.or.th"],
  },
  {
    icon: Clock,
    title: "เวลาทำการ",
    lines: ["จันทร์ – ศุกร์ 08:30 – 16:30 น.", "(เว้นวันหยุดราชการ)"],
  },
]

export function ContactPage() {
  return (
    <>
      <PageBanner
        title="ติดต่อเรา"
        subtitle="สอบถามข้อมูล ขอความช่วยเหลือผู้ป่วย หรือร่วมสนับสนุนมูลนิธิฯ ได้ตามช่องทางด้านล่าง"
      />

      <section className="container-1200 py-[60px] max-lg:py-10">
        <MotionList className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {items.map((it) => {
            const Icon = it.icon
            return (
              <div
                key={it.title}
                className="flex gap-4 rounded-2xl border border-border-light bg-card p-6 shadow-card"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-light">
                  <Icon className="h-6 w-6 text-gold-dark" />
                </div>
                <div>
                  <h2 className="font-heading text-base font-semibold text-foreground">
                    {it.title}
                  </h2>
                  {it.lines.map((line, i) => (
                    <p key={i} className="mt-1 text-[14px] leading-relaxed text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </MotionList>

        <Reveal className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-[#ebdcb5] bg-[#fcf6ec] p-8 text-center">
          <h2 className="font-heading text-xl font-semibold text-foreground">
            ร่วมเป็นส่วนหนึ่งในการให้ชีวิต
          </h2>
          <p className="max-w-xl text-[14.5px] leading-relaxed text-muted-foreground">
            ทุกการสนับสนุนของท่าน ช่วยให้ผู้ป่วยโรคหัวใจและทรวงอกที่ยากไร้ได้รับโอกาสในการรักษา
          </p>
          <DonateButton />
        </Reveal>
      </section>
    </>
  )
}
