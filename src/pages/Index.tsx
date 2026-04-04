import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SponsorshipPopup from "@/components/SponsorshipPopup";
import AboutSection from "@/components/AboutSection";
import SponsorsSection from "@/components/SponsorsSection";
import GallerySection from "@/components/GallerySection";
import RegistrationForm from "@/components/RegistrationForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SponsorshipPopup />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SponsorsSection />
      <GallerySection />
      <RegistrationForm />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
