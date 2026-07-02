import { useMemo, useState } from "react"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ContentCard } from "@/components/common/ContentCard"
import { MotionList } from "@/components/common/Motion"
import type { ContentItem } from "@/types/content"

interface ContentListViewProps {
  items: ContentItem[]
  emptyText?: string
  disableMotion?: boolean
}

type SortKey = "newest" | "oldest" | "title"

/** มุมมองรายการข่าว/โครงการ — มี search + sort (shadcn Input/Select) + grid การ์ด */
export function ContentListView({
  items,
  emptyText,
  disableMotion = false,
}: ContentListViewProps) {
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState<SortKey>("newest")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const result = items.filter(
      (it) =>
        !q ||
        it.title.toLowerCase().includes(q) ||
        it.description.toLowerCase().includes(q)
    )
    if (sort === "title") {
      result.sort((a, b) => a.title.localeCompare(b.title, "th"))
    } else if (sort === "oldest") {
      result.reverse()
    }
    return result
  }, [items, query, sort])

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ค้นหา..."
            className="pl-9"
          />
        </div>
        <Select value={sort} onValueChange={(v) => setSort(v as SortKey)}>
          <SelectTrigger className="w-44">
            <SelectValue placeholder="เรียงลำดับ" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">ล่าสุดก่อน</SelectItem>
            <SelectItem value="oldest">เก่าก่อน</SelectItem>
            <SelectItem value="title">ตามชื่อ (ก–ฮ)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-muted-foreground">
          {emptyText ?? "ไม่พบรายการที่ค้นหา"}
        </p>
      ) : disableMotion ? (
        <div className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-3 max-[700px]:grid-cols-2 max-[480px]:grid-cols-1">
          {filtered.map((item) => (
            <ContentCard key={`${item.kind}-${item.id}`} item={item} calm />
          ))}
        </div>
      ) : (
        <MotionList className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-3 max-[700px]:grid-cols-2 max-[480px]:grid-cols-1">
          {filtered.map((item) => (
            <ContentCard key={`${item.kind}-${item.id}`} item={item} />
          ))}
        </MotionList>
      )}
    </div>
  )
}
