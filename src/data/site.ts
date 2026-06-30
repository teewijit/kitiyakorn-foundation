const MEDIA = "https://www.kitiyakarafoundation.or.th"

/** ข้อมูลหลักของมูลนิธิ — สกัดจาก content/01-home, 02-about-us, 04-donate */
export const site = {
  nameShort: "มูลนิธิ ศ.นพ.ม.ร.ว.กัลยาณกิติ์ กิติยากร",
  nameFull:
    "มูลนิธิศาสตราจารย์ นายแพทย์ หม่อมราชวงศ์กัลยาณกิติ์ กิติยากร",
  tagline: "โรคหัวใจและทรวงอก",
  established: "ก่อตั้งเมื่อ 15 พฤษภาคม 2530",
  mission:
    "ก่อกำเนิดจากการอุทิศตนของ ศ.นพ.ม.ร.ว.กัลยาณกิติ์ กิติยากร ซึ่งตลอดชีวิตการทำงาน เป็นศัลยแพทย์หัวใจและทรวงอก ท่านได้เสียสละและทุ่มเทเพื่อพัฒนาองค์ความรู้ รวมทั้งผ่าตัดรักษาผู้ป่วยโรคหัวใจมามากมาย",
  purpose:
    "มุ่งเน้นสืบสานอุดมการณ์ การเสียสละ การอุทิศร่างกาย และแรงใจเพื่อผู้ป่วยโรคหัวใจที่ยากไร้",
  logo: `${MEDIA}/media/xcnkrfgh/screenshot-2025-06-26-153116-photoroom-1-1-photoroom.png`,
  crest: `${MEDIA}/media/0mhfc4k1/messageimage_1747972618812-photoroom.png`,
  heroIllustration: `${MEDIA}/media/fbghu3pe/illustration1.png`,
  contact: {
    office:
      "สำนักงานมูลนิธิ ภาควิชาศัลยศาสตร์หัวใจและทรวงอก คณะแพทยศาสตร์โรงพยาบาลรามาธิบดี ถนนพระราม 6 กรุงเทพฯ 10400",
    phoneOffice: "02 356 0790",
    phoneDept: "02 201 1315",
    contactName: "คุณอาภาพร",
  },
  bank: {
    bank: "ธนาคารไทยพาณิชย์ จำกัด (มหาชน)",
    accountName: "มูลนิธิ ศ.นพ.มรว.กัลยาณกิติ์ กิติยากร",
    accountType: "บัญชีออมทรัพย์",
    accountNo: "020-2-26485-8",
  },
  donateQr: `${MEDIA}/media/rzrl14cr/e-donation2.png`,
  scbIcon: `${MEDIA}/media/tmhncyna/c36719e5c38eaf3aeeb1d15cd272fa39.png`,
} as const
