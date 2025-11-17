import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Pricing from "@/components/Pricing";
import CaseStudies from "@/components/CaseStudies";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Pricing />
      <CaseStudies />
      <Tools />
      <Contact />
    </main>
  );
};

export default Index;
