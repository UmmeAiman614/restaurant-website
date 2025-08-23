// src/components/common/Footer.jsx
import { ArrowRight, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-sand text-textdark py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Us */}
        <div>
          <h2 className="text-xl font-bold text-forest mb-4">About Us</h2>
          <p className="text-sm leading-relaxed mb-4">
            Welcome to Delizio, where taste meets tradition. We serve authentic
            dishes prepared with love and fresh ingredients, bringing joy to every meal.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center text-teal font-medium hover:underline"
          >
            Read More <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-xl font-bold text-forest mb-4">Recent Posts</h2>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/assets/footer-post1.png"
              alt="Post 1"
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <p className="text-sm font-semibold">Delicious Pasta Recipe</p>
              <span className="text-xs text-textdark/70">Aug 15, 2025</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="/assets/footer-post2.png"
              alt="Post 2"
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <p className="text-sm font-semibold">5 Healthy Salads to Try</p>
              <span className="text-xs text-textdark/70">Aug 10, 2025</span>
            </div>
          </div>
        </div>

        {/* Reach Us */}
        <div>
          <h2 className="text-xl font-bold text-forest mb-4">Reach Us</h2>

          {/* Social Icons */}
          <div className="flex gap-4 mb-6">
            <a href="#" className="p-2 rounded-full bg-cream hover:bg-teal transition">
              <Facebook size={20} className="text-forest" />
            </a>
            <a href="#" className="p-2 rounded-full bg-cream hover:bg-teal transition">
              <Instagram size={20} className="text-forest" />
            </a>
            <a href="#" className="p-2 rounded-full bg-cream hover:bg-teal transition">
              <Twitter size={20} className="text-forest" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={18} className="text-teal" />
            <span>123 Food Street, Lahore</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <Phone size={18} className="text-teal" />
            <span>+92 300 1234567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-teal" />
            <span>contact@delizio.com</span>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 border-t border-textdark/20 pt-4 text-sm">
        © {new Date().getFullYear()} Delizio. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
