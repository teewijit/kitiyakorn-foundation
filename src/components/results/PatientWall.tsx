import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { patients, type Patient } from "@/data/patients"
import { SectionHeader } from "@/components/common/SectionHeader"
import { Reveal } from "@/components/common/Motion"
import { PatientCard } from "@/components/results/PatientCard"
import { PatientListDialog } from "@/components/results/PatientListDialog"
import { PatientStoryDialog } from "@/components/results/PatientStoryDialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

/** Wall of Hope (design.md §7.5) — carousel การ์ดผู้ป่วยจริง + โมดัลรายชื่อ/เรื่องราว */
export function PatientWall() {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)
  const [count, setCount] = useState(0)
  const [listOpen, setListOpen] = useState(false)
  const [story, setStory] = useState<Patient | null>(null)

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setSelected(api.selectedScrollSnap())
    const onSelect = () => setSelected(api.selectedScrollSnap())
    api.on("select", onSelect).on("reInit", onSelect)
  }, [api])

  const openStory = (p: Patient) => {
    setListOpen(false)
    setStory(p)
  }

  return (
    <section className="bg-card py-[60px] max-lg:py-10">
      <div className="container-1200">
        <div className="mb-8 flex items-end justify-between gap-4 max-md:flex-col max-md:items-stretch max-md:text-center">
          <SectionHeader
            title="กำแพงแห่งความหวัง"
            subtitle="รายชื่อผู้รับความหวังที่ได้รับการผ่าตัดหัวใจ ปีงบประมาณ 2569"
            className="mb-0 text-left max-md:text-center"
          />
          <button
            type="button"
            onClick={() => setListOpen(true)}
            className="inline-flex shrink-0 items-center gap-2 rounded-[25px] border border-border bg-card px-[18px] py-[7px] font-heading text-sm text-foreground transition-smooth hover:border-gold hover:text-gold-dark hover:shadow-card max-md:self-center"
          >
            ดูรายชื่อทั้งหมด <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <Reveal>
          <Carousel opts={{ align: "start", slidesToScroll: 1 }} setApi={setApi}>
            <CarouselContent>
              {patients.map((p) => (
                <CarouselItem
                  key={p.id}
                  className="basis-1/6 max-[1100px]:basis-1/4 max-[900px]:basis-1/3 max-[700px]:basis-1/2 max-[480px]:basis-full"
                >
                  <PatientCard patient={p} onRead={openStory} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Reveal>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
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
      </div>

      <PatientListDialog open={listOpen} onOpenChange={setListOpen} onSelect={openStory} />
      <PatientStoryDialog patient={story} onOpenChange={(o) => !o && setStory(null)} />
    </section>
  )
}
