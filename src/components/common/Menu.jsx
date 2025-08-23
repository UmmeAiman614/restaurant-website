// src/components/home/Menu.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const categories = ["All", "Starters", "Breakfast", "Lunch", "Dinner", "Desserts"];
  const menuData = {
    Starters: [
      { name: "English Asparagus", price: "14.95", desc: "Pellentesque enim. Aliquam tempor." },
      { name: "Bruschetta", price: "9.95", desc: "Fresh tomatoes on toasted bread." },
      { name: "Stuffed Mushrooms", price: "12.95", desc: "Mushrooms filled with cheese & herbs." },
    ],
    Breakfast: [
      { name: "Pancakes", price: "8.95", desc: "Served with syrup and berries." },
      { name: "Omelette", price: "10.95", desc: "Eggs with vegetables & cheese." },
    ],
    Lunch: [
      { name: "Grilled Chicken", price: "15.95", desc: "Served with salad & fries." },
      { name: "Caesar Salad", price: "12.95", desc: "Crisp lettuce with dressing." },
      { name: "Veggie Burger", price: "13.95", desc: "With cheese and fries." },
    ],
    Dinner: [
      { name: "Steak", price: "24.95", desc: "Grilled to perfection." },
      { name: "Salmon Fillet", price: "22.95", desc: "Served with vegetables." },
      { name: "Pasta Carbonara", price: "18.95", desc: "Creamy pasta with bacon." },
    ],
    Desserts: [
      { name: "Cheesecake", price: "7.95", desc: "Classic creamy cheesecake." },
      { name: "Chocolate Mousse", price: "6.95", desc: "Rich chocolate dessert." },
      { name: "Tiramisu", price: "8.95", desc: "Coffee-flavored Italian dessert." },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("All");
  const [animate, setAnimate] = useState(false);

  // Get items for selected category
  const menuItems =
    activeCategory === "All"
      ? Object.values(menuData).flat()
      : menuData[activeCategory];

  const handleCategoryClick = (cat) => {
    setAnimate(false); // reset animation
    setActiveCategory(cat);
    setTimeout(() => setAnimate(true), 50); // trigger animation
  };

  return (
    <section className="py-20 bg-cream text-textdark" id="menu">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
          Our Menu
        </h2>
        <p className="text-lg md:text-xl text-textdark/70 mb-8">
          Explore our delicious offerings in every category
        </p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded-xl font-medium transition ${
                activeCategory === cat
                  ? "bg-forest text-cream"
                  : "bg-sand text-textdark hover:bg-teal hover:text-cream"
              }`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
            animate ? "animate-menuFadeIn" : ""
          }`}
        >
          {menuItems.map((item, idx) => (
            <div key={idx} className="pb-4 border-b-2 border-sand/70">
              <h3 className="font-semibold text-forest mb-1">
                {item.name} ................ ${item.price}
              </h3>
              <p className="text-sm text-textdark/70">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="mt-10">
          <Link
            to="/menu"
            className="inline-block px-8 py-3 bg-teal text-cream font-semibold rounded-xl hover:bg-forest transition"
          >
            Explore Our Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
