import { Heart } from "lucide-react"

import { site } from "@/data/site"
import { SectionHeader } from "@/components/common/SectionHeader"
import { MotionList, Reveal } from "@/components/common/Motion"
import { CommitteeSection } from "@/components/about/CommitteeSection"

const objectives = [
  "รับรักษาผู้ป่วยโรคหัวใจและทรวงอกทุกชนิดโดยการผ่าตัด เช่น โรคหัวใจรูแมติก โรคหัวใจแต่กำเนิด วัณโรคปอดเรื้อรัง โรคปอดอักเสบเรื้อรัง ซึ่งมักเกิดกับประชาชนที่ยากจน",
  "ให้การช่วยเหลือผู้ป่วยและญาติ เช่น ค่าพาหนะเดินทางไป–กลับ ค่าอาหารและที่พักอาศัย ค่ารักษาพยาบาลขณะเป็นผู้ป่วยนอกและรักษาตัวในโรงพยาบาล",
  "ช่วยเผยแพร่ทางวิชาการแพทย์และการศึกษา รวมทั้งช่วยการค้นคว้าและวิจัยทางการแพทย์ด้านโรคหัวใจและทรวงอก สนับสนุนภาควิชาศัลยศาสตร์ คณะแพทยศาสตร์ โรงพยาบาลรามาธิบดีเป็นอันดับแรก",
  "ดำเนินงานเพื่อสาธารณประโยชน์ หรือร่วมมือกับองค์กรการกุศลอื่น ๆ",
]

const achievementsIntro =
  "มูลนิธิ ศาสตราจารย์ นายแพทย์ หม่อมราชวงศ์กัลยาณกิติ์ กิติยากร ได้ดำเนินงานและทำกิจกรรมต่าง ๆ เพื่อให้บรรลุวัตถุประสงค์ที่ได้วางแนวทางไว้ โดยสรุปผลงานที่ผ่านมาดังนี้"

const achievements = [
  "สนับสนุนโครงการผ่าตัดหัวใจนอกเวลา เพื่อระลึกครบรอบ 90 ปี ศาสตราจารย์ นายแพทย์ หม่อมราชวงศ์กัลยาณกิติ์ กิติยากร ระหว่างวันที่ 29 กันยายน 2563 และสิ้นสุดโครงการเมื่อวันที่ 30 กรกฎาคม 2564 และสนับสนุนเครื่องมือผ่าตัดหัวใจ ให้แก่โรงพยาบาลเชียงรายประชานุเคราะห์ เป็นเงิน 2,565,000.00 บาท",
  "บริจาคเงินสนับสนุนการจัดซื้ออุปกรณ์เวชภัณฑ์ในสถานการณ์แพร่ระบาดของเชื้อไวรัส COVID 19 ให้กับโรงพยาบาลสมุทรสาคร เป็นเงิน 1,000,000.00 บาท",
  "สนับสนุนเครื่องอัดอากาศขณะหายใจเข้าให้คนไข้ในอนุเคราะห์ของมูลนิธิฯ ผ่านหน่วยโรคปอดเด็ก โรงพยาบาลรามาธิบดี เป็นเงิน 110,000.00 บาท",
  "สนับสนุนโครงการผ่าตัดหัวใจ ปี 2566 และ 2567 ให้แก่โรงพยาบาลเชียงรายประชานุเคราะห์ เป็นเงินปีละ 2,000,000.00 บาท",
  "สนับสนุนโครงการผ่าตัดปอด ปี 2566 และ 2567 ให้แก่คณะแพทยศาสตร์วชิรพยาบาล เป็นเงินปีละ 1,100,000.00 บาท",
  "สนับสนุนโครงการศึกษาดูงานด้าน Complex Endovascular Aortic Surgery ให้แก่อาจารย์แพทย์ประจำหน่วยศัลยศาสตร์ทรวงอก โรงพยาบาลรามาธิบดี จำนวน 2 ราย เป็นเงิน 200,000.00 บาท",
  "ค่าใช้จ่ายคนไข้ในอนุเคราะห์ของมูลนิธิ ประจำปี 2568 เป็นจำนวนเงิน 208,000.65 บาท",
  "สนับสนุนโครงการผ่าตัดหัวใจ โรงพยาบาลเชียงรายประชานุเคราะห์ ประจำปี 2568 เป็นจำนวนเงิน 2,000,000.00 บาท",
  "สนับสนุนโครงการผ่าตัดปอด คณะแพทยศาสตร์ วชิรพยาบาล ประจำปี 2568 เป็นจำนวนเงิน 1,100,000.00 บาท",
  "สงเคราะห์ค่าใช้จ่ายผู้ป่วย ประจำปี 2568 เป็นจำนวนเงิน 4,750.00 บาท",
]

