import { Link } from "react-router-dom"
import {
  Building2,
  CalendarDays,
  ChevronRight,
  HandHeart,
  Stethoscope,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { Reveal } from "@/components/common/Motion"

interface HomeHeroStat {
  icon: LucideIcon
  value: string
  label: string
  desc: string
}

const heroStats: HomeHeroStat[] = [
  {
    icon: HandHeart,
    value: "350+",
    label: "ชีวิต",
    desc: "ได้รับการช่วยเหลือ",
  },
  {
    icon: Users,
    value: "350",
    label: "ครอบครัว",
    desc: "ได้รับการดูแล",
  },
  {
    icon: Building2,
    value: "18",
    label: "โรงพยาบาล",
    desc: "เครือข่าย",
  },
  {
    icon: Stethoscope,
    value: "18",
    label: "ศัลยแพทย์",
    desc: "ผู้เชี่ยวชาญ",
  },
  {
    icon: CalendarDays,
    value: "17 ปี",
    label: "แห่งการทำงาน",
    desc: "อย่างต่อเนื่อง",
  },
]

export function Hero() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,var(--bg-cream)_100%)] py-8 max-md:py-5">
      <div className="container-1200">
        <Reveal>
          <div className="relative min-h-[540px] overflow-hidden rounded-2xl bg-[#2b2119] shadow-[0_12px_36px_rgba(42,50,61,0.12)] max-lg:min-h-[560px] max-md:min-h-[500px] max-sm:min-h-[540px]">
            <img
              src="/clean-hero-banner.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,247,234,0.94)_0%,rgba(255,247,234,0.82)_26%,rgba(255,247,234,0.18)_48%,rgba(255,247,234,0)_70%)] max-md:bg-[linear-gradient(180deg,rgba(255,247,234,0.94)_0%,rgba(255,247,234,0.82)_42%,rgba(255,247,234,0.08)_78%)]" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(255,247,234,0)_0%,rgba(255,247,234,0.72)_100%)]" />

            <div className="relative z-10 flex min-h-[640px] items-center px-[clamp(28px,5vw,76px)] py-12 max-lg:min-h-[560px] max-md:min-h-[500px] max-md:items-start max-sm:min-h-[540px]">
              <div className="max-w-[520px] pt-3 max-md:max-w-[440px]">
                <h1 className="text-balance font-heading text-[clamp(3rem,6vw,5.35rem)] font-medium leading-[1.03] text-[#241a12] [text-shadow:0_2px_0_rgba(255,255,255,0.42),0_9px_22px_rgba(91,61,24,0.18)]">
                  ให้โอกาส...
                  <span className="mt-1 block text-[0.74em] text-[#8f5a16] [text-shadow:0_2px_0_rgba(255,255,255,0.38),0_8px_18px_rgba(159,102,25,0.2)]">
                    คือ ให้ชีวิต
                  </span>
                </h1>
                <p className="mt-6 max-w-[460px] text-pretty font-heading text-lg font-semibold leading-9 text-[#2e342f] max-md:text-base max-md:leading-8">
                  ร่วมเป็นส่วนหนึ่งในการให้โอกาสผู้ป่วยยากไร้
                  ผ่านความช่วยเหลือด้านการรักษาที่จำเป็น
                </p>
                <Link
                  to="/donate"
                  className="motion-press mt-7 inline-flex min-h-12 items-center gap-2 rounded-[25px] bg-[#c97908] px-7 font-heading text-base font-semibold text-white shadow-[0_8px_14px_rgba(138,79,12,0.22)] transition-smooth hover:bg-[#a86408] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  ร่วมสร้างความหวังให้หลายหัวใจ
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <div className="grid grid-cols-5 divide-x divide-border-light rounded-2xl bg-white px-5 py-8 shadow-[0_10px_30px_rgba(205,153,97,0.12)] ring-1 ring-border-light max-lg:grid-cols-[repeat(3,minmax(0,1fr))] max-lg:gap-y-7 max-lg:divide-x-0 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:px-4 max-sm:py-5">
            {heroStats.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center px-5 text-center max-sm:flex-row max-sm:items-center max-sm:gap-4 max-sm:text-left"
                >
                  <Icon className="mb-4 h-12 w-12 text-[#c97908] max-sm:mb-0" strokeWidth={1.7} />
                  <p className="font-alt text-[34px] font-semibold leading-none text-[#14213a] max-md:text-[30px]">
                    {stat.value}
                  </p>
                  <p className="mt-3 font-heading text-[15px] font-semibold leading-tight text-[#14213a] max-sm:mt-0">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug text-muted-foreground">
                    {stat.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
