import React from "react";

const events = [
  {
    title: "AI Centre of Excellence in Education 2025",
    date: "SATURDAY,MARCH29",
    description: "Discover how Finolity and Ingram Micro leverage Microsoft Teams to transform hybrid work strategies, improve collaboration, and drive productivity for businesses.",
    image: "https://finolity.com/wp-content/uploads/2025/02/ai_event.jpg", // Replace with actual image URL
    link: "https://finolity.com/events/ai-centre-of-excellence-in-education-transforming-learning-with-innovation-introduction/",
  },
  {
    title: "Join Finolity Green Horizons Summits 2025",
    date: "SUNDAY,MAY25",
    description: "Join the Finolity Green Horizons Summit 2025 to explore innovative solutions for sustainability and green technology. Discover actionable insights and network with industry leaders driving a cleaner, greener future.",
    image: "https://finolity.com/wp-content/uploads/2023/04/visuals-Y4qzW3AsvqI-unsplash.jpg",
    link: "https://finolity.com/events/join-finolity-green-horizons-summit-2025/",
  },
  {
    title: "Finolity Ecosystem partnership Summit",
    date: "SUNDAY,SEPTEMBER 14",
    description: "Join the Finolity Ecosystem Partnerships Summit to collaborate with industry leaders and explore opportunities in building robust, innovative ecosystems. Discover strategies to foster growth, partnerships, and technological advancements.",
    image: "https://finolity.com/wp-content/uploads/2023/04/evangeline-shaw-BdV23FLkmxQ-unsplash.jpg",
    link: "https://finolity.com/events/finolity-ecosystem-partnerships-summit/",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="p-6 bg-black-100 text-center">
      <h2 className="text-2xl text-purple-200 mb-4">UPCOMING EVENTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg shadow-md">
            <img className="w-full h-32 object-cover rounded-md mb-3" src={event.image} alt={event.title} />
            <h3 className="text-white text-lg font-semibold">{event.title}</h3>
            <p className="text-gray-300 text-sm">{event.date}</p>
            <p className="text-gray-600 text-sm">{event.description}</p>
            <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-purple-500 py-2 px-2 border border-white bg-black rounded-md text-sm font-bold mt-2 inline-block">
              Register Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
