const Whatwedo = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
            <span className="bg-black-200  rounded-full h-6 text-sm font-medium px-2 py-1">
                What we do
            </span>
            
            <h2 className =" text-purple-200 text-3xl sm:text-4xl lg:text-4xl mt-10 lg:mt-20 tracking-wide">
            "TURNING PLASTIC WASTE INTO SUSTAINABLE SOLUTIONS."
            </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="border border-black p-4 rounded-lg shadow-md">
          <h3 className="text-white-700 text-xl font-semibold">Sustainability</h3>
          <p className="text-gray-700 mt-2">Promotes a circular economy by repurposing non-biodegradable waste.</p>
        </div>
        <div className="border border-black p-4 rounded-lg shadow-md">
          <h3 className="text-white-700 text-xl font-semibold">Environmental Impact</h3>
          <p className="text-gray-700 mt-2">Reduces plastic pollution and landfill waste</p>
        </div>
        <div className="border border-black p-4 rounded-lg shadow-md">
          <h3 className="text-white-700 text-xl font-semibold">Infrastructure Development</h3>
          <p className="text-gray-700 mt-2">Our recycled plastic materials are used to construct roads.</p>
        </div>
        <div className="border border-black p-4 rounded-lg shadow-md">
          <h3 className="text-white-700 text-xl font-semibold">Boosted Efficiency</h3>
          <p className="text-gray-700 mt-2">Automation saves time and improves productivity.</p>
        </div>
        <div className="border border-black p-4 rounded-lg shadow-md">
          <h3 className="text-white-700 text-xl font-semibold">Cost-Effective</h3>
          <p className="text-gray-700 mt-2">Lowers construction costs while maintaining structural integrity.</p>
        </div>
        <div className="border border-black p-4 rounded-lg shadow-md">
          <h3 className="text-white-700 text-xl font-semibold">Durability & Strength</h3>
          <p className="text-gray-700 mt-2">Plastic-based infrastructure is resistant to water, corrosion, and extreme weather conditions.</p>
        </div>
      </div>
      <div className="flex mt-10 justify-center">
      <img className="rounded-lg h-80 w-110 border border-purple-700 shadow-purple-400 mx-5 my-4" 
      src="https://tse4.mm.bing.net/th?id=OIP.-yf39EdxxZcUewCrdJ-gywHaFd&pid=Api&P=0&h=180" 
      alt="pic"></img>
      </div>
        </div>
    
  );
};

export default Whatwedo;