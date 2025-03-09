import React from 'react'

const Heading = () => {
  return (
    
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-5xl sm:text-4xl lg:text-5xl text-cente">
        "We handle your IT, you handle the innovation—
        <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
        "let’s build the future together."
        </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Take charge of your business continuity with innovative IT solutions
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800  px-4 py-4 mx-3 rounded-md">
                Schedule a Free Consultation
            </a>
            <a href="#" className="py-4 px-4 mx-3 rounded-md border">
                Services
            </a>
        </div>
        <h3>Meet our team</h3>
        <div className="flex mt-10 justify-center">
            
            <img className="rounded-lg h-80 w-90 border border-purple-700 shadow-purple-400 mx-2 my-4" src="https://finolity.com/wp-content/uploads/2024/01/finolity-Team.jpg" alt="image">
            </img>
        </div>
    </div>
    
  );
};

export default Heading;