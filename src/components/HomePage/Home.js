import React from "react";
import HighlightsSection from './HighlightsSection';
import HeroSection from "./HeroSection";
import TestimonialsSection from "./TestimonialsSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="container">
      <HeroSection/>
      <HighlightsSection/>
      <TestimonialsSection/>
      <Footer/>
    </div>
  );
};

export default Home;
