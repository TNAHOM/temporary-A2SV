/**
 * This code was generated by Builder.io.
 */
import React from "react";
import ServiceSlider from "./ServiceSlider";
import StatisticsSection from "./StatisticsSection";
import FeaturesSection from "./FeaturesSection";
import TestimonialsSection from "./TestimonialsSection";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
import FirstScreen from "./FirstScreen";

const MainPage = () => {
  return (
    <div className="flex flex-col pt-5 bg-white">
      <div className="flex flex-col items-center pl-16 w-full max-md:pl-5 max-md:max-w-full">
        <FirstScreen/>
        
        {/* <ServiceSlider /> */}

        <StatisticsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
