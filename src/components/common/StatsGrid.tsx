import type { Stat } from "@/data/stats"
import { MotionList } from "@/components/common/Motion"

/** กริดสถิติ (design.md §7.3) — card-light มีเส้นคั่น, responsive 5→3→2→1 */
export function StatsGrid({ stats }: { stats: Stat[] }) {
  return (
    <MotionList className="grid grid-cols-5 overflow-hidden rounded-xl border border-border bg-card-light shadow-soft max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1 border-border-light px-2.5 py-[14px] text-center [&:not(:last-child)]:border-r max-[1024px]:[&:nth-child(3n)]:border-r-0 max-[768px]:[&:nth-child(2n)]:border-r-0"
          >
            <div className="grid h-14 w-14 place-items-center rounded-full bg-gold-light/60">
              <Icon className="h-7 w-7 text-gold-dark" />
            </div>
            <span className="font-alt text-4xl font-bold text-foreground">
              {stat.value}
            </span>
            <span className="font-heading text-[13px] font-semibold text-foreground">
              {stat.label}
            </span>
            <span className="text-[11px] text-muted-foreground">{stat.desc}</span>
          </div>
        )
      })}
    </MotionList>
  )
}
