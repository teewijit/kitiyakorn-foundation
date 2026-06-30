import { Link } from "react-router-dom"
import { Heart } from "lucide-react"

import { cn } from "@/lib/utils"

interface DonateButtonProps {
  className?: string
  onClick?: () => void
}

/** ปุ่มบริจาค (design.md §5 / §8) — แคปซูล พื้นทองอ่อน hover พื้นทองเต็ม */
export function DonateButton({ className, onClick }: DonateButtonProps) {
  return (
    <Link
      to="/donate"
      onClick={onClick}
      className={cn(
        "motion-press inline-flex items-center gap-2 rounded-[25px] border border-[#ebdcb5] bg-gold-light px-[18px] py-[7px] font-heading text-[13.5px] font-medium text-gold-dark transition-smooth hover:bg-gold hover:text-primary-foreground",
        className
      )}
    >
      <Heart className="h-4 w-4" />
      ร่วมบริจาค
    </Link>
  )
}
