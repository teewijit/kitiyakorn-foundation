import { Link } from "react-router-dom"
import type { SyntheticEvent } from "react"
import {
  Building2,
  CalendarDays,
  HandHeart,
  HeartHandshake,
  Stethoscope,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { site } from "@/data/site"

interface IntroStat {
  icon: LucideIcon
  value: string
  label: string
  desc: string
}

const introStats: IntroStat[] = [
  {
    icon: HandHeart,
    value: "350+",
    label: "ชีวิต",
    desc: "ที่ได้รับโอกาสในการรักษา",
  },
  {
    icon: Users,
    value: "350",
    label: "ครอบครัว",
    desc: "ที่กลับมามีความสุขอีกครั้ง",
  },
  {
    icon: Building2,
    value: "12",
    label: "โรงพยาบาล",
    desc: "ทั่วประเทศที่ได้รับการสนับสนุน",
  },
  {
    icon: Stethoscope,
    value: "18",
    label: "ศัลยแพทย์",
    desc: "ผู้ร่วมสร้างความหวัง",
  },
  {
    icon: CalendarDays,
    value: "17 ปี",
    label: "แห่งการให้โอกาส",
    desc: "และส่งต่อความหวัง",
  },
]

export function IntroPage() {
  const handleHeroImageFallback = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = "/intro-hero.jpg"
  }

  return (
    <section className="relative isolate min-h-dvh overflow-hidden bg-[#071426] text-white">
      <img
        src="/intro-hero-clean.jpg"
        onError={handleHeroImageFallback}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center opacity-100"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_39%,rgba(12,10,8,0.06)_0%,rgba(7,20,38,0.14)_62%,rgba(7,20,38,0.42)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[28%] bg-[linear-gradient(180deg,rgba(7,20,38,0)_0%,rgba(7,20,38,0.44)_52%,#071426_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[1536px] flex-col px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-center pb-[190px] pt-8 text-center max-lg:pb-[260px] max-md:pb-[300px] max-sm:pb-[390px]">
          <div className="max-w-[760px]">
            <img
              src={site.logo}
              alt=""
              className="intro-crest-shadow mx-auto mb-5 h-[104px] w-auto object-contain max-lg:h-24 max-sm:mb-4 max-sm:h-16"
            />
            <h1 className="intro-title-shadow text-balance font-heading text-[clamp(2.9rem,6.8vw,6.25rem)] font-medium leading-[0.98] text-white">
              ให้โอกาส...
              <span className="intro-title-gold-shadow mt-2 block text-[0.74em] text-[#e2a746]">
                คือ ให้ชีวิต
              </span>
            </h1>
            <div className="mx-auto mt-6 flex max-w-[360px] items-center justify-center gap-4 text-[#d49b43]">
              <span className="h-px flex-1 bg-current/70" />
              <HeartHandshake className="h-5 w-5" />
              <span className="h-px flex-1 bg-current/70" />
            </div>
            <p className="intro-copy-shadow mx-auto mt-5 max-w-[670px] text-pretty font-heading text-base font-semibold leading-8 text-white sm:text-lg sm:leading-9">
              ร่วมสานต่อความหวัง ให้ผู้ป่วยโรคหัวใจและทรวงอกได้รับโอกาสในการรักษาที่จำเป็น
              และได้กลับไปใช้ชีวิตกับครอบครัวอีกครั้ง
            </p>
            <Link
              to="/home"
              className="motion-press mt-8 inline-flex min-h-12 min-w-[220px] items-center justify-center rounded-[25px] bg-[#d69a2f] px-8 font-heading text-lg font-semibold text-white shadow-[0_8px_0_rgba(75,45,10,0.18)] transition-smooth hover:bg-[#b98227] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              เข้าสู่หน้าหลัก
            </Link>
          </div>
        </div>

        <div className="absolute inset-x-3 bottom-[76px] z-20 mx-auto max-w-[1188px] max-md:bottom-[68px]">
          <div className="relative overflow-hidden rounded-xl bg-[#fff7ea] px-5 py-5 text-[#152033] shadow-[0_0_28px_rgba(218,160,61,0.45)] ring-1 ring-[#e0b86d]/70 max-sm:px-3 max-sm:py-3">
            <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(209,153,57,0),#e6b75f,rgba(209,153,57,0))]" />
            <div className="grid grid-cols-5 divide-x divide-[#ddc797] max-lg:grid-cols-[repeat(3,minmax(0,1fr))] max-lg:divide-x-0 max-lg:gap-y-4 max-sm:grid-cols-1 max-sm:gap-y-2">
              {introStats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.label}
                    className="flex min-h-[82px] items-center justify-center gap-4 px-4 max-lg:px-3 max-sm:min-h-0 max-sm:justify-start max-sm:rounded-lg max-sm:bg-white/45 max-sm:py-2"
                  >
                    <Icon className="h-12 w-12 shrink-0 text-[#b77d25] max-sm:h-9 max-sm:w-9" strokeWidth={1.6} />
                    <div className="min-w-0">
                      <p className="font-alt text-[32px] font-semibold leading-none text-[#152033] max-sm:text-2xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 font-heading text-sm font-semibold leading-tight text-[#172235]">
                        {stat.label}
                      </p>
                      <p className="mt-0.5 text-[11.5px] leading-snug text-[#5c6370]">
                        {stat.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <p className="absolute inset-x-4 bottom-6 z-20 text-center font-heading text-[clamp(1rem,2.1vw,1.7rem)] font-medium text-[#d5a24d] drop-shadow-[0_4px_16px_rgba(0,0,0,0.55)]">
          “เพราะทุกหัวใจ...สมควรได้เต้นต่อไป”
        </p>
      </div>
    </section>
  )
}
