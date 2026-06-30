import { Routes, Route } from "react-router-dom"

import { RootLayout } from "@/components/layout/RootLayout"
import { HomePage } from "@/pages/HomePage"
import { AboutPage } from "@/pages/AboutPage"
import { ProjectsPage } from "@/pages/ProjectsPage"
import { ProjectDetailPage } from "@/pages/ProjectDetailPage"
import { NewsListPage } from "@/pages/NewsListPage"
import { NewsDetailPage } from "@/pages/NewsDetailPage"
import { ResultsPage } from "@/pages/ResultsPage"
import { PartnersPage } from "@/pages/PartnersPage"
import { ContactPage } from "@/pages/ContactPage"
import { DonatePage } from "@/pages/DonatePage"
import { NotFoundPage } from "@/pages/NotFoundPage"

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutPage />} />
        <Route path="project" element={<ProjectsPage />} />
        <Route path="project/:id" element={<ProjectDetailPage />} />
        <Route path="results" element={<ResultsPage />} />
        <Route path="news" element={<NewsListPage />} />
        <Route path="news/:id" element={<NewsDetailPage />} />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="donate" element={<DonatePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
