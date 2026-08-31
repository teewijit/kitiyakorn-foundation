import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"

import { Reveal } from "@/components/common/Motion"

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-70px)] overflow-hidden bg-[#2b2119]">
      <img
        src="/clean-hero-banner.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,247,234,0.96)_0%,rgba(255,247,234,0.84)_25%,rgba(255,247,234,0.22)_48%,rgba(255,247,234,0)_72%)] max-md:bg-[linear-gradient(180deg,rgba(255,247,234,0.94)_0%,rgba(255,247,234,0.78)_44%,rgba(255,247,234,0.04)_84%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,rgba(255,247,234,0)_0%,rgba(251,249,243,0.72)_68%,var(--bg-cream)_100%)]" />

      <div className="container-1200 relative z-10 flex min-h-[calc(100svh-70px)] items-center py-16 max-md:items-start max-md:py-12">
        <Reveal className="max-w-[540px]">
          <h1 className="text-balance font-heading text-[clamp(3.25rem,6.4vw,6rem)] font-medium leading-[1.03] text-[#241a12] [text-shadow:0_2px_0_rgba(255,255,255,0.42),0_9px_22px_rgba(91,61,24,0.18)]">
            ให้โอกาส...
            <span className="mt-1 block text-[0.74em] text-[#8f5a16] [text-shadow:0_2px_0_rgba(255,255,255,0.38),0_8px_18px_rgba(159,102,25,0.2)]">
              คือ ให้ชีวิต
            </span>
          </h1>
          <p className="mt-6 max-w-[470px] text-pretty font-heading text-lg font-semibold leading-9 text-[#2e342f] max-md:text-base max-md:leading-8">
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
        </Reveal>
      </div>
    </section>
  )
}
