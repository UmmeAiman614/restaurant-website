// src/components/menu/OverlayMenu.jsx
import React, { useState } from "react";

const OverlayMenu = ({ menuItems }) => {
  const categories = ["All", "Starters", "Breakfast", "Lunch", "Dinner", "Desserts"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All"
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-16 bg-cream text-textdark">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-forest text-center mb-2">
          Overlay
        </h2>
        <p className="text-lg md:text-xl text-center text-teal mb-10">
          These fine folks trusted the award winning restaurant.
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

        {/* Overlay Menu Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="relative cursor-pointer group animate-menuFadeIn shadow-md">
              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Green overlay on hover */}
              <div className="absolute inset-0 bg-teal/70 opacity-0 group-hover:opacity-100 flex items-center justify-center text-cream font-bold text-lg transition-opacity">
                {item.name} ... ${item.price}
              </div>

              {/* + icon partially inside and outside */}
              <div className="absolute bottom-0 right-4 translate-y-1/2 bg-teal w-10 h-10 flex items-center justify-center rounded-full text-cream font-bold text-xl shadow-lg">
                +
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverlayMenu;
