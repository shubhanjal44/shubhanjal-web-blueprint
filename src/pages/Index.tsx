import React from "react";

import SkillCarousel from '../components/SkillCarousel';

import ScrollProgress from "../components/ScrollProgress"; // Adjust path if needed
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";





const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Add theme switcher somewhere visible, e.g., on top */}


      <ScrollProgress />
      <Navigation />
      <Hero />
    <SkillCarousel />
      <About />
      
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Contact />
      
    </div>
  );
};

export default Index;
