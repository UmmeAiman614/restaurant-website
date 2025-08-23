import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  { icon: "🎂", title: "BIRTHDAY PARTY", desc: "Celebrate in style with our delightful birthday catering and ambiance, making every moment memorable." },
  { icon: "💍", title: "WEDDING PARTY", desc: "Elegant catering and decor for weddings, tailored to make your big day truly special and stress-free." },
  { icon: "🍽️", title: "PRIVATE DINING", desc: "Enjoy intimate private dining with customized menus and a cozy setup for small gatherings." },
  { icon: "☕", title: "COFFEE & SNACKS", desc: "Relax with our premium coffee blends and freshly prepared snacks in a warm, welcoming space." },
  { icon: "👨‍👩‍👧‍👦", title: "FAMILY GATHERINGS", desc: "Spacious arrangements and family-friendly menus, perfect for reunions and celebrations with loved ones." },
  { icon: "🏢", title: "CORPORATE EVENTS", desc: "Professional catering and services designed for business meetings, seminars, and corporate parties." },
];

const AboutService = () => {
  return (
    <div className="bg-forest text-cream py-16">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-cream">SPECIAL SERVICE</h2>
        <p className="text-sand mt-2">
          What special services we are offering now
        </p>
        <div className="w-16 h-1 bg-teal mx-auto mt-3"></div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        spaceBetween={40}
        slidesPerView={1}
        className="max-w-6xl mx-auto"
      >
        {/* Two services per slide */}
        {services.reduce((result, value, index, array) => {
          if (index % 2 === 0) result.push(array.slice(index, index + 2));
          return result;
        }, []).map((pair, idx) => (
          <SwiperSlide key={idx}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
              {pair.map((service, i) => (
                <div key={i} className="text-center">
                  {/* Icon */}
                  <div className="text-6xl mb-4 text-teal">{service.icon}</div>
                  {/* Title */}
                  <h3 className="text-xl font-bold text-cream">
                    {service.title}
                  </h3>
                  {/* Description */}
                  <p className="text-sand mt-3 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination below slider */}
      <div className="custom-pagination flex justify-center mt-10 space-x-3"></div>

      {/* Style for pagination dots */}
      <style jsx>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 14px;
          height: 14px;
          background: transparent;
          border: 2px solid #dcd0a8; /* sand color */
          border-radius: 50%;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #4a9782; /* teal */
          border-color: #4a9782;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default AboutService;
