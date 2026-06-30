import {
  Heart,
  HeartPulse,
  HandHeart,
  Stethoscope,
  Users,
  Building2,
  TrendingUp,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Stat {
  icon: LucideIcon
  value: string
  label: string
  desc: string
}

/**
 * สถิติ — derive จากเนื้อหา content/02-about-us (33+ ปี, ยอดสนับสนุน)
 * และจำนวนโครงการ/ข่าวในคลังข้อมูล (design.md §7.3)
 */
export const stats: Stat[] = [
  {
    icon: Heart,
    value: "38+",
    label: "ปีแห่งการให้",
    desc: "ดำเนินงานตั้งแต่ปี 2530",
  },
  {
    icon: HeartPulse,
    value: "50",
    label: "ผ่าตัดต่อชีวิต",
    desc: "ราย/โครงการล่าสุด",
  },
  {
    icon: HandHeart,
    value: "10M+",
    label: "บาทที่สนับสนุน",
    desc: "ค่ารักษา & อุปกรณ์การแพทย์",
  },
  {
    icon: Stethoscope,
    value: "8",
    label: "โครงการ",
    desc: "ทั่วประเทศ",
  },
  {
    icon: Users,
    value: "11",
    label: "ข่าวสาร/กิจกรรม",
    desc: "อัปเดตต่อเนื่อง",
  },
]

/**
 * สถิติหน้าผลการดำเนินงาน — โครงการผ่าตัดหัวใจ ปีงบประมาณ 2569
 * (จาก Foundation5/index.html)
 */
export const resultsStats: Stat[] = [
  { icon: HeartPulse, value: "50", label: "ชีวิต", desc: "ได้รับการผ่าตัดสำเร็จ" },
  { icon: Users, value: "50", label: "ครอบครัว", desc: "กลับมามีความสุข" },
  {
    icon: Building2,
    value: "1",
    label: "โรงพยาบาล",
    desc: "เชียงรายประชานุเคราะห์",
  },
  { icon: Stethoscope, value: "2", label: "ศัลยแพทย์", desc: "ผู้เชี่ยวชาญ" },
  {
    icon: TrendingUp,
    value: "100%",
    label: "อัตราความสำเร็จ",
    desc: "ปลอดภัยและมีประสิทธิภาพ",
  },
]
