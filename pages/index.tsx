import ParticleBackground from '@/components/ParticleBackground'
import ScrollProgress from '@/components/ScrollProgress'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import WebsitesSection from '@/components/WebsitesSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Particles */}
      <ParticleBackground />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <WebsitesSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}

