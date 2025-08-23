// src/components/home/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative h-[80vh] w-full bg-cover bg-center" 
      style={{ backgroundImage: "url('/assets/home-hero-bg.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-forest/90"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Logo */}
        <img
          src="/assets/home-hero-logo.png"
          alt="Delizio Logo"
          className="w-48 h-48 mb-6 object-contain"  // increased size
        />

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-cream mb-4">
          Welcome to Delizio
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl text-sand max-w-2xl">
          Taste the tradition, served fresh with love.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
