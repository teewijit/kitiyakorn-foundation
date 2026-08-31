import {
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Microscope,
  Stethoscope,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Link } from "react-router-dom"

import { MotionList, Reveal } from "@/components/common/Motion"

interface MissionItem {
  icon: LucideIcon
  title: string
  desc: string
}

const missions: MissionItem[] = [
  {
    icon: HandHeart,
    title: "ช่วยเหลือผู้ป่วย",
    desc: "ให้โอกาสผู้ป่วยยากไร้เข้าถึงการรักษาที่มีคุณภาพ",
  },
  {
    icon: GraduationCap,
    title: "พัฒนาบุคลากร",
    desc: "พัฒนาศักยภาพแพทย์และบุคลากรอย่างต่อเนื่อง",
  },
  {
    icon: Stethoscope,
    title: "สนับสนุนเครื่องมือแพทย์",
    desc: "จัดหาและสนับสนุนเครื่องมือที่ทันสมัย",
  },
  {
    icon: Microscope,
    title: "วิจัยและองค์ความรู้",
    desc: "สนับสนุนงานวิจัยเพื่อพัฒนาการรักษาให้ดียิ่งขึ้น",
  },
  {
    icon: Users,
    title: "กิจกรรมเพื่อสังคม",
    desc: "สร้างความตระหนักรู้และส่งเสริมสุขภาพหัวใจ",
  },
]

export function MissionSection() {
  return (
    <section className="bg-cream py-14 max-md:py-10">
      <div className="container-1200">
        <Reveal className="text-center">
          <h2 className="font-heading text-[32px] font-semibold leading-tight text-foreground max-md:text-2xl">
            พันธกิจของเรา
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-pretty text-[15px] font-medium leading-7 text-muted-foreground">
            มุ่งมั่นเพื่อยกระดับการดูแลผู้ป่วยโรคหัวใจและทรวงอกของประเทศไทย
          </p>
        </Reveal>

        <MotionList className="mt-9 grid grid-cols-5 gap-4 max-xl:grid-cols-[repeat(3,minmax(0,1fr))] max-md:grid-cols-2 max-sm:grid-cols-1">
          {missions.map((mission) => {
            const Icon = mission.icon
            return (
              <article
                key={mission.title}
                className="motion-card flex min-h-[188px] flex-col items-center justify-center rounded-xl border border-border-light bg-white px-5 py-7 text-center shadow-[0_4px_8px_rgba(42,50,61,0.04)] hover:border-gold-light hover:shadow-[0_8px_14px_rgba(205,153,97,0.12)]"
              >
                <Icon className="h-14 w-14 text-gold-dark" strokeWidth={1.45} />
                <h3 className="mt-5 font-heading text-[16px] font-semibold leading-tight text-foreground">
                  {mission.title}
                </h3>
                <p className="mt-3 text-pretty text-[13px] leading-6 text-muted-foreground">
                  {mission.desc}
                </p>
              </article>
            )
          })}
        </MotionList>

        <Reveal className="mt-7 flex justify-center">
          <Link
            to="/about-us"
            className="motion-press inline-flex min-h-11 items-center gap-2 rounded-[25px] border border-[#d9c08b] bg-white px-7 font-heading text-sm font-semibold text-gold-dark transition-smooth hover:border-gold hover:bg-gold-light"
          >
            ดูพันธกิจทั้งหมด
            <HeartHandshake className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
