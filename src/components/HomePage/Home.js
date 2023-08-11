import React from "react";
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
      <Footer/>
    </>
  );
};

export default Home;