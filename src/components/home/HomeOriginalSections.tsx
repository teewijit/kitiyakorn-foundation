import { ArrowRight, HandHeart, HeartPulse, Landmark } from "lucide-react"
import { Link } from "react-router-dom"

import { site } from "@/data/site"
import { Reveal, MotionList } from "@/components/common/Motion"
import { TextAccent } from "@/components/common/TextAccent"

const MEDIA = "https://www.kitiyakarafoundation.or.th"

const originalImages = {
  programCare: `${MEDIA}/media/nibbcarc/u3.png`,
  programSupport: `${MEDIA}/media/xgedv4da/u2.png`,
  donateCare: `${MEDIA}/media/qe0nnmny/u1.png`,
}

const supportCards = [
  {
    icon: HeartPulse,
    title: "ช่วยเหลือผู้ป่วย",
    text: "สนับสนุนค่ารักษาและการผ่าตัดโรคหัวใจและทรวงอกให้ผู้ป่วยยากไร้ได้รับโอกาสทันเวลา",
  },
  {
    icon: HandHeart,
    title: "ส่งเสริมบุคลากร",
    text: "หนุนเสริมหน่วยงานและบุคลากรทางการแพทย์ที่ทำงานด้านโรคหัวใจและปอดอย่างต่อเนื่อง",
  },
  {
    icon: Landmark,
    title: "สืบสานอุดมการณ์",
    text: "ดำเนินงานเพื่อสาธารณประโยชน์ตามเจตนารมณ์ของผู้ก่อตั้งมูลนิธิ",
  },
]

