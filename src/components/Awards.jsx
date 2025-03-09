import React from "react";

const Awards = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row items-center justify-center bg-black-300 relative overflow-hidden p-6">
      
      {/* Floating Box 1 */}
      <div className="w-full lg:w-1/2 max-w-md lg:max-w-lg h-80 bg-gradient-to-r from-gray-600 to-gary-500 rounded-lg shadow-2xl flex flex-col items-center justify-center text-white p-6 m-4 ">
        <h2 className="text-2xl font-bold">Organizations recognized our work</h2>
        <p className="text mt-2 font-semi-bold">
          <div className="text-left text-purple-200 text-xl">Forbes</div>
          <div className="text-center text-purple-200 text-xl">Clutch</div>
          <div className="text-right text-purple-200 text-xl">Google</div> 
        </p>
      </div>

      {/* Floating Box 2 */}
      <div className="w-full lg:w-1/2 max-w-md lg:max-w-lg h-80 bg-gradient-to-r from-gray-500 to-gary-800 rounded-lg shadow-2xl flex flex-col items-center justify-center text-white p-6 m-4 ">
        <h2 className="text-gray-900 text-2xl">Finolity has been recognized as a Leader in the 2022 Yourstory®</h2>
        <p className="text-center mt-2">
          <a href="#" className="text-black hover:text-red-600">
            View Report
          </a>
        </p>
      </div>
    

    </div>
  );
};

export default Awards;



