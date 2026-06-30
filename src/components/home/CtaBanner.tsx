import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { Facebook, Youtube, Phone } from "lucide-react"

import { site } from "@/data/site"

/** CTA banner (design.md §7.7) — ตรา / ข้อความ / ปุ่ม + social icons */
export function CtaBanner() {
  return (
    <section className="border-y border-border-light bg-card py-[30px]">
      <div className="container-1200 grid grid-cols-[120px_1fr_310px] items-center gap-5 max-lg:grid-cols-1 max-lg:text-center">
        <img
          src={site.crest}
          alt="ตรามูลนิธิ"
          className="h-[110px] w-auto object-contain max-lg:mx-auto"
        />

        <div>
          <p className="text-[14.5px] leading-relaxed text-foreground">
            ร่วมบริจาคสมทบทุนมูลนิธิฯ เพื่อช่วยเหลือ
            <span className="font-heading font-semibold text-gold-dark">
              {" "}
              ผู้ป่วยโรคหัวใจและทรวงอกที่ยากไร้{" "}
            </span>
            ที่ครอบครัวไม่สามารถรับผิดชอบค่ารักษาพยาบาลได้
          </p>
          <div className="mt-4 flex items-center gap-3 max-lg:justify-center">
            <SocialIcon label="Facebook">
              <Facebook className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon label="YouTube">
              <Youtube className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon label="โทรศัพท์">
              <Phone className="h-4 w-4" />
            </SocialIcon>
          </div>
        </div>

        <div className="max-lg:mx-auto max-lg:w-full max-lg:max-w-xs">
          <Link
            to="/donate"
            className="flex w-full items-center justify-center rounded-[25px] border-2 border-gold bg-transparent px-5 py-2.5 font-heading text-[13.5px] font-semibold text-gold-dark transition-smooth hover:bg-gold-light"
          >
            ร่วมบริจาควันนี้
          </Link>
        </div>
      </div>
    </section>
  )
}

function SocialIcon({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <span
      aria-label={label}
      className="grid h-8 w-8 cursor-pointer place-items-center rounded-full border border-border text-muted-foreground transition-smooth hover:border-gold hover:bg-gold-light hover:text-gold-dark"
    >
      {children}
    </span>
  )
}
