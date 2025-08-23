// src/components/menu/TileMenu.jsx
import React, { useState } from "react";

const TileMenu = ({ menuItems }) => {
  const categories = ["All", "Starters", "Breakfast", "Lunch", "Dinner", "Desserts"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All"
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-16 bg-cream text-textdark">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-forest mb-2">
          Our Delicious Menu
        </h2>
        {/* Subheading */}
        <p className="text-lg md:text-xl text-teal mb-10">
          Explore our carefully crafted dishes for every taste and occasion
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full font-medium ${
                selectedCategory === cat ? "bg-teal text-cream" : "bg-sand text-textdark"
              } hover:bg-teal hover:text-cream transition`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="md:flex md:items-center md:gap-6 bg-sand rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition animate-menuFadeIn"
            >
              {/* Image */}
              <div className="md:w-1/2 flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-l-xl transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 p-6">
                <h3 className="text-2xl font-semibold text-forest mb-2">
                  {item.name} ........... ${item.price}
                </h3>
                <p className="text-base text-textdark">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TileMenu;
