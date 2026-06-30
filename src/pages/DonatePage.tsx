import { Copy, Phone, MapPin } from "lucide-react"

import { site } from "@/data/site"
import { PageBanner } from "@/components/common/PageBanner"
import { SectionHeader } from "@/components/common/SectionHeader"
import { MotionList, Reveal } from "@/components/common/Motion"

const steps = [
  "บริจาคเป็นเงินสด / เครื่องมือแพทย์ / อุปกรณ์การแพทย์",
  "ส่งหลักฐานการโอนเงินมายังสำนักงานมูลนิธิฯ",
  "มูลนิธิฯ ออกใบเสร็จรับเงินเพื่อนำไปลดหย่อนภาษี หรือออกหนังสือตอบขอบคุณ",
]

export function DonatePage() {
  const { bank, contact } = site

  return (
    <>
      <PageBanner
        title="การบริจาค"
        subtitle="ร่วมบริจาคสมทบทุนเพื่อช่วยเหลือผู้ป่วยยากไร้ พร้อมใช้สิทธิลดหย่อนภาษีได้ 2 เท่า"
      />

      <section className="container-1200 py-[60px] max-lg:py-10">
        <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
          {/* บัญชีธนาคาร */}
          <Reveal direction="left" className="rounded-2xl border border-border-light bg-card p-6 shadow-card">
            <h2 className="font-heading text-lg font-semibold text-foreground">
              บริจาคผ่านการโอนเงิน
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{bank.bank}</p>
            <dl className="mt-5 space-y-3 text-sm">
              <Row label="ชื่อบัญชี" value={bank.accountName} />
              <Row label="ประเภทบัญชี" value={bank.accountType} />
            </dl>
            <div className="mt-4 flex items-center justify-between rounded-xl border border-[#ebdcb5] bg-[#fcf6ec] px-5 py-4">
              <span className="font-alt text-2xl font-bold tracking-wider text-foreground">
                {bank.accountNo}
              </span>
              <Copy className="h-5 w-5 text-gold-dark" />
            </div>
          </Reveal>

          {/* QR e-Donation */}
          <Reveal direction="right" className="flex flex-col items-center justify-center rounded-2xl border border-border-light bg-card p-6 text-center shadow-card">
            <h2 className="font-heading text-lg font-semibold text-foreground">
              e-Donation
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              สแกนเพื่อบริจาคและใช้สิทธิลดหย่อนภาษีอัตโนมัติ
            </p>
            <img
              src={site.donateQr}
              alt="QR e-Donation"
              className="mt-4 w-48 rounded-xl border border-border bg-card p-2"
            />
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <SectionHeader title="ขั้นตอนการบริจาค" />
          <MotionList className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
            {steps.map((s, i) => (
              <div
                key={i}
                className="rounded-xl border border-border-light bg-card-light p-5 shadow-card"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-light font-alt font-bold text-gold-dark">
                  {i + 1}
                </span>
                <p className="mt-3 text-[14px] leading-relaxed text-foreground">{s}</p>
              </div>
            ))}
          </MotionList>
        </Reveal>

        <Reveal className="mt-12 rounded-2xl border border-border-light bg-card p-6 shadow-card">
          <h2 className="font-heading text-lg font-semibold text-foreground">
            ติดต่อสำนักงานมูลนิธิ
          </h2>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            <p className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
              {contact.office}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold-dark" />
              {contact.contactName} โทร. {contact.phoneOffice} · {contact.phoneDept}
            </p>
          </div>
        </Reveal>
      </section>
    </>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border-light pb-2">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-medium text-foreground">{value}</dd>
    </div>
  )
}
