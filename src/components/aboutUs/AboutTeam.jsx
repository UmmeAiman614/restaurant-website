import React from "react";
import { Facebook, Twitter, Globe } from "lucide-react"; // 👈 lucide-react icons

const team = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    img: "/assets/about-team1.png", // 👈 your actual image paths
  },
  {
    name: "Sarah Smith",
    role: "Head Chef",
    img: "/assets/about-team2.png",
  },
  {
    name: "Michael Johnson",
    role: "Event Manager",
    img: "/assets/about-team3.png",
  },
  {
    name: "Emily Brown",
    role: "Marketing Lead",
    img: "/assets/about-team4.png",
  },
];

const AboutTeam = () => {
  return (
    <div className="bg-cream py-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-forest">OUR TEAM</h2>
        <p className="text-textdark mt-2">
          Meet the amazing people behind our success
        </p>
        <div className="w-16 h-1 bg-teal mx-auto mt-3"></div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
        {team.map((member, index) => (
          <div key={index} className="text-center">
            {/* Image */}
            <img
              src={member.img}
              alt={member.name}
              className="w-60 h-60 object-cover rounded-full mx-auto mb-4 shadow-md"
            />
            {/* Name */}
            <h3 className="text-xl font-bold text-forest">{member.name}</h3>
            {/* Role */}
            <p className="text-textdark mt-1">{member.role}</p>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-forest hover:text-teal">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-forest hover:text-teal">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-forest hover:text-teal">
                <Globe size={20} /> {/* 👈 Used as Google substitute */}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
