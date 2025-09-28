import Hero from "@/components/section/hero"
import AboutPPKO from "@/components/section/about-ppko"
import BestSellers from "@/components/section/best-sellers"
import MapsLocation from "@/components/section/maps-location"
import Testimonials from "@/components/section/testimonials"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutPPKO />
      <BestSellers />
      <MapsLocation />
      <Testimonials />
    </div>
  )
}
