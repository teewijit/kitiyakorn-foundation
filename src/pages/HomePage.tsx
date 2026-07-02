import { Hero } from "@/components/home/Hero"
import { HomeOriginalSections } from "@/components/home/HomeOriginalSections"
import { WallOfHope } from "@/components/home/WallOfHope"
import { StoryOfHope } from "@/components/home/StoryOfHope"
import { CtaBanner } from "@/components/home/CtaBanner"

export function HomePage() {
  return (
    <>
      <Hero />
      <HomeOriginalSections />
      {/* <StatsSection /> */}
      <WallOfHope />
      <StoryOfHope />
      <CtaBanner />
    </>
  )
}
