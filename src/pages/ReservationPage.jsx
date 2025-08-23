import React from "react";
import Hero from "../components/common/Hero";
import Reservation from "../components/common/Reservation";
import InstagramSubscribe from "../components/common/InstagramSubscribe ";


const ReservationPage = () => {
    return (
        <>
            <Hero
                bgImage="/assets/hero-bg.jpg"
                heading="Reservation"
                subheading="Explore our delicious starters, breakfast, lunch, dinner, and desserts"
            />
            <Reservation />
            <InstagramSubscribe />
        </>
    );
};

export default ReservationPage;