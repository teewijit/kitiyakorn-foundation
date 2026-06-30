import { site } from "@/data/site"
import { DonateButton } from "@/components/common/DonateButton"
import { Reveal } from "@/components/common/Motion"

/** Hero (design.md §7.2) — รูป / ข้อความ / การ์ดผู้ก่อตั้ง */
export function Hero() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,var(--bg-cream)_100%)] py-[42px]">
      <Reveal className="container-1200 mb-10 text-center">
        <img
          src={site.logo}
          alt={site.nameShort}
          className="mx-auto mb-5 h-24 w-auto object-contain max-md:h-20"
        />
        <h1 className="mx-auto max-w-4xl text-balance font-heading text-[32px] font-semibold leading-snug text-foreground max-md:text-2xl">
          {site.nameFull}
        </h1>
        <p className="mt-3 font-heading text-xl font-medium text-gold-dark max-md:text-lg">
          {site.tagline}
        </p>
      </Reveal>

      <div className="container-1200 grid grid-cols-[290px_1fr_310px] items-center gap-5 max-lg:grid-cols-1 max-lg:gap-8 max-lg:text-center">
        {/* ซ้าย — ภาพประกอบ */}
        <Reveal className="max-lg:order-2 max-lg:mx-auto max-lg:max-w-sm">
          <img
            src={site.heroIllustration}
            alt={site.nameShort}
            className="w-full rounded-xl shadow-soft"
          />
        </Reveal>

        {/* กลาง — ข้อความหลัก */}
        <Reveal className="max-lg:order-1">
          <p className="mb-2 font-heading text-lg font-medium text-foreground">
            ภารกิจของเรา
          </p>
          <h1 className="font-heading text-[26px] font-normal leading-snug text-foreground max-md:text-[22px]">
            {site.nameFull}
          </h1>
          <p className="mt-2 font-heading text-lg font-medium text-gold-dark">
            {site.tagline}
          </p>
          <p className="mt-4 text-[14.5px] leading-[1.7] text-muted-foreground">
            {site.mission}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 max-lg:justify-center">
            <DonateButton />
          </div>
        </Reveal>

        {/* ขวา — การ์ดผู้ก่อตั้ง */}
        <Reveal className="rounded-2xl border border-border-light bg-card p-6 text-center shadow-card max-lg:order-3 max-lg:mx-auto max-lg:max-w-xs">
          <div className="mx-auto mb-4 grid h-[180px] w-[180px] place-items-center overflow-hidden rounded-full border-4 border-gold-light bg-gold-light/40">
            <img
              src={site.crest}
              alt="ตรามูลนิธิ"
              className="h-[180px] w-[180px] object-contain"
            />
          </div>
          <p className="font-heading text-[13.5px] font-semibold text-foreground">
            ศ.นพ.ม.ร.ว.กัลยาณกิติ์ กิติยากร
          </p>
          <p className="text-[11.5px] text-gold-dark">ศัลยแพทย์หัวใจและทรวงอก</p>
          <p className="mt-2 text-[11.5px] leading-relaxed text-muted-foreground">
            {site.established}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
