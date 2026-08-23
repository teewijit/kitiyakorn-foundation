export interface NavLink {
  label: string
  to: string
}

export const navLinks: NavLink[] = [
  { label: "หน้าแรก", to: "/home" },
  { label: "เกี่ยวกับเรา", to: "/about-us" },
  { label: "ผลการดำเนินงาน", to: "/results" },
  { label: "โครงการและข่าวสาร", to: "/project" },
  { label: "การบริจาค", to: "/donate" },
  { label: "ติดต่อเรา", to: "/contact" },
]

export interface FooterColumn {
  title: string
  links: NavLink[]
}

export const footerColumns: FooterColumn[] = [
  {
    title: "ภาพรวมเว็บไซต์",
    links: [
      { label: "หน้าแรก", to: "/home" },
      { label: "เกี่ยวกับเรา", to: "/about-us" },
    ],
  },
  {
    title: "งานของมูลนิธิ",
    links: [
      { label: "ผลการดำเนินงาน", to: "/results" },
      { label: "โครงการและข่าวสาร", to: "/project" },
      { label: "ข่าวสารล่าสุด", to: "/news" },
    ],
  },
  {
    title: "ร่วมสนับสนุน",
    links: [
      { label: "การบริจาค", to: "/donate" },
      { label: "ติดต่อเรา", to: "/contact" },
      { label: "ความร่วมมือองค์กร", to: "/partners" },
    ],
  },
]
