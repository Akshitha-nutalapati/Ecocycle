import React from "react";
import { FaHospital, FaUniversity, FaShoppingCart, FaIndustry, FaGlobe, FaCloud, FaCar, FaHubspot, FaPowerOff, FaWodu } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
const industries = [
    { id: 1, name: "Healthcare IT", icon: <FaHospital className="text-red-500 text-4xl" /> },
    { id: 2, name: "Banks & Insurance", icon: <FaUniversity className="text-blue-500 text-4xl" /> },
    { id: 3, name: "Consulting providers", icon: <FaShoppingCart className="text-green-500 text-4xl" /> },
    { id: 4, name: "Industry & Manufacturing", icon: <FaIndustry className="text-yellow-500 text-4xl" /> },
    { id: 5, name: "Non-profit", icon: <FaSackDollar className="text-indigo-500 text-4xl" /> },
    { id: 6, name: "Transportaion and Logistics", icon: <FaCar className="text-purple-500 text-4xl" /> },
  ];
const solving = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
    <div className="text-center">
        <span className="bg-black-200  rounded-full h-6 text-sm font-medium px-2 py-1">
            How we do
        </span>
        
        <h2 className =" text-purple-200 text-3xl sm:text-4xl lg:text-4xl mt-10 lg:mt-20 tracking-wide">
            SOLVING IT IN EVERY INDUSTRY..EVERY DAY
        </h2>
        <div className="p-8 bg-black-100 text-center">
      
      <p className="text-gray-600 mb-8">Empowering businesses with cutting-edge technology solutions.</p>
      <div className="text-white  grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {industries.map((industry) => (
          <div key={industry.id} className="border border-gray-700 flex flex-col items-center p-6 bg-gray rounded-lg shadow-md hover:shadow-lg transition">
            {industry.icon}
            <p className="mt-3 text-lg font-medium">{industry.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div></div>
  )
}

export default solving