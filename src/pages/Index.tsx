// 1. Importações EXISTENTES (Exportações default)
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { CertificateSection } from "@/components/CertificateSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 lg:pt-20">
        <HeroSection />
        <AboutSection />
        <CertificateSection />
        <PortfolioSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
