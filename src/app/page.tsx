import HeroSection from "@/components/sections/HeroSection"
import Footer from "@/components/layout/Footer"
import SvgSprite from "@/public/SvgSprite"
import AboutSection from "./about/page"

export default function Home() {
  return (
    <main>
      <SvgSprite/>
      <HeroSection/>
      
      <Footer/>
    </main>
  )
}