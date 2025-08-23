// src/components/common/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-forest text-cream px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="/assets/nav-logo.png"
          alt="Logo"
          className="h-12 w-auto object-contain"
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 font-medium items-center">
        <Link to="/" className="hover:text-teal">Home</Link>
        <Link to="/menu" className="hover:text-teal">Menu</Link>
        <Link to="/reservation" className="hover:text-teal">Reservation</Link>
        <Link to="/about" className="hover:text-teal">About Us</Link>
        <Link to="/recipe" className="hover:text-teal">Recipe</Link>
        <Link to="/blog" className="hover:text-teal">Blog</Link>
        <Link to="/contact" className="hover:text-teal">Contact</Link>
      </div>

      {/* Mobile Menu Button (Hamburger / Cross) */}
      <button
        className="md:hidden text-cream"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-sand text-textdark shadow-lg z-50"
          >
            <div className="flex flex-col items-center gap-4 py-6 font-medium">
              <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-teal">Home</Link>
              <Link to="/menu" onClick={() => setIsOpen(false)} className="hover:text-teal">Menu</Link>
              <Link to="/reservation" onClick={() => setIsOpen(false)} className="hover:text-teal">Reservation</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-teal">About Us</Link>
              <Link to="/recipe" onClick={() => setIsOpen(false)} className="hover:text-teal">Recipe</Link>
              <Link to="/blog" onClick={() => setIsOpen(false)} className="hover:text-teal">Blog</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-teal">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
