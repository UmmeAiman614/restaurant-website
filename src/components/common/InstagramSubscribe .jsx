// src/components/home/InstagramSubscribe.jsx
import React, { useState } from "react";

const InstagramSubscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed successfully with ${email}`);
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-cream text-textdark">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest leading-tight">
            Instagram
          </h2>
          <p className="text-lg md:text-xl text-forest mt-1">
            We love posting photos of our customers having a good time
          </p>

          {/* Green line below subheading */}
          <div className="w-24 h-1 bg-teal mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Three columns */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Left - Subscribe */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-5xl md:text-6xl font-extrabold text-forest">
              Subscribe
            </h3>
          </div>

          {/* Center - Subheading */}
          <div className="flex-1 text-center md:text-center">
            <p className="text-lg md:text-xl font-medium text-forest">
              Get updates about new dishes and upcoming events
            </p>
          </div>

          {/* Right - Email subscription */}
          <div className="flex-1 flex justify-center md:justify-end">
            <form
              className="flex flex-col sm:flex-row gap-2 w-full max-w-md"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-3 rounded-l-xl sm:rounded-r-none border border-textdark/30 focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-teal text-cream rounded-r-xl sm:rounded-l-none font-semibold hover:bg-forest transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSubscribe;
