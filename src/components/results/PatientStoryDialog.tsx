import type { ReactNode } from "react"
import { Heart, ArrowRight, CircleCheck, UserRound } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { getComparison, type Patient } from "@/data/patients"

interface PatientStoryDialogProps {
  patient: Patient | null
  onOpenChange: (open: boolean) => void
}

/** โมดัลเรื่องราวผู้ป่วย (design.md §7.8) — border-top ทอง, meta + quote + before/after */
export function PatientStoryDialog({ patient, onOpenChange }: PatientStoryDialogProps) {
  return (
    <Dialog open={!!patient} onOpenChange={onOpenChange}>
      <DialogContent className="border-t-4 border-t-gold">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 pr-10">
            เรื่องราวผู้ได้รับความหวัง
            <Heart className="h-4 w-4 fill-gold text-gold" />
          </DialogTitle>
        </DialogHeader>

        {patient && (
          <div className="grid grid-cols-[280px_1fr] gap-6 overflow-y-auto p-6 max-md:grid-cols-1">
            <img
              src={patient.image}
              alt={patient.name}
              className="h-full max-h-[340px] w-full rounded-xl object-cover object-[center_25%]"
            />
            <div>
              <h2 className="font-heading text-[22px] font-bold leading-snug text-foreground">
                {patient.name}
              </h2>

              <div className="mt-4 grid grid-cols-2 gap-3 max-[480px]:grid-cols-1">
                <Meta label="เลขประจำตัวผู้ป่วย (HN)" value={patient.hn} />
                <Meta label="การผ่าตัด" value={patient.operation} />
                <Meta label="วันที่ได้รับการรักษา" value={patient.date} />
                <Meta label="ศัลยแพทย์ผู้ดูแล" value={patient.surgeon} />
              </div>

              <blockquote className="mt-4 rounded-r-md border-l-4 border-l-gold bg-[#fdfbf7] p-4 text-[15px] italic leading-relaxed text-foreground">
                {patient.quote}
              </blockquote>

              <Comparison patient={patient} />
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border-light bg-card-light px-3 py-2">
      <span className="block text-[11px] text-muted-foreground">{label}</span>
      <span className="block text-[13px] font-semibold text-foreground">{value}</span>
    </div>
  )
}

function Comparison({ patient }: { patient: Patient }) {
  const { before, after } = getComparison(patient)
  return (
    <div className="mt-5 flex items-stretch gap-3 max-[600px]:flex-col">
      <Box title="ก่อนการผ่าตัด" items={before} icon={<UserRound className="h-4 w-4" />} />
      <div className="grid place-items-center text-gold-dark max-[600px]:rotate-90">
        <ArrowRight className="h-5 w-5" />
      </div>
      <Box title="หลังการผ่าตัด" items={after} icon={<CircleCheck className="h-4 w-4" />} />
    </div>
  )
}

function Box({
  title,
  items,
  icon,
}: {
  title: string
  items: string[]
  icon: ReactNode
}) {
  return (
    <div className="flex-1 rounded-xl border border-border-light bg-card-light px-4 py-3">
      <p className="flex items-center gap-1.5 font-heading text-[13px] font-semibold text-gold-dark">
        {icon}
        {title}
      </p>
      <ul className="mt-2 space-y-1 text-[12.5px] leading-relaxed text-muted-foreground">
        {items.map((it, i) => (
          <li key={i} className="flex gap-1.5">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-dark" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  )
}
