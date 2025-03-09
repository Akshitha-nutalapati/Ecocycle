import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const successStories = [
  {
    description: "How Finolity's Consultation revolutionized unacademy's Success",
    title:
      "CASE STUDIES,DIGITAL TRANSFORMATION,IT CONSULTING.",
    image: "https://finolity.com/wp-content/uploads/2024/08/leaders-1536x886.webp",
  },
  {
    title: "CLOUD HOSTING",
    description:
      "Finolity boosts MM Deemed university with SOLIDWORKS,Smart manufacturing lab.",
    image: "https://finolity.com/wp-content/uploads/2023/03/Untitled-design-3.png",
  },
  {
    title: "IT CONSULTING",
    description:
      "Unlocking Success: The Crucial Role of Design in the Digital Era with Finolity",
    image: "https://finolity.com/wp-content/uploads/2023/03/Untitled-design-4.png",
  },
];

const Successstory = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-3xl text-purple-200 text-center mb-8">Our Success Stories</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2},
        }}
        className="pb-10"
      >
        {successStories.map((story, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-gray-600 text-xl font-semibold mb-2">{story.title}</h3>
                <p className="text-black">{story.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Successstory;
