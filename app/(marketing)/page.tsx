import Navbar from "../../components/layout/navbar";
import Hero from "../../components/sections/hero";
import Services from "../../components/sections/services";
import Process from "../../components/sections/process";
import WorkSection from "../../components/sections/work";
import CTASection from "../../components/sections/cta"; 
import Footer from "../../components/sections/footer";
import Preloader from "../../components/ui/preloader";
import Capabilities from "../../components/sections/capabilities";
import Contact from "../../components/sections/contact";

export default function Page() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
        <Preloader />
      <Navbar />
      <Hero />
      <Services />
      <Capabilities />
      <Process />
      <WorkSection />

      {/* 🔥 CTA SHOULD COME HERE */}
      <CTASection />
      <Contact />

      <Footer />
    </main>
  );
}