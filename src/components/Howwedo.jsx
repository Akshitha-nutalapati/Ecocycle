const Howwedo = () => {
    return (
      <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
          <div className="text-center">
              <span className="bg-black-200  rounded-full h-6 text-sm font-medium px-2 py-1">
                  How we do
              </span>
              
              <h2 className =" text-purple-200 text-3xl sm:text-4xl lg:text-4xl mt-10 lg:mt-20 tracking-wide">
              OUR PROCESS OF TRANSFORMING PLASTIC WASTE.
              </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto ">
          <div className=" border border-black p-4 rounded-lg shadow-md">
            <h3 className="text-white-700 text-xl font-semibold">Collection & Segregation</h3>
            <p className="text-gray-700 mt-2">We source plastic waste from households, industries, and recycling centers.</p>
          </div>
          <div className=" border border-black p-4 rounded-lg shadow-md">
            <h3 className="text-white-700 text-xl font-semibold">Cleaning & Shredding</h3>
            <p className="text-gray-700 mt-2">The cleaned plastic is shredded into small flakes or granules to facilitate processing.
            </p>
          </div>
          <div className=" border border-black p-4 rounded-lg shadow-md">
            <h3 className="text-white-700 text-xl font-semibold">Processing & Transformation</h3>
            <p className="text-gray-700 mt-2">Using advanced recycling technologies, we melt and mold the plastic into high-strength materials.</p>
          </div>
          <div className="border border-black p-4 rounded-lg shadow-md">
            <h3 className="text-white-700 text-xl font-semibold">Infrastructure Implementation</h3>
            <p className="text-gray-700 mt-2">These materials provide durability, cost efficiency, and environmental benefits compared to conventional materials.</p>
          </div>
          <div className="border border-black p-4 rounded-lg shadow-md">
            <h3 className="text-white-700 text-xl font-semibold">Quality Control & Sustainability</h3>
            <p className="text-gray-700 mt-2">Every product undergoes rigorous testing to meet safety and strength standards.</p>
          </div>
          <div className=" border border-black p-4 rounded-lg shadow-md">
            <h3 className="text-white-700 text-xl font-semibold"> Community Engagement & Awareness</h3>
            <p className="text-gray-700 mt-2">We collaborate with local communities, governments, and organizations to promote sustainable waste management.</p>
          </div>
        </div>
        <div className="flex justify-center my-10">
            <a href="#" className="text-purple-200 px-4 py-4 mx-3 rounded-md border">
                View more
            </a>
            </div>
            
          </div>
          
          
          
      
    );
  };
  
  export default Howwedo;