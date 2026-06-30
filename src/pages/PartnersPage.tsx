import { Building2, HeartHandshake, GraduationCap, Stethoscope } from "lucide-react"

import { PageBanner } from "@/components/common/PageBanner"
import { SectionHeader } from "@/components/common/SectionHeader"
import { DonateButton } from "@/components/common/DonateButton"
import { MotionList, Reveal } from "@/components/common/Motion"

const partners = [
  "โรงพยาบาลรามาธิบดี (ภาควิชาศัลยศาสตร์หัวใจและทรวงอก)",
  "โรงพยาบาลเชียงรายประชานุเคราะห์",
  "คณะแพทยศาสตร์วชิรพยาบาล",
  "โรงพยาบาลชลบุรี",
  "โรงพยาบาลสมุทรสาคร",
]

const cooperation = [
  {
    icon: Stethoscope,
    title: "สนับสนุนการผ่าตัด",
    desc: "สนับสนุนงบประมาณและเครื่องมือผ่าตัดหัวใจและปอด ให้แก่โรงพยาบาลของรัฐ",
  },
  {
    icon: GraduationCap,
    title: "พัฒนาบุคลากร",
    desc: "สนับสนุนทุนศึกษาดูงานและการวิจัยทางการแพทย์ด้านโรคหัวใจและทรวงอก",
  },
  {
    icon: HeartHandshake,
    title: "องค์กรพันธมิตร",
    desc: "ร่วมมือกับองค์กรการกุศลและภาคเอกชนเพื่อขยายการช่วยเหลือผู้ป่วยยากไร้",
  },
]

export function PartnersPage() {
  return (
    <>
      <PageBanner
        title="ความร่วมมือองค์กร"
        subtitle="มูลนิธิฯ ทำงานร่วมกับโรงพยาบาลและสถาบันการแพทย์ทั่วประเทศ เพื่อส่งต่อโอกาสในการรักษาแก่ผู้ป่วย"
      />

      <section className="container-1200 py-[60px] max-lg:py-10">
        <SectionHeader title="รูปแบบความร่วมมือ" />
        <MotionList className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {cooperation.map((c) => {
            const Icon = c.icon
            return (
              <div
                key={c.title}
                className="rounded-2xl border border-border-light bg-card p-6 text-center shadow-card transition-smooth hover:-translate-y-1 hover:shadow-hover"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold-light">
                  <Icon className="h-7 w-7 text-gold-dark" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                  {c.desc}
                </p>
              </div>
            )
          })}
        </MotionList>

        <Reveal className="mt-16">
          <SectionHeader title="องค์กรพันธมิตรทางการแพทย์" />
          <MotionList className="mx-auto grid max-w-4xl grid-cols-2 gap-4 max-md:grid-cols-1">
            {partners.map((p) => (
              <div
                key={p}
                className="flex items-center gap-3 rounded-xl border border-border-light bg-card-light p-4"
              >
                <Building2 className="h-5 w-5 shrink-0 text-gold-dark" />
                <span className="text-[14px] font-medium text-foreground">{p}</span>
              </div>
            ))}
          </MotionList>
        </Reveal>

        <Reveal className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-[#ebdcb5] bg-[#fcf6ec] p-8 text-center">
          <h2 className="font-heading text-xl font-semibold text-foreground">
            ร่วมเป็นองค์กรพันธมิตรกับเรา
          </h2>
          <p className="max-w-xl text-[14.5px] leading-relaxed text-muted-foreground">
            องค์กรที่สนใจร่วมสนับสนุนภารกิจของมูลนิธิฯ สามารถติดต่อเพื่อหารือแนวทางความร่วมมือได้
          </p>
          <DonateButton />
        </Reveal>
      </section>
    </>
  )
}
