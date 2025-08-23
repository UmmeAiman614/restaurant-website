// src/components/home/Reservation.jsx
import React from "react";

const Reservation = () => {
  return (
    <section className="py-20 bg-cream text-textdark">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-forest text-center mb-8">
          Make a Reservation
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Row 1 */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-forest">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-forest rounded-xl px-4 py-3 w-full bg-sand text-textdark placeholder-cream focus:outline-none focus:ring-2 focus:ring-teal"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium text-forest">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-forest rounded-xl px-4 py-3 w-full bg-sand text-cream placeholder-sand focus:outline-none focus:ring-2 focus:ring-teal"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium text-forest">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone"
              className="border border-forest rounded-xl px-4 py-3 w-full bg-sand text-textdark placeholder-cream focus:outline-none focus:ring-2 focus:ring-teal"
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-forest">Date</label>
            <input
              type="date"
              className="border border-forest rounded-xl px-4 py-3 w-full bg-sand text-cream placeholder-sand focus:outline-none focus:ring-2 focus:ring-teal"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium text-forest">Time</label>
            <input
              type="time"
              className="border border-forest rounded-xl px-4 py-3 w-full bg-sand text-textdark placeholder-cream focus:outline-none focus:ring-2 focus:ring-teal"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium text-forest">Guests</label>
            <input
              type="number"
              placeholder="Number of guests"
              min="1"
              className="border border-forest rounded-xl px-4 py-3 w-full bg-sand text-white placeholder-sand focus:outline-none focus:ring-2 focus:ring-teal"
            />
          </div>
        </form>

        {/* Reservation Button */}
        <div className="text-center mb-4">
          <button className="px-8 py-3 bg-teal text-cream font-semibold rounded-xl hover:bg-forest transition">
            Reserve Now
          </button>
        </div>

        {/* Call info */}
        <p className="text-center text-textdark/70">
          You can also call: <span className="font-bold text-forest">+1 224 6787 004</span> to make a reservation.
        </p>
      </div>
    </section>
  );
};

export default Reservation;
