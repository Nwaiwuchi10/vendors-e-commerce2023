import React from "react";

import "./Hero.css";
import SliderCard from "../Slider/SliderCard";
const Hero = () => {
  return (
    <>
      <section className="container section-slider ">
        <div className="container">
          <SliderCard />
        </div>
      </section>
    </>
  );
};

export default Hero;
