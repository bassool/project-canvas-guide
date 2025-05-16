
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Projects />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
