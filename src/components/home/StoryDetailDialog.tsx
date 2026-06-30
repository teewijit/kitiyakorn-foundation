import type { ReactNode } from "react"
import { CalendarDays } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import type { ContentItem } from "@/types/content"

interface StoryDetailDialogProps {
  item: ContentItem
  children: ReactNode
}

/** Modal เรื่องราว (design.md §7.8) — border-top ทอง, layout 280px / เนื้อหา */
export function StoryDetailDialog({ item, children }: StoryDetailDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="border-t-4 border-t-gold">
        <DialogHeader>
          <DialogTitle className="pr-10">เรื่องราวแห่งความหวัง</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-[280px_1fr] gap-6 overflow-y-auto p-6 max-md:grid-cols-1">
          <img
            src={item.image}
            alt={item.title}
            className="h-full max-h-[320px] w-full rounded-xl object-cover"
            style={{ background: item.background || undefined }}
          />
          <div>
            <h3 className="font-heading text-[22px] font-bold leading-snug text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 flex items-center gap-1.5 text-[13px] text-muted-foreground">
              <CalendarDays className="h-4 w-4 text-gold" />
              {item.date}
            </p>
            <blockquote className="mt-4 rounded-r-md border-l-4 border-l-gold bg-[#fdfbf7] p-4 text-base italic leading-relaxed text-foreground">
              {item.description}
            </blockquote>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
