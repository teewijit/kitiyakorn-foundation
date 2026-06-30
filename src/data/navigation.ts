export interface NavLink {
  label: string
  to: string
}

/** เมนูหลัก (design.md §5) — โลโก้ลิงก์กลับหน้าหลัก */
export const navLinks: NavLink[] = [
  { label: "เกี่ยวกับมูลนิธิ", to: "/about-us" },
  { label: "โครงการ/กิจกรรม", to: "/project" },
  { label: "ผลการดำเนินงาน", to: "/results" },
  { label: "ข่าวสาร", to: "/news" },
  { label: "ความร่วมมือองค์กร", to: "/partners" },
  { label: "การบริจาค", to: "/donate" },
  { label: "ติดต่อ", to: "/contact" },
]

/** คอลัมน์ footer (design.md §6) */
export interface FooterColumn {
  title: string
  links: NavLink[]
}

export const footerColumns: FooterColumn[] = [
  {
    title: "เกี่ยวกับมูลนิธิ",
    links: [
      { label: "ประวัติมูลนิธิ", to: "/about-us" },
      { label: "วัตถุประสงค์", to: "/about-us" },
      { label: "คณะกรรมการ", to: "/about-us" },
    ],
  },
  {
    title: "โครงการ",
    links: [
      { label: "โครงการทั้งหมด", to: "/project" },
      { label: "โครงการผ่าตัดหัวใจ", to: "/project/1" },
      { label: "กิจกรรมการกุศล", to: "/project/4" },
    ],
  },
  {
    title: "ผลการดำเนินงาน",
    links: [
      { label: "ผู้รับความหวัง 2569", to: "/results" },
      { label: "ข่าวสารล่าสุด", to: "/news" },
      { label: "การสนับสนุนงบประมาณ", to: "/news/7" },
    ],
  },
  {
    title: "ร่วมสนับสนุน",
    links: [
      { label: "ช่องทางการบริจาค", to: "/donate" },
      { label: "ความร่วมมือองค์กร", to: "/partners" },
      { label: "ติดต่อเรา", to: "/contact" },
    ],
  },
]
