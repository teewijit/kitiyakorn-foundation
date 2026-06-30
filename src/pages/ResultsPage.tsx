import { resultsStats } from "@/data/stats"
import { StatsGrid } from "@/components/common/StatsGrid"
import { ResultsHero } from "@/components/results/ResultsHero"
import { PatientWall } from "@/components/results/PatientWall"
import { ResultsStory } from "@/components/results/ResultsStory"
import { CtaBanner } from "@/components/home/CtaBanner"

/** หน้าผลการดำเนินงาน — โครงการผ่าตัดหัวใจ ปีงบประมาณ 2569 ( port จาก Foundation5) */
export function ResultsPage() {
  return (
    <>
      <ResultsHero />
      <section className="container-1200 py-[40px] max-lg:py-8">
        <StatsGrid stats={resultsStats} />
      </section>
      <PatientWall />
      <ResultsStory />
      <CtaBanner />
    </>
  )
}
