import { CalendarDays, HeartPulse } from "lucide-react"

import { cn } from "@/lib/utils"
import type { Patient } from "@/data/patients"

interface PatientCardProps {
  patient: Patient
  onRead: (patient: Patient) => void
  className?: string
}

/** การ์ดผู้ป่วย (design.md §7.4) — รูป, ชื่อ, วิธีผ่าตัด, วันที่, ปุ่มอ่านเรื่องราว */
export function PatientCard({ patient, onRead, className }: PatientCardProps) {
  return (
    <div
      className={cn(
        "motion-card group flex h-full flex-col self-stretch rounded-xl border border-border-light bg-card p-3 shadow-card [@media(hover:hover)]:hover:-translate-y-1.5 [@media(hover:hover)]:hover:border-gold-light [@media(hover:hover)]:hover:shadow-hover",
        className
      )}
    >
      <div
        className="mb-3 overflow-hidden rounded-lg bg-[#f5f5f5]"
        style={{ aspectRatio: "4 / 4.8" }}
      >
        <img
          src={patient.image}
          alt={patient.name}
          loading="lazy"
          className="motion-image-zoom h-full w-full object-cover object-[center_30%] group-hover:scale-[1.035] max-[700px]:aspect-square"
        />
      </div>

      <h3 className="line-clamp-2 min-h-[38px] font-heading text-[12.5px] font-semibold leading-snug text-foreground">
        {patient.name}
      </h3>

      <p className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
        <HeartPulse className="h-3 w-3 text-gold" />
        ผ่าตัด <span className="font-medium text-gold-dark">{patient.operation}</span>
      </p>
      <p className="mt-0.5 flex items-center gap-1 text-[11px] text-muted-foreground">
        <CalendarDays className="h-3 w-3 text-gold" />
        {patient.cardDate}
      </p>

      <button
        type="button"
        onClick={() => onRead(patient)}
        className="motion-press mt-auto flex items-center justify-center gap-1 rounded-md border border-border bg-card-light py-2 font-heading text-[11.5px] font-medium text-gold-dark transition-smooth hover:border-gold hover:bg-gold-light"
      >
        อ่านเรื่องราว
      </button>
    </div>
  )
}
