import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RegistrationForm from "@/components/RegistrationForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <RegistrationForm />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
