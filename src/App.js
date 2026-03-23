import "@/App.css";
import { AnnouncementBanner } from "./components/AnnouncementBanner";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { BeforeAfterSection } from "./components/BeforeAfterSection";
import { VideoGallerySection } from "./components/VideoGallerySection";
import { WhyLaserSection } from "./components/WhyLaserSection";
import { ApplicationsSection } from "./components/ApplicationsSection";
import { ProcessSection } from "./components/ProcessSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

function App() {
  return (
    <div className="App min-h-screen bg-[#0B0F17]" data-testid="app-container">
      <AnnouncementBanner />
      <Navbar />
      <main>
        <HeroSection />
        <VideoGallerySection />
        <BeforeAfterSection />
        <WhyLaserSection />
        <ApplicationsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
