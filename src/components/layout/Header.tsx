import { NavLink } from "react-router-dom"

import { cn } from "@/lib/utils"
import { navLinks } from "@/data/navigation"
import { site } from "@/data/site"
import { DonateButton } from "@/components/common/DonateButton"
import { MobileNav } from "@/components/layout/MobileNav"

/** Header sticky (design.md §5) — โลโก้ + เมนู + ปุ่มภาษา + ปุ่มบริจาค */
export function Header() {
  return (
    <header className="sticky top-0 z-[1000] border-b border-border-light bg-card shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
      <div className="container-1200 flex h-[70px] items-center justify-between gap-4 py-3">
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src={site.logo}
            alt={site.nameShort}
            className="h-[38px] w-auto object-contain"
          />
        </NavLink>

        <nav className="hidden items-center gap-5 min-[1025px]:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative font-heading text-sm font-medium text-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:text-gold-dark",
                  isActive && "text-gold-dark after:w-full"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 min-[1025px]:flex">
          {/* <button
            type="button"
            className="rounded-[20px] border border-border px-3 py-[3px] font-alt text-sm text-foreground transition-colors hover:border-gold hover:text-gold-dark"
          >
            EN
          </button> */}
          <DonateButton />
        </div>

        <MobileNav />
      </div>
    </header>
  )
}
