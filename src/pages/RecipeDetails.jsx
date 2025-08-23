import React from "react";
import { useParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Hero from "../components/common/Hero";
import FeaturedRecipe from "../components/common/FeaturedRecipe";
import InstagramSubscribe from "../components/common/InstagramSubscribe ";

const recipes = [
    {
        id: 1,
        name: "Spaghetti Carbonara",
        img: "/assets/recipe1.jpg",
        description: "A rich and creamy Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    },
    {
        id: 2,
        name: "Grilled Salmon",
        img: "/assets/recipe2.jpg",
        description: "Perfectly grilled salmon fillets with lemon butter sauce for a light, healthy meal.",
    },
    {
        id: 3,
        name: "Chicken Biryani",
        img: "/assets/recipe3.jpg",
        description: "A flavorful South Asian rice dish with spiced chicken, saffron, and aromatic herbs.",
    },
];

const ingredients = [
    "2 cups of rice",
    "1 tbsp olive oil",
    "1 tsp salt",
    "Fresh herbs",
    "1/2 tsp black pepper",
];

// sample nutrients
const nutrients = [
    { name: "Calories", grams: "250g", percent: 20 },
    { name: "Protein", grams: "15g", percent: 30 },
    { name: "Fat", grams: "10g", percent: 15 },
    { name: "Carbohydrates", grams: "30g", percent: 25 },
];

const RecipeDetails = () => {
    const { id } = useParams();
    const recipe = recipes.find((r) => r.id === parseInt(id));

    if (!recipe) {
        return <h2 className="text-center mt-10 text-red-500">Recipe not found!</h2>;
    }

    return (
        <>
            <Hero
                bgImage="/assets/hero-bg.jpg"
                heading="Our Recipes"
                subheading="Explore our delicious starters, breakfast, lunch, dinner, and desserts"
            />

            <div className="bg-cream py-16 px-6">
                <div className="max-w-6xl mx-auto space-y-16">
                    {/* -------- Top Section -------- */}
                    <div className="flex flex-col md:flex-row gap-10">
                        {/* Left Image */}
                        <div className="md:w-1/2">
                            <img
                                src={recipe.img}
                                alt={recipe.name}
                                className="w-full h-full object-cover rounded-lg shadow-md"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="md:w-1/2 flex flex-col justify-center">
                            <h2 className="text-4xl font-bold text-forest">{recipe.name}</h2>
                            <div className="w-16 h-1 bg-teal mx-auto my-3 rounded"></div>
                            <p className="text-textdark">{recipe.description}</p>

                            {/* Ingredients */}
                            <div className="mt-6 bg-sand p-5 rounded-lg">
                                <h3 className="text-xl font-semibold text-forest text-center">
                                    Ingredients
                                </h3>
                                <div className="w-12 h-1 bg-teal mx-auto my-2 rounded"></div>
                                <ul className="space-y-2">
                                    {ingredients.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <CheckCircle className="text-teal" size={20} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* -------- Middle Section -------- */}
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Left Steps */}
                        <div>
                            <h3 className="text-2xl font-bold text-forest text-center">
                                Cooking Steps
                            </h3>
                            <div className="w-16 h-1 bg-teal mx-auto my-3 rounded"></div>
                            <div className="space-y-4">
                                {["Boil water & cook rice", "Prepare sauce with olive oil", "Mix and serve"].map(
                                    (step, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="bg-teal text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
                                                {idx + 1}
                                            </div>
                                            <p className="text-textdark">{step}</p>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Right Extra Content */}
                        <div>
                            <h3 className="text-2xl font-bold text-forest text-center">
                                Chef's Notes
                            </h3>
                            <div className="w-16 h-1 bg-teal mx-auto my-3 rounded"></div>
                            <p className="text-textdark">
                                This recipe is a family favorite, offering rich flavors while being
                                simple to prepare. You can experiment with herbs and spices to
                                match your taste preferences. Perfect for dinner nights!
                            </p>
                        </div>
                    </div>

                    {/* -------- Bottom Section (Nutrients Table) -------- */}
                    <div>
                        <h3 className="text-2xl font-bold text-forest text-center">
                            Nutritional Value
                        </h3>
                        <div className="w-16 h-1 bg-teal mx-auto my-3 rounded"></div>

                        <div className="bg-sand grid grid-cols-3 gap-4 shadow-md rounded-lg p-6">
                            {/* Column 1: Nutrients */}
                            <div className="space-y-3">
                                {nutrients.map((n, i) => (
                                    <p key={i} className="font-semibold">{n.name}</p>
                                ))}
                            </div>

                            {/* Column 2: Grams */}
                            <div className="space-y-3">
                                {nutrients.map((n, i) => (
                                    <p key={i}>{n.grams}</p>
                                ))}
                            </div>

                            {/* Column 3: Percentages with progress bar */}
                            <div className="space-y-4">
                                {nutrients.map((n, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="w-full bg-gray-200 rounded h-3 overflow-hidden">
                                            <div
                                                className={`h-3 rounded ${n.percent >= 50 ? "bg-forest" : n.percent >= 25 ? "bg-forest" : "bg-teal"
                                                    }`}
                                                style={{ width: `${n.percent}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-sm font-medium">{n.percent}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FeaturedRecipe />
            <InstagramSubscribe />
        </>
    );
};

export default RecipeDetails;
