import type { NewsItem } from "@/types/content"

const MEDIA = "https://www.kitiyakarafoundation.or.th"

/**
 * ข่าวสาร 11 รายการ — รวมจาก content/_manifest.json (title/date)
 * + raw/api/news.json (description, image, background)
 */
export const news: NewsItem[] = [
  {
    id: "1",
    kind: "news",
    title:
      "สมเด็จพระเจ้าลูกเธอ เจ้าฟ้าพัชรกิติยาภา นเรนทิราเทพยวดี กรมหลวงราชสาริณีสิริพัชร มหาวัชรราชธิดา",
    date: "12 มิถุนายน 2569",
    description:
      "น้อมสำนึกในพระกรุณาธิคุณอันหาที่สุดมิได้ สมเด็จพระเจ้าลูกเธอ เจ้าฟ้าพัชรกิติยาภา นเรนทิราเทพยวดี กรมหลวงราชสาริณีสิริพัชร มหาวัชรราชธิดา",
    image: `${MEDIA}/media/zyxdzzbi/purple-modern-we-are-hiring-facebook-ad-5.png`,
    background: "#3d3a3a",
  },
  {
    id: "2",
    kind: "news",
    title:
      "เนื่องในโอกาสพระราชพิธีมหามงคลเฉลิมพระชนมพรรษา ๔ รอบ สมเด็จพระนางเจ้าฯ พระบรมราชินี ๓ มิถุนายน ๒๕๖๙",
    date: "03 มิถุนายน 2569",
    description:
      "ขอพระองค์ทรงพระเจริญยิ่งยืนนาน ด้วยเกล้าด้วยกระหม่อม ข้าพระพุทธเจ้า คณะกรรมการมูลนิธิ ศาสตราจารย์ นายแพทย์ หม่อมราชวงศ์กัลยาณกิติ์ กิติยากร",
    image: `${MEDIA}/media/3bjpktvs/633.png`,
  },
  {
    id: "3",
    kind: "news",
    title:
      "ข้าพระพุทธเจ้าคณะกรรมการมูลนิธิ ศาสตราจารย์ นายแพทย์ หม่อมราชวงศ์กัลยาณกิติ์ กิติยากร ขอน้อมส่งเสด็จสู่สวรรคาลัย",
    date: "25 ตุลาคม 2568",
    description:
      "คณะกรรมการมูลนิธิ ศาสตราจารย์ นายแพทย์ หม่อมราชวงศ์กัลยาณกิติ์ กิติยากร ขอน้อมส่งเสด็จสู่สวรรคาลัย",
    image: `${MEDIA}/media/i2ubyl21/purple-modern-we-are-hiring-facebook-ad-1.png`,
  },
  {
    id: "4",
    kind: "news",
    title: "การบริจาคผ่าน e-Donation",
    date: "27 กันยายน 2568",
    description: "การบริจาคผ่าน e-Donation เพื่อใช้สิทธิลดหย่อนภาษี",
    image: `${MEDIA}/media/rvsgfwyu/purple-modern-we-are-hiring-facebook-ad-3.png`,
  },
  {
    id: "5",
    kind: "news",
    title: "ปาฐกถา กัลยาณกิติ์ กิติยากร ครั้งที่ 39",
    date: "15 กันยายน 2568",
    description:
      'เรื่อง "Proximal Aortic Aneurysms in Children with Connective Tissue Disorders and Congenital Heart Disease"',
    image: `${MEDIA}/media/1lcol5xg/purple-modern-we-are-hiring-facebook-ad.png`,
  },
  {
    id: "6",
    kind: "news",
    title:
      "คณะกรรมการมูลนิธิ ฯ ขอกราบลา ศาสตราจารย์เกียรติยศนายแพทย์สงคราม ทรัพย์เจริญ ด้วยความอาลัยยิ่ง",
    date: "09 กันยายน 2568",
    description:
      "คณะกรรมการมูลนิธิ ฯ ขอกราบลา ศาสตราจารย์เกียรติยศนายแพทย์สงคราม ทรัพย์เจริญ ด้วยความอาลัยยิ่ง",
    image: `${MEDIA}/media/tummxhw5/purple-modern-we-are-hiring-facebook-ad-1.png`,
  },
  {
    id: "7",
    kind: "news",
    title: "มูลนิธิพิจารณาสนับสนุนงบประมาณ",
    date: "27 ธันวาคม 2567",
    description:
      "ช่วงเดือนมิถุนายน ถึง 31 สิงหาคม ของทุกปี มูลนิธิจะพิจารณาสนับสนุนงบประมาณในการทำผ่าตัดหัวใจและปอด ให้กับโรงพยาบาลของรัฐทุกแห่ง",
    image: `${MEDIA}/media/q5flw0qv/การรณรงค-ด-านการฟ-นฟ-สมรรถภาพห-วใจและปอด-1.png`,
    background: "#375158",
  },
  {
    id: "8",
    kind: "news",
    title: "การรับผู้ป่วยโรคหัวใจ หรือโรคปอด",
    date: "25 ธันวาคม 2567",
    description:
      "การรับผู้ป่วยโรคหัวใจ หรือโรคปอด จะพิจารณาช่วยเหลือ ตามสภาพความเดือดร้อนของผู้ป่วยเป็นหลัก ติดต่อเข้ามาได้ทุกเวลา",
    image: `${MEDIA}/media/zkijdaim/purple-modern-we-are-hiring-facebook-ad-13.png`,
    background: "#242121",
  },
  {
    id: "9",
    kind: "news",
    title: "มูลนิธิฯ ช่วยเหลือและสนับสนุนเครื่องอัดอากาศช่วยในการหายใจ",
    date: "25 ธันวาคม 2567",
    description:
      "เด็กหญิงวิเวียร์ ธรงค์เวช คนไข้มีปัญหาเรื่องปอด มูลนิธิฯ ช่วยเหลือและสนับสนุนเครื่องอัดอากาศช่วยในการหายใจ และสนับสนุนแพมเพิร์สสำหรับเด็กโตทุกเดือน",
    image: `${MEDIA}/media/214frfol/illustrationnews4.png`,
    background: "#ffffff",
  },
  {
    id: "10",
    kind: "news",
    title: "พิจารณาช่วยเหลืออนุเคราะห์การช่วยเหลือผู้ป่วยโรคปอดเรื้อรัง",
    date: "25 ธันวาคม 2567",
    description:
      "พิจารณาช่วยเหลืออนุเคราะห์ตามสภาพการร้องขอ กรณีคนไข้โรคปอดเรื้อรังแต่กำเนิด",
    image: `${MEDIA}/media/dq0nopj4/264644_0.jpg`,
    background: "#ffffff",
  },
  {
    id: "11",
    kind: "news",
    title:
      "มูลนิธิศาสตราจารย์ นายแพทย์ หม่อมราชวงศ์กัลยาณกิติ์ กิติยากร ขอเชิญร่วมกิจกรรมวิ่งการกุศล",
    date: "25 ธันวาคม 2567",
    description: "ขอเชิญร่วมกิจกรรมวิ่งการกุศลเพื่อจัดซื้ออุปกรณ์การแพทย์",
    image: `${MEDIA}/media/wyjfdsu1/illustrationnews2.png`,
    background: "#ffffff",
  },
]

export const getNewsById = (id: string) => news.find((n) => n.id === id)
