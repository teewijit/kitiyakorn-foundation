import { news } from "@/data/news"
import { PageBanner } from "@/components/common/PageBanner"
import { ContentListView } from "@/components/common/ContentListView"

export function NewsListPage() {
  return (
    <>
      <PageBanner
        title="ข่าวสาร"
        subtitle="ข่าวสารและประกาศล่าสุดจากมูลนิธิศาสตราจารย์ นายแพทย์ หม่อมราชวงศ์กัลยาณกิติ์ กิติยากร"
        animated={false}
      />
      <section className="container-1200 py-[60px] max-lg:py-10">
        <ContentListView
          items={news}
          emptyText="ยังไม่มีข่าวสารในขณะนี้"
          disableMotion
        />
      </section>
    </>
  )
}
