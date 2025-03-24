const Videotext = () => {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          
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
  
          
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-xl lg:text-xl sm:text-xl font-semi-bold text-gray-700">
              BE PART OF OUR SUCCESS!   
              <span className="text-gray-500 text-xs"> </span>
            </h2>
            <p className="mt-4 text-gray-600">
            Every step we take towards sustainability is made possible through collaboration, innovation, and community participation. Join us in our mission to transform plastic waste into valuable urban infrastructure and be a part of our next success story!
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              View More
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8 py-6">
        
        

        
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
  