import React from "react";
import Hero from "../components/common/Hero";
import OurStory from "../components/aboutUs/OurStory";
import AboutService from "../components/aboutUs/AboutService";
import AboutTeam from "../components/aboutUs/AboutTeam";
import Menu from "../components/common/Menu";
import QuoteSlider from "../components/common/QuoteSlider";
import InstagramSubscribe from "../components/common/InstagramSubscribe ";


const AboutUs = () => {
    return (
        <>
            <Hero
                bgImage="/assets/hero-bg.jpg"
                heading="About Us"
                subheading="Explore our delicious starters, breakfast, lunch, dinner, and desserts"
            />
            <OurStory />
            <AboutService />
            <AboutTeam />
            <QuoteSlider />
            <Menu />
            <InstagramSubscribe />
        </>
    );
};

export default AboutUs;