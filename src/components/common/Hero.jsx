// src/components/common/Hero.jsx
import React from "react";

const Hero = ({ bgImage, heading, subheading }) => {
  return (
    <section
      className="relative h-72 md:h-[28rem] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Greenish Overlay */}
      <div className="absolute inset-0 bg-forest/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-cream mb-2">{heading}</h1>
        <p className="text-lg md:text-2xl text-sand max-w-2xl">{subheading}</p>
      </div>
    </section>
  );
};

export default Hero;
