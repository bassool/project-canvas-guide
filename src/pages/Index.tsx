
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionTransition from "@/components/SectionTransition";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <SectionTransition fromColor="from-slate-200" toColor="to-background" />
        <Projects />
        <SectionTransition fromColor="from-background" toColor="to-slate-100" flipX={true} />
        <Skills />
        <SectionTransition fromColor="from-slate-100" toColor="to-background" />
        <About />
        <SectionTransition fromColor="from-background" toColor="to-slate-100" flipX={true} />
        <Contact />
        <SectionTransition fromColor="from-slate-100" toColor="to-background" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
