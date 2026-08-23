import { news } from "@/data/news"
import { projects } from "@/data/projects"
import { PageBanner } from "@/components/common/PageBanner"
import { ContentListView } from "@/components/common/ContentListView"

export function ProjectsPage() {
  const combinedItems = [...projects, ...news]

  return (
    <>
      <PageBanner
        title="โครงการและข่าวสาร"
        subtitle="รวมโครงการ กิจกรรม และข่าวสารของมูลนิธิ เพื่อให้ติดตามงานช่วยเหลือและความเคลื่อนไหวได้ในหน้าเดียว"
      />
      <section className="container-1200 py-[60px] max-lg:py-10">
        <ContentListView
          items={combinedItems}
          emptyText="ยังไม่มีโครงการหรือข่าวสารในขณะนี้"
        />
      </section>
    </>
  )
}