export function AboutPage() {
  return (
    <>
      {/* <PageBanner
        title="เกี่ยวกับมูลนิธิ"
        subtitle="เป็นเวลากว่า 33 ปี ที่มูลนิธิฯ ดำเนินงานช่วยเหลือผู้ป่วยหัวใจและทรวงอกอย่างต่อเนื่อง"
      /> */}

      <section className="container-1200 py-[60px] max-lg:py-10">
        <div className="grid grid-cols-[1fr_1.1fr] items-center gap-10 max-lg:grid-cols-1">
          <Reveal direction="left">
          <img
            src={site.heroIllustration}
            alt={site.nameShort}
            className="w-full rounded-2xl shadow-soft"
          />
          </Reveal>
          <Reveal direction="right">
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              {site.nameFull}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.9] text-muted-foreground">
            ก่อกำเนิดจากการอุทิศตนของ ศ.นพ.ม.ร.ว.กัลยาณกิติ์ กิติยากร ซึ่งตลอดชีวิตการทำงาน เป็นศัลยแพทย์หัวใจและทรวงอก ท่านได้เสียสละและทุ่มเทเพื่อพัฒนาองค์ความรู้ รวมทั้งผ่าตัดรักษาผู้ป่วยโรคหัวใจมามากมาย หลังจาก “ศ.นพ.ม.ร.ว.กัลยาณกิติ์ กิติยากรถึงแก่อนิจกรรม เมื่อปี 2530” สมเด็จพระกนิษฐาธิราชเจ้า กรมสมเด็จพระเทพรัตนราชสุดาฯ ทรงดำริให้จัดตั้งมูลนิธิฯเพื่อสืบสานปณิธานของ ศ.นพ.ม.ร.ว.กัลยาณกิติ์ กิติยากร ในการช่วยเหลือผู้ป่วยหัวใจและทรวงอกที่ยากไร้ ให้มีชีวิตที่ยืนยาว และปัจจุบันยังได้รับพระเมตตาจากพระเจ้าวรวงศ์เธอ พระองค์เจ้าโสมสวลี กรมหมื่นสุทธนารีนาถ เป็นองค์ประธานอุปถัมภ์อีกด้วย
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <SectionHeader title="วัตถุประสงค์ของมูลนิธิฯ" />
          <MotionList className="mx-auto grid max-w-4xl gap-4">
            {objectives.map((o, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-xl border border-border-light bg-card p-5 shadow-card"
              >
                <Heart className="mt-0.5 h-5 w-5 shrink-0 fill-gold-light text-gold" />
                <span className="text-[14.5px] leading-relaxed text-foreground">{o}</span>
              </li>
            ))}
          </MotionList>
        </Reveal>

        <Reveal className="mt-16">
          <SectionHeader title="ผลการดำเนินงานที่ผ่านมา" />
          <p className="mx-auto mb-6 max-w-4xl text-center text-[14.5px] leading-relaxed text-muted-foreground">
            {achievementsIntro}
          </p>
          <MotionList className="mx-auto grid max-w-4xl gap-3">
            {achievements.map((a, i) => (
              <li
                key={i}
                className="flex gap-3 border-b border-border-light pb-3 text-[14px] leading-relaxed text-muted-foreground"
              >
                <span className="font-alt font-semibold text-gold-dark">{i + 1}.</span>
                {a}
              </li>
            ))}
          </MotionList>
        </Reveal>
      </section>

      <CommitteeSection />
    </>
  )
}
