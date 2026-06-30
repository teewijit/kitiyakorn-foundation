import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"
import { news } from "@/data/news"
import { projects } from "@/data/projects"
import { SectionHeader } from "@/components/common/SectionHeader"
import { ContentCard } from "@/components/common/ContentCard"
import { Reveal } from "@/components/common/Motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

/** ผสมข่าว+โครงการ เรียงสลับ เพื่อโชว์ในแถบ Wall of Hope */
const items = [
  projects[0], news[0], projects[1], news[1], projects[2],
  news[2], projects[3], news[3], projects[4], news[4],
].filter(Boolean)

/** Wall of Hope (design.md §7.5) — carousel การ์ดข่าว/โครงการ + dot indicators */
export function WallOfHope() {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setSelected(api.selectedScrollSnap())
    const onSelect = () => setSelected(api.selectedScrollSnap())
    api.on("select", onSelect).on("reInit", onSelect)
  }, [api])

  return (
    <section className="bg-card py-[60px] max-lg:py-10">
      <div className="container-1200">
        <SectionHeader
          title="กำแพงแห่งความหวัง"
          subtitle="โครงการที่รอสนับสนุน และข่าวสารล่าสุดของมูลนิธิ"
        />

        <Reveal>
          <Carousel opts={{ align: "start", slidesToScroll: 1 }} setApi={setApi}>
            <CarouselContent>
            {items.map((item) => (
              <CarouselItem
                key={`${item.kind}-${item.id}`}
                className="basis-1/6 max-[1100px]:basis-1/4 max-[900px]:basis-1/3 max-[700px]:basis-1/2 max-[480px]:basis-full"
              >
                <ContentCard item={item} />
              </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Reveal>

        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`ไปสไลด์ที่ ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "h-[7px] w-[7px] rounded-full bg-[#d8d3bf] transition-all",
                i === selected && "h-2 w-2 bg-foreground"
              )}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/project"
            className="inline-flex items-center gap-2 rounded-[25px] border border-border bg-card px-[18px] py-[7px] font-heading text-sm text-foreground transition-smooth hover:border-gold hover:text-gold-dark hover:shadow-card"
          >
            ดูทั้งหมด
          </Link>
        </div>
      </div>
    </section>
  )
}