export function HomeOriginalSections() {
  return (
    <>
      <section className="bg-card py-[72px] max-lg:py-12">
        <div className="container-1200 grid grid-cols-[minmax(0,1fr)_minmax(300px,430px)] items-center gap-14 max-lg:grid-cols-1">
          <Reveal direction="left" className="max-w-[900px] max-lg:mx-auto max-lg:text-center">
            <p className="mb-5 font-heading text-[18px] font-semibold text-gold-dark">
              โปรแกรมของเรา
            </p>
            <h2 className="text-balance font-heading text-[44px] font-semibold leading-tight text-foreground max-xl:text-[36px] max-md:text-[26px]">
              มุ่งเน้น{" "}
              <TextAccent className="text-[1.12em]">สืบสานอุดมการณ์</TextAccent>{" "}
              การเสียสละ การอุทิศร่างกาย และ{" "}
              <TextAccent className="text-[1.08em]">แรงใจ</TextAccent>
              <span className="block">เพื่อผู้ป่วยโรคหัวใจที่ยากไร้</span>
            </h2>
            <p className="mt-6 max-w-[820px] text-[17px] leading-8 text-muted-foreground max-lg:mx-auto">
              มูลนิธิฯ สานต่อเจตนารมณ์ของผู้ก่อตั้ง ผ่านการสนับสนุน{" "}
              <TextAccent>การรักษา</TextAccent> การศึกษา และการพัฒนาบุคลากรทางการแพทย์
              เพื่อให้ความช่วยเหลือเดินทางไปถึงผู้ป่วยที่ต้องการจริง
            </p>
            <p className="mt-4 max-w-[820px] text-[15.5px] leading-8 text-muted-foreground max-lg:mx-auto">
              {site.established} เพื่อเป็นอนุสรณ์แด่ศาสตราจารย์ นายแพทย์
              หม่อมราชวงศ์กัลยาณกิติ์ กิติยากร และสานต่อภารกิจช่วยเหลือผู้ป่วยอย่างต่อเนื่อง
            </p>
            <Link
              to="/project/1"
              className="motion-press mt-8 inline-flex items-center overflow-hidden rounded-md border border-gold font-heading text-[18px] font-semibold text-gold-dark transition-smooth hover:bg-gold-light"
            >
              <span className="px-6 py-2.5">ดูรายละเอียด</span>
              <span className="grid self-stretch place-items-center border-l border-gold px-3">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>

          <Reveal direction="right" className="justify-self-center max-md:hidden">
            <img
              src={originalImages.programCare}
              alt=""
              aria-hidden
              loading="lazy"
              className="max-h-[520px] w-full object-contain"
            />
          </Reveal>
        </div>
      </section>

      <section className="container-1200 py-[72px] max-lg:py-12">
        <div className="grid grid-cols-[minmax(300px,520px)_minmax(0,1fr)] items-center gap-14 max-lg:grid-cols-1">
          <Reveal direction="left" className="justify-self-center max-md:hidden">
            <img
              src={originalImages.programSupport}
              alt=""
              aria-hidden
              loading="lazy"
              className="max-h-[480px] w-full object-contain"
            />
          </Reveal>

          <Reveal direction="right" className="max-w-[780px] max-lg:mx-auto max-lg:text-center">
            <h2 className="text-balance font-heading text-[38px] font-semibold leading-tight text-foreground max-md:text-[26px]">
              <TextAccent className="text-[1.1em]">ช่วยเหลือ</TextAccent>{" "}
              ส่งเสริม และสนับสนุนให้การรักษาเกิดขึ้นได้จริง
            </h2>
            <p className="mt-5 text-[16.5px] leading-8 text-muted-foreground">
              มูลนิธิฯ ให้ความช่วยเหลือแก่{" "}
              <TextAccent>ผู้ป่วยโรคหัวใจและปอด</TextAccent>{" "}
              พร้อมสนับสนุนหน่วยงานและบุคลากรด้านการรักษา
              เพื่อให้ผู้ป่วยได้รับโอกาสในเวลาที่สำคัญที่สุด
            </p>
            <Link
              to="/project/2"
              className="motion-press mt-7 inline-flex items-center overflow-hidden rounded-md border border-gold font-heading text-[18px] font-semibold text-gold-dark transition-smooth hover:bg-gold-light"
            >
              <span className="px-6 py-2.5">ดูรายละเอียด</span>
              <span className="grid self-stretch place-items-center border-l border-gold px-3">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        </div>

        <MotionList className="mt-12 grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {supportCards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="rounded-xl bg-card-light p-6 shadow-card"
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-gold-light text-gold-dark">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-[19px] font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-7 text-muted-foreground">
                  {card.text}
                </p>
              </div>
            )
          })}
        </MotionList>
      </section>

      <section className="overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,var(--bg-cream)_100%)] py-[72px] max-lg:py-12">
        <div className="container-1200 grid grid-cols-[1fr_320px] items-center gap-12 max-lg:grid-cols-1 max-lg:text-center">
          <Reveal direction="left">
            <p className="mb-4 font-heading text-[18px] font-semibold text-gold-dark">
              เหตุใดจึงควรเลือกเรา
            </p>
            <h2 className="max-w-[950px] text-balance font-heading text-[38px] font-semibold leading-tight text-foreground max-lg:mx-auto max-md:text-[26px]">
              ทุกการบริจาคคือ{" "}
              <TextAccent className="text-[1.1em]">โอกาสในการรักษา</TextAccent>{" "}
              สำหรับผู้ป่วยที่ครอบครัวรับภาระไม่ไหว
            </h2>
            <p className="mt-5 max-w-3xl text-[16px] leading-8 text-muted-foreground max-lg:mx-auto">
              ร่วมบริจาคสมทบทุนเพื่อช่วยเหลือ{" "}
              <TextAccent>ผู้ป่วยยากไร้</TextAccent>{" "}
              ให้ได้รับการรักษาอย่างเหมาะสม และกลับไปใช้ชีวิตกับครอบครัวได้อีกครั้ง
            </p>
            <Link
              to="/donate"
              className="motion-press mt-8 inline-flex items-center gap-2 rounded-[25px] border-2 border-gold px-6 py-3 font-heading text-[15px] font-semibold text-gold-dark transition-smooth hover:bg-gold-light"
            >
              ร่วมบริจาค
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal direction="right" className="mx-auto max-w-[280px] max-md:hidden">
            <img
              src={originalImages.donateCare}
              alt=""
              aria-hidden
              loading="lazy"
              className="w-full object-contain"
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
