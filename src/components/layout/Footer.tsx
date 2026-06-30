import { Link } from "react-router-dom"
import { MapPin, Phone } from "lucide-react"

import { footerColumns } from "@/data/navigation"
import { site } from "@/data/site"

/** Footer (design.md §6) — 6 คอลัมน์ บนพื้นครีมเข้ม */
export function Footer() {
  const currentYear = new Date().getFullYear() + 543;

  return (
    <footer className="border-t border-border bg-footer pt-10">
      <div className="container-1200 grid grid-cols-[repeat(4,1fr)_1.5fr_1fr] gap-5 pb-[30px] max-lg:grid-cols-3 max-md:grid-cols-1 max-md:text-center">
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-[15px] font-heading text-[13.5px] font-semibold text-foreground">
              {col.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[12.5px] text-muted-foreground transition-all hover:pl-0.5 hover:text-gold-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="mb-[15px] font-heading text-[13.5px] font-semibold text-foreground">
            ติดต่อเรา
          </h3>
          <address className="flex flex-col gap-2 not-italic text-[12.5px] leading-[1.45] text-muted-foreground max-md:items-center">
            <span className="flex gap-1.5 max-md:justify-center">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-dark" />
              {site.contact.office}
            </span>
            <span className="flex items-center gap-1.5 max-md:justify-center">
              <Phone className="h-3.5 w-3.5 shrink-0 text-gold-dark" />
              {site.contact.phoneOffice} · {site.contact.phoneDept}
            </span>
          </address>
        </div>

        {/* <div className="max-md:flex max-md:flex-col max-md:items-center">
          <h3 className="mb-[15px] font-heading text-[13.5px] font-semibold text-foreground">
            LINE Official
          </h3>
          <div className="grid h-20 w-20 place-items-center rounded-md border border-border bg-card text-[10px] text-muted-foreground">
            QR Code
          </div>
        </div> */}
      </div>

      <div className="border-t border-border">
        <div className="container-1200 flex items-center justify-between py-4 text-[11.5px] text-muted-foreground max-md:flex-col max-md:gap-2">

<p>© {currentYear} {site.nameFull}</p>
          <div className="flex items-center gap-2">
            <Link to="/about-us" className="hover:text-gold-dark">
              นโยบายความเป็นส่วนตัว
            </Link>
            <span className="text-[10px] text-border">|</span>
            <Link to="/donate" className="hover:text-gold-dark">
              การบริจาค
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
