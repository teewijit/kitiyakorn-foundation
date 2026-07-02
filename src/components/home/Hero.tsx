import { site } from "@/data/site"
import { DonateButton } from "@/components/common/DonateButton"
import { Reveal } from "@/components/common/Motion"

/** Hero (design.md §7.2) — รูป / ข้อความ / การ์ดผู้ก่อตั้ง */
export function Hero() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,var(--bg-cream)_100%)] py-[42px]">
      <Reveal className="container-1200 mb-10 text-center">
        {/* <img
          src={site.logo}
          alt={site.nameShort}
          className="mx-auto mb-5 h-24 w-auto object-contain max-md:h-20"
        /> */}
        <h1 className="mx-auto max-w-4xl text-balance font-heading text-[32px] font-semibold leading-snug text-foreground max-md:text-2xl">
          {site.nameFull}
        </h1>
        <p className="mt-3 font-heading text-xl font-medium text-gold-dark max-md:text-lg">
          {site.tagline}
        </p>
      </Reveal>

      <div className="container-1200 grid grid-cols-[minmax(0,1fr)_320px] items-center gap-8 max-lg:grid-cols-1 max-lg:gap-8 max-lg:text-center">
        {/* ซ้าย — ข้อความหลัก */}
        <Reveal className="max-w-2xl max-lg:mx-auto">
          <p className="mb-2 font-heading text-lg font-medium text-foreground">
            ภารกิจของเรา
          </p>
          <h2 className="font-heading text-[26px] font-normal leading-snug text-foreground max-md:text-[22px]">
            สืบสานอุดมการณ์เพื่อผู้ป่วยโรคหัวใจและทรวงอก
          </h2>
          <p className="mt-2 font-heading text-lg font-medium text-gold-dark">
            {site.purpose}
          </p>
          <p className="mt-4 text-[14.5px] leading-[1.7] text-muted-foreground">
            {site.mission}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 max-lg:justify-center">
            <DonateButton />
          </div>
        </Reveal>

        {/* ขวา — การ์ดผู้ก่อตั้ง */}
        <Reveal className="p-5 text-center max-lg:mx-auto max-lg:w-full max-lg:max-w-xs">
            <img
              src={site.heroIllustration}
              alt="ศ.นพ.ม.ร.ว.กัลยาณกิติ์ กิติยากร"
              className=""
            />
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
