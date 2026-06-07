import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Works } from "@/components/sections/Works";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Works />
      <Marquee />
      <ServicesSection />
      <AboutSection />
      <Contact />
      <Footer />
    </main>
  );
}
