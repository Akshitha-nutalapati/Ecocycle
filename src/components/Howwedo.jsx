const Howwedo = () => {
    return (
      <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
          <div className="text-center">
              <span className="bg-black-200  rounded-full h-6 text-sm font-medium px-2 py-1">
                  How we do
              </span>
              
              <h2 className =" text-purple-200 text-3xl sm:text-4xl lg:text-4xl mt-10 lg:mt-20 tracking-wide">
                  TECHNOLOGIES SIMPLIFYING 'IT'.
              </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto ">
          <div className=" border border-black p-4 rounded-lg shadow-md">
            <h3 className="text-white-700 text-xl font-semibold">Web development</h3>
            <p className="text-gray-700 mt-2">Our web development services can help you establish an impactful online presence and reach your target audience effectively.</p>
          </div>
          <div className=" border border-black p-4 rounded-lg shadow-md">
            <h3 className="text-white-700 text-xl font-semibold">Cyber security</h3>
            <p className="text-gray-700 mt-2">Our experts can identify vulnerabilities,assess risks,and implement robust security measures to safeguard your systems and data.
            </p>
          </div>
          <div className=" border border-black p-4 rounded-lg shadow-md">
            <h3 className="text-white-700 text-xl font-semibold">Managed services</h3>
            <p className="text-gray-700 mt-2">Free up your internal resources to focus on the business by letting us handle day to day support services,management,and monitoring of your IT.</p>
          </div>
          <div className="border border-black p-4 rounded-lg shadow-md">
            <h3 className="text-white-700 text-xl font-semibold">IT consultancy & Advisory</h3>
            <p className="text-gray-700 mt-2">The right technology,implemented properly,appropriately managed and monitored,can lead to significant gains in growth</p>
          </div>
          <div className="border border-black p-4 rounded-lg shadow-md">
            <h3 className="text-white-700 text-xl font-semibold">Mobile development</h3>
            <p className="text-gray-700 mt-2">We can help you create a customised mobile app that aligns with your brand and goals,with expertise in various mobile platforms.</p>
          </div>
          <div className=" border border-black p-4 rounded-lg shadow-md">
            <h3 className="text-white-700 text-xl font-semibold">Cloud services</h3>
            <p className="text-gray-700 mt-2">With our expertise in cloud technologies,we can help you find the right cloud solutions that meet your business needs and goals.</p>
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