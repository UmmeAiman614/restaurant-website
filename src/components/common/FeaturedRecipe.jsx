import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";

const recipes = [
  { id: 1, name: "Spaghetti Carbonara", img: "/assets/recipe1.jpg" },
  { id: 2, name: "Grilled Salmon", img: "/assets/recipe2.jpg" },
  { id: 3, name: "Chicken Biryani", img: "/assets/recipe3.jpg" },
  { id: 4, name: "Veggie Pizza", img: "/assets/recipe4.jpg" },
  { id: 5, name: "Beef Steak", img: "/assets/recipe5.jpg" },
];

const FeaturedRecipe = () => {
  return (
    <div className="bg-cream py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-forest">Featured Recipes</h2>
        <div className="w-16 h-1 bg-teal mx-auto my-3 rounded"></div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 }, // mobile
            640: { slidesPerView: 2 }, // small tablets
            1024: { slidesPerView: 3 }, // tablets / small desktops
            1280: { slidesPerView: 4 }, // large screens
          }}
          className="mt-8"
        >
          {recipes.map((recipe) => (
            <SwiperSlide key={recipe.id}>
              <div className="bg-sand rounded-xl shadow-md p-4 flex flex-col items-center">
                {/* Image */}
                <img
                  src={recipe.img}
                  alt={recipe.name}
                  className="w-full h-40 object-cover rounded-lg"
                />

                {/* Name */}
                <h3 className="mt-3 text-lg font-semibold text-textdark">
                  {recipe.name}
                </h3>

                {/* Stars */}
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < 4
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Below Slider */}
        <div className="custom-pagination mt-6 flex justify-center gap-3"></div>
      </div>

      {/* Custom Pagination Styling */}
      <style>
        {`
          .custom-pagination .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            border: 2px solid #4A9782; /* teal border */
            border-radius: 50%;
            background: transparent;
            opacity: 1;
            transition: all 0.3s ease;
          }
          .custom-pagination .swiper-pagination-bullet-active {
            background: #4A9782; /* teal fill */
          }
        `}
      </style>
    </div>
  );
};

export default FeaturedRecipe;
