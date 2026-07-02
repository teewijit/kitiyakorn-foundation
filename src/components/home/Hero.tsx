import { site } from "@/data/site"
import { DonateButton } from "@/components/common/DonateButton"
import { Reveal } from "@/components/common/Motion"
import { TextAccent } from "@/components/common/TextAccent"

/** Hero หน้าแรก */
export function Hero() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,var(--bg-cream)_100%)] py-[42px]">
      <Reveal className="container-1200 mb-12 text-center">
        <h1 className="mx-auto max-w-[1280px] text-balance font-heading text-[40px] font-semibold leading-tight text-foreground max-xl:text-[34px] max-md:text-2xl">
          {site.nameFull}
        </h1>
        <p className="mt-3 font-heading text-xl font-medium text-gold-dark max-md:text-lg">
          {site.tagline}
        </p>
      </Reveal>

      <div className="container-1200 grid grid-cols-[minmax(0,1fr)_minmax(360px,520px)] items-center gap-14 max-lg:grid-cols-1 max-lg:gap-8 max-lg:text-center">
        <Reveal className="max-w-[820px] max-lg:mx-auto">
          <p className="mb-2 font-heading text-lg font-medium text-foreground">
            ภารกิจของเรา
          </p>
          <h2 className="font-heading text-[38px] font-normal leading-tight text-foreground max-xl:text-[32px] max-md:text-[23px]">
            <TextAccent className="text-[1.18em]">สืบสานอุดมการณ์</TextAccent>{" "}
            เพื่อผู้ป่วย{" "}
            <TextAccent className="text-[1.12em]">โรคหัวใจและทรวงอก</TextAccent>
          </h2>
          <p className="mt-4 font-heading text-[22px] font-medium leading-9 text-gold-dark max-md:text-lg max-md:leading-8">
            มอบโอกาสในการรักษาให้
            <TextAccent className="text-[1.12em]">ผู้ป่วยยากไร้</TextAccent>{" "}
            ด้วยการสนับสนุนที่ต่อเนื่องและไว้วางใจได้
          </p>
          <p className="mt-5 max-w-[760px] text-base leading-8 text-muted-foreground">
            ก่อตั้งจากการอุทิศตนของ{" "}
            <TextAccent>ศ.นพ.ม.ร.ว.กัลยาณกิติ์ กิติยากร</TextAccent>{" "}
            เพื่อสานต่อความรู้ ความเสียสละ และการช่วยเหลือผู้ป่วยหัวใจและทรวงอก
            ที่ครอบครัวไม่สามารถรับภาระค่ารักษาได้
          </p>
          <div className="mt-6 flex flex-wrap gap-3 max-lg:justify-center">
            <DonateButton />
          </div>
        </Reveal>

        <Reveal className="justify-self-center p-5 text-center max-lg:mx-auto max-lg:w-full max-lg:max-w-xs">
          <img
            src={site.heroIllustration}
            alt="ศ.นพ.ม.ร.ว.กัลยาณกิติ์ กิติยากร"
            className="mx-auto w-full max-w-[460px]"
          />
          <p className="font-heading text-[13.5px] font-semibold text-foreground">
            ศ.นพ.ม.ร.ว.กัลยาณกิติ์ กิติยากร
          </p>
          <p className="text-[11.5px] text-gold-dark">
            ศัลยแพทย์หัวใจและทรวงอก
          </p>
          <p className="mt-2 text-[11.5px] leading-relaxed text-muted-foreground">
            {site.established}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
