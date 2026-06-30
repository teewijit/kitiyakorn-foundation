# มูลนิธิ ศ.นพ.ม.ร.ว.กัลยาณกิติ์ กิติยากร — เว็บไซต์ (Vite + React + shadcn/ui)

เว็บไซต์ใหม่ของมูลนิธิฯ สร้างตาม theme ใน [`../design.md`](../design.md) (โทนทอง–ครีม)
และเนื้อหาจาก [`../content/`](../content) + [`../raw/api/`](../raw/api)

## เริ่มต้นใช้งาน

```bash
cd app
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check (tsc) + production build → dist/
npm run preview  # ดู production build
```

## Stack

- **Vite 6** + **React 18** + **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/vite`) — theme tokens เป็น CSS variables ใน `src/index.css`
- **shadcn/ui** (new-york) — primitives ใน `src/components/ui`
- **react-router-dom v6** — multi-page routing
- ฟอนต์: Prompt (หัวข้อ) · Sarabun (เนื้อหา) · Outfit (ตัวเลข) จาก Google Fonts

## โครงสร้าง

```
src/
  index.css              theme tokens (gold/cream) + shadcn vars + Tailwind
  main.tsx · App.tsx     entry + routes
  lib/utils.ts           cn()
  types/content.ts       NewsItem, ProjectItem
  data/                  news · projects · stats · navigation · site (เนื้อหาแยกจาก markup)
  components/
    ui/                  shadcn primitives (button, card, dialog, sheet, select, carousel, …)
    layout/              Header · MobileNav · Footer · RootLayout
    common/              SectionHeader · ContentCard · ContentListView · ContentDetailView · …
    home/                Hero · StatsSection · WallOfHope · StoryOfHope · CtaBanner · StoryDetailDialog
    results/             ResultsHero(image) · PatientCard · PatientWall · PatientListDialog · PatientStoryDialog · ResultsStory
  pages/                 Home · About · Projects(+detail) · Results · News(+detail) · Partners · Contact · Donate · NotFound
```

## Routes

`/` · `/about-us` · `/project` · `/project/:id` · `/results` · `/news` · `/news/:id`
· `/partners` · `/contact` · `/donate` · `*` (404)

เมนูหลัก 7 รายการ: เกี่ยวกับมูลนิธิ · โครงการ/กิจกรรม · ผลการดำเนินงาน · ข่าวสาร ·
ความร่วมมือองค์กร · การบริจาค · ติดต่อ (โลโก้ลิงก์กลับหน้าหลัก)

## หมายเหตุ

- รูปภาพอ้าง absolute URL ไปยังโดเมนเดิม (`https://www.kitiyakarafoundation.or.th/media/...`)
  หากต้องการให้ทำงาน offline ให้ดาวน์โหลดมาเก็บใน `public/` แล้วแก้ path ใน `src/data/*`
- "Wall of Hope" (design.md §7.5) map กับข่าว+โครงการจริง และ Stats (§7.3) derive จากหน้า about
  เนื่องจากคลังเนื้อหาไม่มีข้อมูลคนไข้/สถิติโดยตรง
- ปุ่ม EN และ social icons เป็น UI placeholder (ยังไม่ผูก i18n / ลิงก์จริง)
```
