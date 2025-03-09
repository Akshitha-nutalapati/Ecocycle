import React from "react";

const newsData = [
  {
    title: "Empowering Universities",
    description: "Finolity implemented digital solutions at Maharishi Markandeshwar University.",
    image: "https://finolity.com/wp-content/uploads/2025/01/ABP-NEWS.jpg", // Replace with actual image
    link: "https://news.abplive.com/brand-wire/empowering-universities-finolity-s-digital-campus-program-and-strategic-partnerships-1659027",
  },
  {
    title: "Adobe Certified Reseller",
    description: "Finolity is now an Adobe Certified Reseller, offering advanced software solutions.",
    image: "https://finolity.com/wp-content/uploads/2025/01/ABP-NEWS-1.jpg",
    link: "https://finolity.com/#",
  },
  {
    title: "Launching 'Namestair'",
    description: "A new brand providing affordable cloud services and domain solutions.",
    image: "https://finolity.com/wp-content/uploads/2025/01/ABP-NEWS-2.jpg",
    link: "https://finolity.com/#",
  },
  {
    title: "Corel Partner",
    description: "Finolity Becomes Authorized Corel Partner, Offering Cutting-Edge Software Solutions to Businesses",
    image: "https://finolity.com/wp-content/uploads/2025/01/ABP-NEWS-4.jpg",
    link: "https://finolity.com/#",
  },
];

const NewsSection = () => {
  return (
    
    <div className="p-6 bg-black-100 text-center">
      <h2 className="text-purple-200 text-2xl  mb-4">LATEST NEWS</h2>
      <div className=" grid grid-cols-1 sm:grid-cols-4 gap-6">
        {newsData.map((news, index) => (
          <div key={index} className=" bg-gray-900 p-4 rounded-lg shadow-md">
            <img className="w-full h-32 object-cover rounded-md mb-3" src={news.image} alt={news.title} />
            <h3 className="text-lg font-semibold">{news.title}</h3>
            <p className="text-gray-600 text-sm">{news.description}</p>
            <a href={news.link} target="_blank" rel="noopener noreferrer" className="text-purple-500 text-sm font-bold mt-2 inline-block">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
