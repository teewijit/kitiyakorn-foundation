import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { getNewsById } from "@/data/news"
import { getProjectById } from "@/data/projects"
import { site } from "@/data/site"

const SITE_TITLE = site.nameFull

function getPageTitle(pathname: string) {
  if (pathname === "/") return `Intro | ${SITE_TITLE}`
  if (pathname === "/home") return `หน้าแรก | ${SITE_TITLE}`
  if (pathname === "/about-us") return `เกี่ยวกับเรา | ${SITE_TITLE}`
  if (pathname === "/project") return `โครงการและข่าวสาร | ${SITE_TITLE}`
  if (pathname === "/results") return `ผลการดำเนินงาน | ${SITE_TITLE}`
  if (pathname === "/news") return `ข่าวสาร | ${SITE_TITLE}`
  if (pathname === "/partners") return `ความร่วมมือองค์กร | ${SITE_TITLE}`
  if (pathname === "/donate") return `การบริจาค | ${SITE_TITLE}`
  if (pathname === "/contact") return `ติดต่อเรา | ${SITE_TITLE}`

  const projectMatch = pathname.match(/^\/project\/([^/]+)$/)
  if (projectMatch) {
    const item = getProjectById(projectMatch[1])
    return `${item?.title ?? "โครงการและข่าวสาร"} | ${SITE_TITLE}`
  }

  const newsMatch = pathname.match(/^\/news\/([^/]+)$/)
  if (newsMatch) {
    const item = getNewsById(newsMatch[1])
    return `${item?.title ?? "ข่าวสาร"} | ${SITE_TITLE}`
  }

  return `ไม่พบหน้า | ${SITE_TITLE}`
}

export function RootLayout() {
  const { pathname } = useLocation()
  const isIntro = pathname === "/"

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
    document.title = getPageTitle(pathname)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {!isIntro && <Header />}
      <main className="flex-1">
        <Outlet />
      </main>
      {!isIntro && <Footer />}
    </div>
  )
}
