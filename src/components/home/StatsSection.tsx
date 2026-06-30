import { stats } from "@/data/stats"
import { StatsGrid } from "@/components/common/StatsGrid"

/** Stats card หน้าหลัก (design.md §7.3) */
export function StatsSection() {
  return (
    <section className="container-1200 py-[60px] max-lg:py-10">
      <StatsGrid stats={stats} />
    </section>
  )
}
