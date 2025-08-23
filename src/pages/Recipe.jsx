import React from "react";
import Hero from "../components/common/Hero";
import RecipeList from "../components/recipie/RecipeList";
import FeaturedRecipe from "../components/common/FeaturedRecipe";
import InstagramSubscribe from "../components/common/InstagramSubscribe ";


const Recipe = () => {
    return (
        <>
            <Hero
                bgImage="/assets/hero-bg.jpg"
                heading="Our Recipes"
                subheading="Explore our delicious starters, breakfast, lunch, dinner, and desserts"
            />
            <RecipeList />
            <FeaturedRecipe />
            <InstagramSubscribe />
        </>
    );
};

export default Recipe;