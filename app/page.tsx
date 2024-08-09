import HeroHeader from "@/components/landing/HeroHeader";
import HeroSection from "@/components/landing/HeroSection";
import "@/styles/index.css"
import HeroContent from "@/components/landing/HeroContent";

export default function Home() {
  return (
    <>
      <HeroSection>
        <HeroHeader />
        <HeroContent />
      </HeroSection>
    </>
  )
}
