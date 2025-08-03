import React from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";

import ScrollProgress from "../components/ScrollProgress";
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
      {/* Place ThemeSwitcher here so it renders */}
      <ThemeSwitcher />

      <ScrollProgress />
      <Navigation />
      <Hero />
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
