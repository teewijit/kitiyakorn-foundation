import { Reveal } from "@/components/common/Motion"

/** Hero หน้าผลการดำเนินงาน ใช้ภาพแทน section ตาม Foundation5 */
export function ResultsHero() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,var(--bg-cream)_100%)] py-8 max-md:py-5">
      <Reveal className="container-1200">
        <img
          src="/header.png"
          alt="ภาพรวมผลการดำเนินงานโครงการผ่าตัดหัวใจ ปีงบประมาณ 2569"
          className="w-full rounded-2xl shadow-soft"
        />
      </Reveal>
    </section>
  )
}
