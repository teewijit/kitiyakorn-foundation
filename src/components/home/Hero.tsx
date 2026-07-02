import { site } from "@/data/site"
import { DonateButton } from "@/components/common/DonateButton"
import { Reveal } from "@/components/common/Motion"
import { TextAccent } from "@/components/common/TextAccent"

export function Hero() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,var(--bg-cream)_100%)] py-10 max-md:py-8">
      <Reveal className="container-1200 mb-5 hidden text-center md:block">
        <img
          src={site.logo}
          alt={site.nameShort}
          className="mx-auto h-[min(25vh,210px)] w-auto object-contain"
        />
      </Reveal>

      <Reveal className="container-1200 mb-12 text-center">
        <h1 className="mx-auto max-w-[1280px] text-balance font-heading text-[40px] font-semibold leading-tight text-foreground max-xl:text-[34px] max-md:text-2xl">
          {site.nameFull}
        </h1>
        <p className="mt-3 font-heading text-xl font-medium text-gold-dark max-md:text-lg">
          {site.tagline}
        </p>
      </Reveal>

      <div className="container-1200 grid grid-cols-[minmax(340px,520px)_minmax(0,1fr)] items-center gap-14 max-lg:grid-cols-1 max-lg:gap-8 max-lg:text-center">
        <Reveal className="justify-self-center text-center max-lg:mx-auto max-lg:w-full max-lg:max-w-sm">
          <img
            src={site.heroIllustration}
            alt={site.nameFull}
            className="mx-auto w-full max-w-[500px] object-contain"
          />
          <p className="mt-2 font-heading text-sm font-semibold text-foreground">
            ศ.นพ.ม.ร.ว.กัลยาณกิติ์ กิติยากร
          </p>
          <p className="text-xs text-gold-dark">ศัลยแพทย์หัวใจและทรวงอก</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {site.established}
          </p>
        </Reveal>

        <Reveal direction="right" className="max-w-[880px] max-lg:mx-auto">
          <p className="mb-3 font-heading text-lg font-semibold text-foreground">
            ภารกิจของเรา
          </p>
          <h2 className="text-balance font-heading text-[40px] font-semibold leading-tight text-foreground max-xl:text-[34px] max-md:text-[24px]">
            <TextAccent className="text-[1.16em]">สืบสานอุดมการณ์</TextAccent>{" "}
            เพื่อผู้ป่วย{" "}
            <TextAccent className="text-[1.08em]">โรคหัวใจและทรวงอก</TextAccent>
          </h2>
          <p className="mt-5 font-heading text-[24px] font-medium leading-9 text-gold-dark max-md:text-lg max-md:leading-8">
            มอบโอกาสในการรักษาให้ผู้ป่วยยากไร้
            ด้วยการสนับสนุนที่ต่อเนื่องและไว้วางใจได้
          </p>
          <p className="mt-6 max-w-[780px] text-base leading-8 text-muted-foreground max-lg:mx-auto">
            ก่อตั้งจากการอุทิศตนของ{" "}
            <TextAccent>ศ.นพ.ม.ร.ว.กัลยาณกิติ์ กิติยากร</TextAccent>{" "}
            เพื่อสานต่อความรู้ ความเสียสละ และการช่วยเหลือผู้ป่วยหัวใจและทรวงอก
            ที่ครอบครัวไม่สามารถรับภาระค่ารักษาได้
          </p>
          <div className="mt-7 flex flex-wrap gap-3 max-lg:justify-center">
            <DonateButton />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
