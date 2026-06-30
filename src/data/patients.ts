import raw from "@/data/patients.json"

export interface Patient {
  id: number
  name: string
  abbrName: string
  hn: string
  operation: string
  date: string
  cardDate: string
  surgeon: string
  image: string
  quote: string
  gender: string
}

interface RawPatient {
  id: number
  name: string
  abbr_name: string
  hn: string
  operation: string
  date: string
  card_date: string
  surgeon: string
  image: string
  quote: string
  gender: string
}

/** ผู้รับการผ่าตัดหัวใจ ปีงบประมาณ 2569 — จาก Foundation5/patients.json */
export const patients: Patient[] = (raw as RawPatient[]).map((p) => ({
  id: p.id,
  name: p.name,
  abbrName: p.abbr_name,
  hn: p.hn,
  operation: p.operation,
  date: p.date,
  cardDate: p.card_date,
  surgeon: p.surgeon,
  // images อยู่ใน public/patients/* — แปลง path เดิม "images/patients/.." → "/patients/.."
  image: p.image.replace(/^images\/patients\//, "/patients/"),
  quote: p.quote,
  gender: p.gender,
}))

export const getPatientById = (id: number) =>
  patients.find((p) => p.id === id)

/** ตัวเลือกตัวกรองในโมดัล (จาก Foundation5 index.html) */
export const operationOptions = [
  { value: "AVR", label: "AVR (Aortic Valve Replacement)" },
  { value: "MVR", label: "MVR (Mitral Valve Replacement)" },
  { value: "MV Repair", label: "MV Repair (Mitral Valve Repair)" },
  { value: "ASD closure", label: "ASD closure" },
  { value: "CABG", label: "CABG (Coronary Artery Bypass)" },
]

export const surgeonOptions = [
  "นพ.ชนาวิทย์ สิทธิสมบัติ",
  "นพ.สุกิตติ์ ดอยแก่น",
]

/**
 * before/after bullets — derive จาก operation/name (ตาม Foundation5 app.js)
 */
export function getComparison(patient: Patient): {
  before: string[]
  after: string[]
} {
  const isChild = /ด\.?ช\.?|ด\.?ญ\.?/.test(patient.name)
  if (isChild) {
    return {
      before: [
        "เหนื่อยง่ายและเล่นซนเหมือนเด็กคนอื่นไม่ได้",
        "ร่างกายแคระแกร็นและเติบโตช้า",
        "มีรูรั่วที่หัวใจทำให้หัวใจทำงานหนัก",
      ],
      after: [
        "หัวใจทำงานปกติและไม่เหนื่อยง่ายอีกแล้ว",
        "สามารถกลับมาวิ่งเล่นและเติบโตตามวัย",
        "ใช้ชีวิตในโรงเรียนและที่บ้านอย่างปลอดภัย",
      ],
    }
  }
  if (patient.operation.includes("CABG")) {
    return {
      before: [
        "มีอาการอึดอัดแน่นหน้าอกเวลาออกแรง",
        "ความเสี่ยงสูงจากเส้นเลือดหัวใจตีบ",
        "ช่วยเหลือตัวเองและทำงานหนักไม่ได้",
      ],
      after: [
        "อาการแน่นหน้าอกหายไปและหายใจโล่ง",
        "ลดความเสี่ยงหัวใจวายเฉียบพลัน",
        "กลับมาทำงานและดูแลครอบครัวได้ตามปกติ",
      ],
    }
  }
  return {
    before: [
      "เหนื่อยง่าย หายใจไม่สะดวก นอนราบไม่ได้",
      "ทำงานไม่ได้เนื่องจากร่างกายอ่อนแอ",
      "คุณภาพชีวิตของตนเองและคนในครอบครัวลดลง",
    ],
    after: [
      "หายใจได้ดีขึ้นและนอนหลับสนิทได้ราบรื่น",
      "กลับไปทำอาชีพพึ่งพาตนเองได้ดีขึ้น",
      "ใช้ชีวิตกับครอบครัวอย่างมีความสุขและยืนยาว",
    ],
  }
}
