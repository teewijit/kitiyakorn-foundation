import { projects } from "@/data/projects"
import { PageBanner } from "@/components/common/PageBanner"
import { ContentListView } from "@/components/common/ContentListView"

export function ProjectsPage() {
  return (
    <>
      <PageBanner
        title="โครงการ/กิจกรรม"
        subtitle="โครงการและกิจกรรมที่มูลนิธิดำเนินการเพื่อช่วยเหลือผู้ป่วยโรคหัวใจและทรวงอก"
      />
      <section className="container-1200 py-[60px] max-lg:py-10">
        <ContentListView items={projects} emptyText="ยังไม่มีโครงการในขณะนี้" />
      </section>
    </>
  )
}
