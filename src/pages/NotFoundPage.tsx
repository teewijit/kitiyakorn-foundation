import { Link } from "react-router-dom"
import { HeartCrack } from "lucide-react"

import { Reveal } from "@/components/common/Motion"

export function NotFoundPage() {
  return (
    <section className="container-1200 grid place-items-center py-32 text-center">
      <Reveal>
        <HeartCrack className="mx-auto h-16 w-16 text-gold" />
        <h1 className="mt-6 font-heading text-3xl font-semibold text-foreground">
          ไม่พบหน้าที่ค้นหา
        </h1>
        <p className="mt-2 text-muted-foreground">
          ขออภัย หน้าที่คุณกำลังมองหาอาจถูกย้ายหรือไม่มีอยู่
        </p>
        <Link
          to="/"
          className="motion-press mt-6 inline-flex rounded-[25px] border-2 border-gold bg-transparent px-6 py-2.5 font-heading text-sm font-semibold text-gold-dark transition-smooth hover:bg-gold-light"
        >
          กลับสู่หน้าหลัก
        </Link>
      </Reveal>
    </section>
  )
}
