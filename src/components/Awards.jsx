import React from "react";

const Awards = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row items-center justify-center bg-black-300 relative overflow-hidden p-6">
      
      
      <div className="w-full lg:w-1/2 max-w-md lg:max-w-lg h-80 bg-gradient-to-r from-gray-600 to-gary-500 rounded-lg shadow-2xl flex flex-col items-center justify-center text-white p-6 m-4 ">
        <h2 className="text-2xl text-violet-400 font-bold">Organizations recognized our work</h2>
        <p className="text mt-2 font-semi-bold">
          <div className="text-left text-white-200 text-xl">Our commitment to transforming plastic waste into urban infrastructure has been recognized by esteemed organizations and sustainability leaders. This recognition validates our efforts in creating eco-friendly solutions and encourages us to expand our impact.
</div>
          
        </p>
      </div>

      
      <div className="w-full lg:w-1/2 max-w-md lg:max-w-lg h-80 bg-gradient-to-r from-gray-600 to-gary-500 rounded-lg shadow-2xl flex flex-col items-center justify-center text-white p-6 m-4 ">
        <h2 className="text-gray-900 text-2xl">Ecocycle has been recognized as a Leader in the 2022 Yourstory®</h2>
        <p className="text-center mt-2">
          <a href="#" className="text-black hover:text-purple-200">
            View Report
          </a>
        </p>
      </div>
    

    </div>
  );
};

export default Awards;



