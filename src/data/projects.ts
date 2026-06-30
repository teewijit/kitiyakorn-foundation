import type { ProjectItem } from "@/types/content"

const MEDIA = "https://www.kitiyakarafoundation.or.th"

/**
 * โครงการ/กิจกรรม 8 รายการ — รวมจาก content/_manifest.json (title/date)
 * + raw/api/project.json (description, image)
 */
export const projects: ProjectItem[] = [
  {
    id: "1",
    kind: "project",
    title:
      "โครงการผ่าตัดหัวใจต่อชีวิต โดยมูลนิธิศาสตราจารย์ นายแพทย์ หม่อมราชวงศ์กัลยาณกิติ์ กิติยากร",
    date: "09 มิถุนายน 2569",
    description:
      "เริ่มโครงการผ่าตัดเมื่อวันที่ 1 ตุลาคม 2568 และสิ้นสุดการผ่าตัดตามโครงการวันที่ 31 พฤษภาคม 2569 จำนวน 50 ราย",
    image: `${MEDIA}/media/paqptlmm/purple-modern-we-are-hiring-facebook-ad-4.png`,
  },
  {
    id: "2",
    kind: "project",
    title: "บริจาคชุดเครื่องมือผ่าตัดปอดผ่านกล้อง",
    date: "21 มกราคม 2569",
    description: "มูลนิธิ ร่วมบริจาคชุดเครื่องมือผ่าตัดปอดผ่านกล้อง ณ โรงพยาบาลชลบุรี",
    image: `${MEDIA}/media/yoiftocd/318858.jpg`,
  },
  {
    id: "3",
    kind: "project",
    title: "นวมินทร์มหาราชานุภาพ",
    date: "12 พฤศจิกายน 2568",
    description: "รางวัลพระพิฆเนศทองคำ มหาเทพความสำเร็จ",
    image: `${MEDIA}/media/xnvnaqa1/571157539_25427440910207930_4555997035399687457_n.jpg`,
  },
  {
    id: "4",
    kind: "project",
    title: "วิ่งเพื่อหัวใจไปด้วยรัก",
    date: "25 ธันวาคม 2567",
    description:
      'กิจกรรมวิ่งการกุศล "วิ่งเพื่อหัวใจไปด้วยรัก" เพื่อจัดซื้ออุปกรณ์การแพทย์ เมื่อวันที่ 24 พ.ย. 2562 ณ สโมสรฐานทัพเรือ สัตหีบ จ.ชลบุรี',
    image: `${MEDIA}/media/2b3nxkdz/s__216350742.jpg`,
  },
  {
    id: "5",
    kind: "project",
    title: "การประชุมมูลนิธิศาสตราจารย์ นายแพทย์ หม่อมราชวงศ์กัลยาณกิติ์ กิติยากร",
    date: "25 ธันวาคม 2567",
    description:
      "ภาพการประชุมของมูลนิธิศาสตราจารย์ นายแพทย์ หม่อมราชวงศ์กัลยาณกิติ์ กิติยากร ณ โรงแรมสุโกศล",
    image: `${MEDIA}/media/4yufe4jj/267279_0.jpg`,
  },
  {
    id: "6",
    kind: "project",
    title: "มอบเงินบริจาค 1,000,000 บาท ให้ชาวสมุทรสาคร สู้ภัยโควิด-19",
    date: "20 มกราคม 2564",
    description:
      "มูลนิธิศาสตราจารย์ นายแพทย์ หม่อมราชวงศ์ กัลยาณกิติ์ กิติยากร ในพระอุปถัมภ์ฯ มอบเงินบริจาค 1,000,000 บาท ให้ชาวสมุทรสาคร สู้ภัยโควิด-19",
    image: `${MEDIA}/media/50hdul2o/139846001_1046475419188180_2411283655894481496_n.jpg`,
  },
  {
    id: "7",
    kind: "project",
    title: "การประชาสัมพันธ์มูลนิธิศาสตราจารย์ นายแพทย์ หม่อมราชวงศ์กัลยาณกิติ์ กิติยากร",
    date: "30 กันยายน 2563",
    description:
      "ณ บ้านเลขที่ 8/17 วังเทเวศร์ เพื่อออกอากาศในรายการคนไทยหัวใจไม่ท้อ ทางทีวีสีกองทัพบกช่อง 5 โดยหม่อมหลวงสราลี กิติยากร ดำเนินรายการ",
    image: `${MEDIA}/media/0b0ddb3z/illustrationproject3.png`,
  },
  {
    id: "8",
    kind: "project",
    title: "ช่วยเหลือผู้ป่วยโรคหัวใจ",
    date: "14 กรกฎาคม 2563",
    description:
      "เพื่อสืบสานปณิธานของศาสตราจารย์ นายแพทย์ ม.ร.ว.กัลยาณกิติ์ กิติยากร ในการให้ความช่วยเหลือผู้ป่วยโรคหัวใจและทรวงอกที่เป็นผู้ยากไร้ ให้สามารถมีชีวิตอยู่อย่างยืนยาว",
    image: `${MEDIA}/media/24ydywxj/dfqror7owzulq5fzueck8wgeroyrxncl3iqy95kzm5ivqdgra7zyrozu0leccdri6fq.webp`,
  },
]

export const getProjectById = (id: string) => projects.find((p) => p.id === id)
