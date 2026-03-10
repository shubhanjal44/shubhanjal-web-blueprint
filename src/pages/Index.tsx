import React from "react";
import { Routes, Route } from "react-router-dom";

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

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <Hero />
      {/* <SkillCarousel /> */}
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
};

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Future subpages can be added here */}
    </Routes>
  );
};

export default Index;
