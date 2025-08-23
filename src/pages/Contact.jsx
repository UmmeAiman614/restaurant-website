import React from "react";
import { MapPin, Mail, Phone, Clock, Facebook, Twitter, Instagram } from "lucide-react";
import Hero from "../components/common/Hero";
import InstagramSubscribe from "../components/common/InstagramSubscribe ";

const Contact = () => {
    return (
        <>
            <Hero
                bgImage="/assets/hero-bg.jpg"
                heading="Contact Us"
                subheading="Explore our delicious starters, breakfast, lunch, dinner, and desserts"
            />
            <div className="bg-cream">
                {/* Contact Section */}
                <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Side Info */}
                    <div className="bg-sand shadow-md p-8 flex flex-col justify-between rounded-2xl">
                        {/* Address */}
                        <div>
                            <h2 className="text-2xl font-bold text-forest mb-4 text-center">Contact Info</h2>
                            <div className="w-16 h-1 bg-teal mx-auto mb-6"></div>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <MapPin className="text-forest" />
                                    <p className="text-textdark">123 Food Street, Karachi, Pakistan</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail className="text-forest" />
                                    <p className="text-textdark">info@yourwebsite.com</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone className="text-forest" />
                                    <p className="text-textdark">+92 300 1234567</p>
                                </div>
                            </div>
                        </div>

                        {/* Working Hours */}
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-forest mb-2 text-center">Working Hours</h3>
                            <div className="w-12 h-1 bg-teal mx-auto mb-4"></div>
                            <p className="text-textdark">Mon - Fri: 9:00 AM - 6:00 PM</p>
                            <p className="text-textdark">Sat - Sun: Closed</p>
                        </div>

                        {/* Social Icons */}
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-forest mb-3 text-center">Follow Us</h3>
                            <div className="w-12 h-1 bg-teal mx-auto mb-4"></div>
                            <div className="flex space-x-6">
                                <a href="#" className="text-forest hover:text-teal">
                                    <Facebook />
                                </a>
                                <a href="#" className="text-forest hover:text-teal">
                                    <Twitter />
                                </a>
                                <a href="#" className="text-forest hover:text-teal">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className="bg-sand shadow-md p-8 rounded-2xl flex flex-col justify-between">
                        <h2 className="text-2xl font-bold text-forest mb-4 text-center">Send Message</h2>
                        <div className="w-16 h-1 bg-teal mx-auto mb-6"></div>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                            />
                            <textarea
                                placeholder="Message"
                                rows="5"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-forest text-white px-6 py-3 rounded-lg hover:bg-teal transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="w-full h-[400px] mt-10">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.941394237525!2d67.0327!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e5c4d75b2f7%3A0x123456789abcdef!2sKarachi!5e0!3m2!1sen!2s!4v123456789"
                        className="w-full h-full border-0"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <InstagramSubscribe />
        </>
    );
};

export default Contact;
