// src/components/home/Restaurant.jsx
import React, { useState } from "react";

const Restaurant = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/assets/restaurant1.png",
    "/assets/restaurant2.png",
    "/assets/restaurant3.png",
  ];

  return (
    <section className="py-20 bg-cream text-textdark">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-forest text-center mb-12">
          Our Story
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <div className="grid grid-rows-2 gap-4">
            {/* Top image */}
            <img
              src={images[0]}
              alt="Restaurant 1"
              className="w-full h-64 object-cover rounded-xl shadow-md cursor-pointer hover:opacity-90 transition"
              onClick={() => setSelectedImage(images[0])}
            />

            {/* Bottom two images */}
            <div className="grid grid-cols-2 gap-4">
              {images.slice(1).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Restaurant ${i + 2}`}
                  className="w-full h-64 object-cover rounded-xl shadow-md cursor-pointer hover:opacity-90 transition"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-2xl font-semibold text-forest mb-4">
              Where Tradition Meets Taste
            </h3>
            <p className="text-lg md:text-xl mb-4 leading-relaxed">
              Since its humble beginnings, <span className="font-bold">Delizio</span> has been more than just a restaurant—it’s a living legacy of taste, culture, and community. 
              Our recipes have been passed down through generations, carrying the flavors of tradition in every dish we serve.
            </p>
            <p className="text-lg md:text-xl mb-4 leading-relaxed">
              We believe that food is not only about nourishment but also about connection. 
              Every plate tells a story, crafted with fresh ingredients, love, and a passion for authenticity. 
              Families, friends, and food lovers from all walks of life gather here to share unforgettable moments.
            </p>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              From our hand-tossed breads to our signature family recipes, Delizio has become a warm and welcoming home for those who seek comfort in flavors that remind them of heritage.
            </p>
            <button className="px-6 py-3 bg-teal text-cream rounded-xl hover:bg-forest transition">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-6xl max-h-[100vh] rounded-xl shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Restaurant;
