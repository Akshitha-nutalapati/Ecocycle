import React from "react";

const events = [
  {
    title: "Residential Training Program on new urban Agenda",
    date: "SATURDAY,MARCH29",
    description: "This initiative aims to dedicate one lakh crore for sustainable and inclusive urban transformation.",
    image: "https://tse4.mm.bing.net/th?id=OIP.LZFURTlJC2nd3D5S6_nEZgHaEK&pid=Api&P=0&h=180",
    link: "https://www.cseindia.org/residential-training-programme-on-the-new-urban-agenda-12653#:~:text=This%20initiative%20aims%20to%20dedicate,be%20integrated%20with%20this%20initiative",
  },
  {
    title: "Workshop on Urban infrastructure in a changing climate.",
    date: "SUNDAY,MAY25",
    description: "Facilitators:gautam sonti.",
    image: "https://tse2.mm.bing.net/th?id=OIP.HHM9RYFjt0ZnL6axqKGxmAHaD-&pid=Api&P=0&h=180",
    link: "http://esgindia.org/new/events/workshop-on-urban-infrastructure-in-a-changing-climate/",
  },
  {
    title: "Raising a Toast to citizen groups.",
    date: "SUNDAY,SEPTEMBER 14",
    description: "No more about a citizen groups feted at the indian civic summit.",
    image: "https://tse1.mm.bing.net/th?id=OIP.rVrgXajlXixODBGEp5GDVAHaDt&pid=Api&P=0&h=180",
    link: "https://citizenmatters.in/citizen-matters-spotlight-groups-fighting-for-climate-resilient-cities/",
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
