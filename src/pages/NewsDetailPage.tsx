import { useParams } from "react-router-dom"

import { news, getNewsById } from "@/data/news"
import { ContentDetailView } from "@/components/common/ContentDetailView"
import { NotFoundPage } from "@/pages/NotFoundPage"

export function NewsDetailPage() {
  const { id } = useParams()
  const item = id ? getNewsById(id) : undefined

  if (!item) return <NotFoundPage />

  const related = news.filter((n) => n.id !== item.id).slice(0, 4)

  return (
    <ContentDetailView
      item={item}
      backTo="/news"
      backLabel="กลับไปหน้าข่าวสาร"
      related={related}
    />
  )
}
