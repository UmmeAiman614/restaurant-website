// src/components/home/TodaysSpecials.jsx
import React, { useState } from "react";

const TodaysSpecials = () => {
    const slides = [
        {
            image: "/assets/special1.png",
            title: "Delicious Pasta",
            description: "Handmade pasta with fresh ingredients and our signature sauce.",
        },
        {
            image: "/assets/special1.png",
            title: "Grilled Steak",
            description: "Tender and juicy steaks, perfectly seasoned and grilled to perfection.",
        },
        {
            image: "/assets/special1.png",
            title: "Chocolate Dessert",
            description: "Rich and creamy chocolate dessert, a perfect end to your meal.",
        },
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section
            className="relative py-20 text-textdark"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0, 64, 48, 0.7), rgba(0, 64, 48, 0.7)), url('/assets/todays-specials-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Top Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-cream">
                        Today's Specials
                    </h2>
                    <p className="text-lg md:text-xl text-sand mt-2">
                        A little about us and a brief history of how we started.
                    </p>
                </div>

                {/* Slider */}
                <section className="relative py-12">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center overflow-hidden rounded-xl shadow-lg">
    {/* Slide Image */}
    <div className="md:w-1/2 w-full h-56 md:h-80">
      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Slide Content */}
    <div className="md:w-1/2 w-full bg-forest text-cream flex flex-col justify-center p-6 md:p-8 gap-3 h-56 md:h-80">
      <h3 className="text-xl md:text-2xl font-bold">{slides[current].title}</h3>
      <p className="text-sm md:text-lg">{slides[current].description}</p>
      <div className="flex gap-3 mt-3">
        <button className="px-4 py-2 bg-teal text-cream rounded-xl hover:bg-sand transition">
          Order Now
        </button>
        <button className="px-4 py-2 bg-sand text-textdark rounded-xl hover:bg-teal hover:text-cream transition">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</section>



                {/* Navigation Arrows */}
                <div className="flex justify-center gap-6 mt-8">
                    <button
                        onClick={prevSlide}
                        className="px-4 py-2 bg-sand rounded-full hover:bg-teal text-textdark hover:text-cream transition"
                    >
                        Prev
                    </button>
                    <button
                        onClick={nextSlide}
                        className="px-4 py-2 bg-sand rounded-full hover:bg-teal text-textdark hover:text-cream transition"
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TodaysSpecials;
