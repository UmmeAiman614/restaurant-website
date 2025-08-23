// src/components/home/FeaturesSection.jsx
import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      img: "/assets/feature1.png",
      title: "Fresh Ingredients",
      desc: "We use only the freshest ingredients to bring authentic flavors to your table."
    },
    {
      img: "/assets/feature2.png",
      title: "Cozy Ambience",
      desc: "A warm and inviting environment where you can enjoy every meal with comfort."
    },
    {
      img: "/assets/feature3.png",
      title: "Fast Service",
      desc: "Our team ensures quick and friendly service for a delightful dining experience."
    }
  ];

  return (
    <section
      className="relative py-20"
      style={{
        backgroundImage: "url('/assets/features-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Greenish overlay */}
      <div className="absolute inset-0 bg-forest/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-cream">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Features</h2>
        <p className="text-lg md:text-xl mb-12">Little things make us best in town</p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-cream rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"
              />
              <div className="p-6 text-textdark">
                <h3 className="text-2xl font-semibold mb-2 text-forest">{feature.title}</h3>
                <p className="text-base">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
