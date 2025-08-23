// src/components/menu/GridMenu.jsx
import React, { useState } from "react";

const GridMenu = ({ menuItems }) => {
  const categories = ["All", "Starters", "Breakfast", "Lunch", "Dinner", "Desserts"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All"
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-forest/10 text-textdark">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-forest mb-2">
          Explore Our Menu
        </h2>
        {/* Subheading */}
        <p className="text-lg md:text-xl text-teal mb-12">
          Discover a variety of dishes carefully crafted for every taste
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

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="bg-sand rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition animate-menuFadeIn">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-forest mb-2">{item.name}</h3>
                <p className="text-sm mb-3">{item.desc}</p>
                <span className="font-bold text-teal">${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridMenu;
