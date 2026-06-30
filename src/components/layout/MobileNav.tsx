import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { navLinks } from "@/data/navigation"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { DonateButton } from "@/components/common/DonateButton"

/** เมนูมือถือ (design.md §5) — hamburger เปิด Sheet ≤1024px */
export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="เปิดเมนู"
          className="grid h-11 w-11 place-items-center text-foreground min-[1025px]:hidden"
        >
          <Menu className="h-[22px] w-[22px]" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72 p-6">
        <SheetTitle className="mb-6">เมนู</SheetTitle>
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3 py-2.5 font-heading text-[15px] font-medium text-foreground transition-colors hover:bg-gold-light hover:text-gold-dark",
                  isActive && "bg-gold-light text-gold-dark"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-6">
          <DonateButton className="w-full justify-center" onClick={() => setOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  )
}
