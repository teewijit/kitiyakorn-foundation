import { ArrowRight, HandHeart, HeartPulse, Landmark } from "lucide-react"
import { Link } from "react-router-dom"

import { site } from "@/data/site"
import { Reveal, MotionList } from "@/components/common/Motion"
import { TextAccent } from "@/components/common/TextAccent"

const MEDIA = "https://www.kitiyakarafoundation.or.th"

const originalImages = {
  supportOne: `${MEDIA}/media/nibbcarc/u3.png`,
  supportTwo: `${MEDIA}/media/xgedv4da/u2.png`,
  supportThree: `${MEDIA}/media/qe0nnmny/u1.png`,
}

const supportCards = [
  {
    icon: HeartPulse,
    title: "ช่วยเหลือผู้ป่วย",
    text: "สนับสนุนค่ารักษาและการผ่าตัดโรคหัวใจและทรวงอกสำหรับผู้ป่วยยากไร้",
  },
  {
    icon: HandHeart,
    title: "ส่งเสริมบุคลากร",
    text: "ช่วยเหลือหน่วยงานและบุคลากรทางการแพทย์ที่ทำงานด้านโรคหัวใจและปอด",
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
      <section className="bg-card py-[60px] max-lg:py-10">
        <div className="container-1200 grid grid-cols-[0.9fr_1.1fr] items-center gap-10 max-lg:grid-cols-1">
          <Reveal direction="left" className="mx-auto max-w-sm">
            <img
              src={site.logo}
              alt={site.nameShort}
              className="h-72 w-auto object-contain max-md:h-24"
              loading="lazy"
            />
          </Reveal>

          <Reveal direction="right">
            <p className="mb-2 font-heading text-sm font-semibold text-gold-dark">
              โปรแกรมของเรา
            </p>
            <h2 className="max-w-3xl font-heading text-[28px] font-semibold leading-snug text-foreground max-md:text-2xl">
              มุ่งเน้น{" "}
              <TextAccent className="text-[1.14em]">การเสียสละ</TextAccent>{" "}
              และ
              <TextAccent className="text-[1.14em]">แรงใจ</TextAccent>{" "}
              เพื่อผู้ป่วยโรคหัวใจที่ยากไร้
            </h2>
            <p className="mt-4 text-[15px] leading-[1.85] text-muted-foreground">
              มูลนิธิฯ สืบสานอุดมการณ์ของผู้ก่อตั้ง ผ่านการสนับสนุน
              <TextAccent>การรักษา</TextAccent>, การศึกษา และการพัฒนาบุคลากรทางการแพทย์
              เพื่อให้ความช่วยเหลือเดินทางไปถึงผู้ป่วยที่ต้องการจริง
            </p>
            <p className="mt-3 text-[14.5px] leading-[1.85] text-muted-foreground">
              {site.established} เพื่อเป็นอนุสรณ์แด่ศาสตราจารย์ นายแพทย์
              หม่อมราชวงศ์กัลยาณกิติ์ กิติยากร และสานต่อภารกิจช่วยเหลือผู้ป่วยอย่างต่อเนื่อง
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-1200 py-[60px] max-lg:py-10">
        <div className="grid grid-cols-[1.05fr_0.95fr] items-center gap-10 max-lg:grid-cols-1">
          <Reveal direction="left">
            <p className="mb-2 font-heading text-sm font-semibold text-gold-dark">
              บริการช่วยเหลือผู้ป่วย
            </p>
            <h2 className="font-heading text-[28px] font-semibold leading-snug text-foreground max-md:text-2xl">
              <TextAccent className="text-[1.12em]">ช่วยเหลือ</TextAccent>{" "}
              ส่งเสริม และสนับสนุนให้การรักษาเกิดขึ้นได้จริง
            </h2>
            <p className="mt-4 text-[15px] leading-[1.85] text-muted-foreground">
              มูลนิธิฯ ให้ความช่วยเหลือแก่
              <TextAccent>ผู้ป่วยโรคหัวใจและปอด</TextAccent>{" "}
              พร้อมสนับสนุนหน่วยงานและบุคลากรที่ทำงานด้านการรักษา เพื่อให้ผู้ป่วยได้รับโอกาส
              ในเวลาที่สำคัญที่สุด
            </p>
          </Reveal>

          <MotionList className="grid grid-cols-2 gap-4 max-[560px]:grid-cols-1">
            <img
              src={originalImages.supportOne}
              alt=""
              aria-hidden
              loading="lazy"
              className="min-h-40 rounded-xl bg-card-light object-contain p-4 shadow-card"
            />
            <img
              src={originalImages.supportTwo}
              alt=""
              aria-hidden
              loading="lazy"
              className="min-h-40 rounded-xl bg-card-light object-contain p-4 shadow-card"
            />
          </MotionList>
        </div>

        <MotionList className="mt-8 grid grid-cols-3 gap-4 max-md:grid-cols-1">
          {supportCards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="rounded-xl border border-border-light bg-card p-5 shadow-card"
              >
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-full bg-gold-light text-gold-dark">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-[17px] font-semibold text-foreground">
                  <TextAccent>{card.title}</TextAccent>
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                  {card.text}
                </p>
              </div>
            )
          })}
        </MotionList>
      </section>

      <section className="overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,var(--bg-cream)_100%)] py-[60px] max-lg:py-10">
        <div className="container-1200 grid grid-cols-[1fr_300px] items-center gap-10 max-lg:grid-cols-1 max-lg:text-center">
          <Reveal direction="left">
            <p className="mb-2 font-heading text-sm font-semibold text-gold-dark">
              เหตุใดจึงควรเลือกเรา
            </p>
            <h2 className="font-heading text-[28px] font-semibold leading-snug text-foreground max-md:text-2xl">
              ทุกการบริจาคคือ
              <TextAccent className="text-[1.14em]">โอกาสในการรักษา</TextAccent>{" "}
              สำหรับผู้ป่วยที่ครอบครัวรับภาระไม่ไหว
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-[1.85] text-muted-foreground max-lg:mx-auto">
              ร่วมบริจาคสมทบทุนเพื่อช่วยเหลือ
              <TextAccent>ผู้ป่วยยากไร้</TextAccent>{" "}
              ให้ได้รับการรักษาอย่างเหมาะสม และกลับไปใช้ชีวิตกับครอบครัวได้อีกครั้ง
            </p>
            <Link
              to="/donate"
              className="motion-press mt-6 inline-flex items-center gap-2 rounded-[25px] border-2 border-gold px-5 py-2.5 font-heading text-[13.5px] font-semibold text-gold-dark transition-smooth hover:bg-gold-light"
            >
              ร่วมบริจาค
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal direction="right" className="mx-auto max-w-[260px]">
            <img
              src={originalImages.supportThree}
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
