import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const recipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    img: "/assets/recipe1.jpg",
    rating: 5,
    description: "A rich and creamy Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
  },
  {
    id: 2,
    name: "Grilled Salmon",
    img: "/assets/recipe2.jpg",
    rating: 4,
    description: "Perfectly grilled salmon fillets with lemon butter sauce for a light, healthy meal.",
  },
  {
    id: 3,
    name: "Chicken Biryani",
    img: "/assets/recipe3.jpg",
    rating: 5,
    description: "A flavorful South Asian rice dish with spiced chicken, saffron, and aromatic herbs.",
  },
  {
    id: 4,
    name: "Veggie Pizza",
    img: "/assets/recipe4.jpg",
    rating: 4,
    description: "Delicious pizza topped with fresh vegetables, cheese, and a crispy crust.",
  },
  {
    id: 5,
    name: "Chocolate Cake",
    img: "/assets/recipe5.jpg",
    rating: 5,
    description: "Moist and fluffy chocolate cake layered with rich chocolate frosting.",
  },
  {
    id: 6,
    name: "Caesar Salad",
    img: "/assets/recipe6.jpg",
    rating: 4,
    description: "Classic Caesar salad with crunchy croutons, creamy dressing, and parmesan cheese.",
  },
];

const RecipeList = () => {
  return (
    <div className="bg-cream py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Left Image */}
            <div className="md:w-1/2">
              <img
                src={recipe.img}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="bg-sand md:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-forest">{recipe.name}</h3>

              {/* Stars */}
              <div className="flex items-center space-x-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < recipe.rating ? "fill-teal text-teal" : "text-gray-300"
                    }
                  />
                ))}
              </div>

              {/* Description */}
              <p className="text-textdark mt-3">{recipe.description}</p>

              {/* Button */}
              <Link
                to={`/recipes/${recipe.id}`}
                className="mt-4 inline-block bg-teal text-white px-4 py-2 rounded-lg shadow hover:bg-forest transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
