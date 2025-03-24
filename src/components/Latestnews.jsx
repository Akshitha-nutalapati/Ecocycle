import React from "react";

const newsData = [
  {
    title: "Educational Guidelines",
    description: "The Programme Changing Lives and Fighting Plastic Pollution in India.",
    image: "https://tse4.mm.bing.net/th?id=OIP.7ZIgLc45CiuacJ5K7gHPUQHaEK&pid=Api&P=0&h=180", 
    link: "https://news.abplive.com/brand-wire/empowering-universities-finolity-s-digital-campus-program-and-strategic-partnerships-1659027",
  },
  {
    title: "Workshop Resources",
    description: "The Programme Changing Lives and Fighting Plastic Pollution in India.",
    image: "https://tse4.mm.bing.net/th?id=OIP.9KbKkcKqVpi6Emijyaq61AHaEK&pid=Api&P=0&h=180",
    link: "https://finolity.com/#",
  },
  {
    title: "Global Intiatives",
    description: "The Programme Changing Lives and Fighting Plastic Pollution in India.",
    image: "https://tse2.mm.bing.net/th?id=OIP.ftoD7cHceH_334J1X5BrEwHaEK&pid=Api&P=0&h=180",
    link: "https://finolity.com/#",
  },
  {
    title: "recycling Hope",
    description: "The Programme Changing Lives and Fighting Plastic Pollution in India",
    image: "https://tse4.mm.bing.net/th?id=OIP.BshSyGkjb4i1pY6tZ5O5RgHaEK&pid=Api&P=0&h=180",
    link: "https://finolity.com/#",
  },
];

const NewsSection = () => {
  return (
    
    <div className="p-6 bg-black-100 text-center">
      <h2 className="text-purple-200 text-2xl  mb-4">RESOURCES</h2>
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
