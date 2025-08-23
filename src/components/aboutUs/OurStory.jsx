// src/components/about/OurStory.jsx
import React from "react";
import { Link } from "react-router-dom"; // if you use routing
// If Menu is on the same page as an anchor, we'll use <a href="#menu"> instead

const OurStory = () => {
  return (
    <section className="py-20 bg-cream text-textdark">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Image */}
        <div>
          <img
            src="/assets/about-story.png" // replace with your image path
            alt="Our Story"
            className="shadow-lg object-cover w-full h-[500px]"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
            Our Story
          </h2>
          <p className="text-lg text-teal mb-6">
            A journey of passion, flavor, and community.
          </p>
          <p className="text-base leading-relaxed mb-8">
            From humble beginnings to becoming a place where families and friends 
            gather, our restaurant is built on the love for authentic flavors and 
            warm hospitality. Every dish we prepare carries a part of our story, 
            made to delight your taste buds and your heart.
          </p>

          {/* Button to Menu Section */}
          <a
            href="#menu" // links to Menu.jsx section (give Menu.jsx section an id="menu")
            className="px-6 py-3 bg-teal text-cream font-medium rounded-full shadow-md hover:bg-forest transition"
          >
            See Our Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
