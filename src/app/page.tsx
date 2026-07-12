import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { About } from "@/components/sections/About";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Plans } from "@/components/sections/Plans";
import { Calculator } from "@/components/sections/Calculator";
import { Subsidy } from "@/components/sections/Subsidy";
import { Process } from "@/components/sections/Process";
import { DocsBenefits } from "@/components/sections/DocsBenefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-w-0 overflow-x-hidden">
      <Header />
      <Hero />
      <TrustStrip />
      <About />
      <WhyChoose />
      <Plans />
      <Calculator />
      <Subsidy />
      <Process />
      <DocsBenefits />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
