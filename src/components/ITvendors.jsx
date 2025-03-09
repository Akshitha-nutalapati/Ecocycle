import React from "react";
import { FaServer, FaUsers, FaCloud, FaNetworkWired } from "react-icons/fa";

const services = [
  { name: "Data Center & Hosting", icon: <FaServer className="text-white-500 text-5xl" /> },
  { name: "Collaboration", icon: <FaUsers className="text-white-500 text-5xl" /> },
  { name: "Cloud Platform", icon: <FaCloud className="text-white-500 text-5xl" /> },
  { name: "Network & Connectivity", icon: <FaNetworkWired className="text-white-500 text-5xl" /> },
];

const ITServices = () => {
  return (
    <div className="p-6 bg-black-100 text-center">
      <h2 className="text-2xl text-purple-200 mb-4">Our IT Services</h2>
      <p className="text-pink-300 max-w-2xl mx-auto mb-6">
        Delivering reliable, secure, and scalable IT solutions to power your business.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col items-center">
            {service.icon}
            <h3 className="text-lg  mt-2">{service.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ITServices;
