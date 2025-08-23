// src/components/home/QuoteSlider.jsx
import React, { useState, useEffect } from "react";

const QuoteSlider = () => {
  const quotes = [
    "“Delizio brings authentic flavors that remind me of home.”",
    "“The ambience is cozy, and every meal feels special.”",
    "“Best place in town for family dinners and celebrations.”",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 5000); // change quote every 5s

    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <section
      className="relative py-24 bg-fixed bg-forest/80 flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/restaurant1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-forest/70"></div>

      {/* Quote Content */}
      <div className="relative z-10 max-w-3xl text-center px-4 text-cream">
        <p className="text-xl md:text-2xl italic font-semibold">{quotes[current]}</p>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {quotes.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                current === idx ? "bg-teal scale-125" : "bg-cream/50"
              }`}
              onClick={() => setCurrent(idx)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteSlider;
