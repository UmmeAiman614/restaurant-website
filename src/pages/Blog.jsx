import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Search, Folder, FileText, BookOpen } from "lucide-react";
import Hero from "../components/common/Hero";
import InstagramSubscribe from "../components/common/InstagramSubscribe ";

const blogPosts = [
  {
    id: 1,
    title: "Delicious Pasta Recipe",
    desc: "Discover the secrets behind making authentic Italian pasta at home.",
    img: "/assets/blog1.jpg",
  },
  {
    id: 2,
    title: "Healthy Salads",
    desc: "Top tips for creating fresh and nutritious salads every day.",
    img: "/assets/blog2.jpg",
  },
  {
    id: 3,
    title: "Best Street Foods",
    desc: "Explore the most loved street foods from around the world.",
    img: "/assets/blog3.jpg",
  },
];

const extraPosts = [
  {
    id: 4,
    title: "Homemade Desserts",
    desc: "Sweet and simple dessert ideas for family gatherings.",
    img: "/assets/blog4.jpg",
  },
  {
    id: 5,
    title: "Quick Breakfasts",
    desc: "Fast and healthy breakfast recipes for busy mornings.",
    img: "/assets/blog5.jpg",
  },
  {
    id: 6,
    title: "Smoothie Ideas",
    desc: "Colorful smoothies packed with nutrients and flavor.",
    img: "/assets/blog6.jpg",
  },
];

const recentPosts = [
  { id: 7, title: "10-Minute Meals", img: "/assets/blog7.jpg" },
  { id: 8, title: "Tips for Baking", img: "/assets/blog8.jpg" },
  { id: 9, title: "Vegan Cooking", img: "/assets/footer-post2.png" },
];

const Blog = () => {
  return (
    <>
       <Hero
                bgImage="/assets/hero-bg.jpg"
                heading="Blog Page"
                subheading="Explore our delicious starters, breakfast, lunch, dinner, and desserts"
            />
    <div className="bg-cream py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          {/* Slider for first 3 posts */}
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            spaceBetween={20}
            slidesPerView={1}
            className="mb-8"
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <div className="bg-sand rounded-xl shadow-md overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-forest">
                      {post.title}
                    </h3>
                    <div className="w-12 h-1 bg-teal my-2 rounded"></div>
                    <p className="text-textdark text-sm">{post.desc}</p>
                    <button className="mt-4 px-5 py-2 bg-teal text-white rounded-lg hover:bg-forest transition">
                      Read More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination flex justify-center gap-3 mb-8"></div>

          {/* Extra 3 posts */}
          <div className="grid md:grid-cols-3 gap-6">
            {extraPosts.map((post) => (
              <div
                key={post.id}
                className="bg-sand rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-forest">
                    {post.title}
                  </h3>
                  <div className="w-12 h-1 bg-teal my-2 rounded"></div>
                  <p className="text-textdark text-sm">{post.desc}</p>
                  <button className="mt-3 px-4 py-2 bg-teal text-white text-sm rounded-lg hover:bg-forest transition">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-8">
          {/* Search */}
          <div className="bg-sand p-4 shadow rounded-xl">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 px-3 py-2 outline-none"
              />
              <Search className="text-gray-500 mx-2" size={20} />
            </div>
          </div>

          {/* Categories */}
          <div className="bg-sand p-5 shadow rounded-xl">
            <h3 className="text-lg font-bold text-forest">Categories</h3>
            <div className="w-10 h-1 bg-teal my-2 rounded"></div>
            <ul className="space-y-2 text-textdark">
              <li className="flex items-center gap-2">
                <Folder size={18} className="text-teal" /> Food Recipes
              </li>
              <li className="flex items-center gap-2">
                <FileText size={18} className="text-teal" /> Cooking Tips
              </li>
              <li className="flex items-center gap-2">
                <BookOpen size={18} className="text-teal" /> Healthy Meals
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-sand p-5 shadow rounded-xl">
            <h3 className="text-lg font-bold text-forest">Recent Posts</h3>
            <div className="w-10 h-1 bg-teal my-2 rounded"></div>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex gap-3 items-center">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <p className="text-sm text-textdark">{post.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Pagination Styling */}
      <style>
        {`
          .custom-pagination .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            border: 2px solid #4A9782;
            border-radius: 50%;
            background: transparent;
            opacity: 1;
            transition: all 0.3s ease;
          }
          .custom-pagination .swiper-pagination-bullet-active {
            background: #4A9782;
          }
        `}
      </style>
    </div>
    <InstagramSubscribe />
    </>
  );
};

export default Blog;
