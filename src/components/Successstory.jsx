import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const successStories = [
  {
    description: "In collaboration with local municipalities, we successfully built roads using recycled plastic materials.",
    title:
      "PLASTIC ROADS",
    image: "https://tse4.mm.bing.net/th?id=OIP.aHkzcvD_uhM033syGpkC0AHaEK&pid=Api&P=0&h=180",
  },
  {
    title: "PAVING THE WAY WITH PLASTIC BRICKS",
    description:
      "We developed high-strength plastic bricks and paving tiles, which have been used in sidewalks, public spaces.",
    image: "https://tse1.mm.bing.net/th?id=OIP.3dU_paxMuR6Z9NhuXdcX-wHaEK&pid=Api&P=0&h=180",
  },
  {
    title: "RECOGNIZED FOR INNOVATION IN SUSTAINABILITY",
    description:
      "Our efforts have been acknowledged by environmental organizations, highlighting  impact on sustainable infrastructure.",
    image: "https://tse3.mm.bing.net/th?id=OIP.yBUFIQtyO87urLsLJkH0CgHaFK&pid=Api&P=0&h=180",
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
