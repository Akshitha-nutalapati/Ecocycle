const Videotext = () => {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Video Section */}
          <div className="w-full lg:w-1/2">
            <video 
              className="w-full rounded-lg shadow-lg" 
              controls 
              autoPlay 
              muted 
              loop
            >
              <source src="https://finolity.com/#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJ0eXBlIjoidmlkZW8iLCJ2aWRlb1R5cGUiOiJ5b3V0dWJlIiwidXJsIjoiaHR0cHM6XC9cL3d3dy55b3V0dWJlLmNvbVwvZW1iZWRcL2pVXzFHcWRXV0N3P2ZlYXR1cmU9b2VtYmVkIn0%3D" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
  
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-xl lg:text-xl sm:text-xl font-semi-bold text-gray-700">
              Shivam Rana   
              <span className="text-gray-500 text-xs">   CIO,Kailasa Pictures</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Ive been a customer for more than a decade.Finolity is an exapmle of the way Manged Services should be done.They do their best to make sure you succeed.
              If there's an issue,they step in immediately.
              We will continue to be a customer for years to come.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              View More
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8 py-6">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            className="lg:w-1/4 w-20 h-20 mx-auto rounded-lg shadow-lg" 
            src="https://finolity.com/wp-content/uploads/2023/03/kisspng-microsoft-certified-partner-microsoft-partner-netw-partner-5b13fff40de7b5.358475291528037364057.png" 
            alt="IT Solutions"
            ></img>
            <img
            className="lg:w-1/4 w-20 h-20 mx-auto rounded-lg shadow-lg" 
            src="https://finolity.com/wp-content/uploads/2023/03/ND-ty6SkWNaiYy3I6E9J3lgFJJIeuHzzcdx74aHvaQ-9PFabsPmUhe_uKKqItjbtrcbw.png" 
            alt="IT Solutions"
            ></img>
            <img
            className="lg:w-1/4 w-20 h-20 mx-auto rounded-lg shadow-lg" 
            src="https://finolity.com/wp-content/uploads/2023/03/LenovoBP-POS-color.png" 
            alt="IT Solutions"
            ></img>
            <img
            className="lg:w-1/4 w-20 h-20 mx-auto rounded-lg shadow-lg" 
            src="https://finolity.com/wp-content/uploads/2023/03/pngfind.com-registered-logo-png-2230159.png" 
            alt="IT Solutions"
            ></img>
            
    
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left py-20 px-6">
          <h1 className="text-2xl lg:text-2xl font-semi-bold text-white-700">
           Recognized By The Best
          </h1>
          <p className="mt-4 text-gray-500">
          The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.
          </p>
          <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Discover More
          </button>
        </div>
      </div>
    </div>
      
    )
}
  
  export default Videotext
  