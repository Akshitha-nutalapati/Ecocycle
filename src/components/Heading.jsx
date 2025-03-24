import React from 'react'

const Heading = () => {
  return (
    
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-5xl sm:text-4xl lg:text-5xl text-cente">
        "Transforming plastic waste to-
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
        "Sustainable urban infrastructure."
        </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Recycling plastic waste into urban strength.
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800  px-4 py-4 mx-3 rounded-md">
                Recycle today
            </a>
            <a href="#" className="py-4 px-4 mx-3 rounded-md border">
                Services
            </a>
        </div>
        <h3>Welcome to EcoCycle</h3>
        <div className="flex mt-10 justify-center">
            
            <img className="rounded-lg h-80 w-90 border border-purple-700 shadow-purple-400 mx-2 my-4" src="https://tse1.mm.bing.net/th?id=OIP.pIM7Hn1-AMdg_30PlkvFawHaEK&pid=Api&P=0&h=180" alt="image">
            </img>
        </div>
    </div>
    
  );
};

export default Heading;