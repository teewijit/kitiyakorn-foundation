import { useMemo, useState } from "react"
import { Search } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  patients,
  operationOptions,
  surgeonOptions,
  type Patient,
} from "@/data/patients"

interface PatientListDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSelect: (patient: Patient) => void
}

const ALL = "all"

/** โมดัลรายชื่อผู้ป่วยทั้งหมด — search + filter (operation/surgeon) + grid */
export function PatientListDialog({
  open,
  onOpenChange,
  onSelect,
}: PatientListDialogProps) {
  const [query, setQuery] = useState("")
  const [op, setOp] = useState(ALL)
  const [surgeon, setSurgeon] = useState(ALL)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return patients.filter((p) => {
      const textMatch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.hn.toLowerCase().includes(q) ||
        p.operation.toLowerCase().includes(q) ||
        p.surgeon.toLowerCase().includes(q)
      const opMatch = op === ALL || p.operation.includes(op)
      const surgeonMatch = surgeon === ALL || p.surgeon.includes(surgeon)
      return textMatch && opMatch && surgeonMatch
    })
  }, [query, op, surgeon])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="pr-10">
            รายชื่อผู้รับความหวังทั้งหมด ({patients.length} ชีวิต)
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-wrap gap-3 border-b border-border-light px-6 py-4">
          <div className="relative min-w-[200px] flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ค้นหาด้วยชื่อ, HN, หรือวิธีผ่าตัด..."
              className="pl-9"
            />
          </div>
          <Select value={op} onValueChange={setOp}>
            <SelectTrigger className="w-52">
              <SelectValue placeholder="วิธีผ่าตัดทั้งหมด" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL}>วิธีผ่าตัดทั้งหมด</SelectItem>
              {operationOptions.map((o) => (
                <SelectItem key={o.value} value={o.value}>
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={surgeon} onValueChange={setSurgeon}>
            <SelectTrigger className="w-52">
              <SelectValue placeholder="แพทย์ผู้ผ่าตัดทั้งหมด" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL}>แพทย์ผู้ผ่าตัดทั้งหมด</SelectItem>
              {surgeonOptions.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid max-h-[55vh] grid-cols-4 gap-3 overflow-y-auto p-6 max-[900px]:grid-cols-3 max-[700px]:grid-cols-2 max-[480px]:grid-cols-1">
          {filtered.length === 0 ? (
            <p className="col-span-full py-10 text-center text-muted-foreground">
              ไม่พบรายชื่อที่ค้นหา
            </p>
          ) : (
            filtered.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => onSelect(p)}
                className="group flex flex-col rounded-xl border border-border-light bg-card p-2.5 text-left shadow-card transition-smooth hover:-translate-y-1 hover:border-gold-light hover:shadow-hover"
              >
                <div className="mb-2 overflow-hidden rounded-lg bg-[#f5f5f5]" style={{ aspectRatio: "1 / 1" }}>
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-[center_25%]"
                  />
                </div>
                <span className="line-clamp-1 font-heading text-[12px] font-semibold text-foreground">
                  {p.name}
                </span>
                <span className="text-[10.5px] text-muted-foreground">
                  {p.operation} · {p.cardDate}
                </span>
              </button>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
