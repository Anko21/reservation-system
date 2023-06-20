import React from "react";
import AboutSection from "./AboutSection.js"
import HighlightsSection from './HighlightsSection';
import HeroSection from "./HeroSection";
import TestimonialsSection from "./TestimonialsSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <HeroSection/>
      <HighlightsSection/>
      <TestimonialsSection/>
      <AboutSection/>
      <Footer/>
    </>
  );
};

export default Home;