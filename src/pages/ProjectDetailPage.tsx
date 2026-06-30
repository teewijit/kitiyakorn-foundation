import { useParams } from "react-router-dom"

import { projects, getProjectById } from "@/data/projects"
import { ContentDetailView } from "@/components/common/ContentDetailView"
import { NotFoundPage } from "@/pages/NotFoundPage"

export function ProjectDetailPage() {
  const { id } = useParams()
  const item = id ? getProjectById(id) : undefined

  if (!item) return <NotFoundPage />

  const related = projects.filter((p) => p.id !== item.id).slice(0, 4)

  return (
    <ContentDetailView
      item={item}
      backTo="/project"
      backLabel="กลับไปหน้าโครงการ"
      related={related}
    />
  )
}
