const Whatwedo = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
            <span className="bg-black-200  rounded-full h-6 text-sm font-medium px-2 py-1">
                What we do
            </span>
            
            <h2 className =" text-purple-200 text-3xl sm:text-4xl lg:text-4xl mt-10 lg:mt-20 tracking-wide">
                COMPLEX PROBLEMS-SIMPLE IT SOLUTIONS
            </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="border border-black p-4 rounded-lg shadow-md">
          <h3 className="text-white-700 text-xl font-semibold">Reducing Complexity</h3>
          <p className="text-gray-700 mt-2">Making IT solutions easy to use and manage.</p>
        </div>
        <div className="border border-black p-4 rounded-lg shadow-md">
          <h3 className="text-white-700 text-xl font-semibold">Seamless Integration</h3>
          <p className="text-gray-700 mt-2">Ensuring different technologies work together smoothly.</p>
        </div>
        <div className="border border-black p-4 rounded-lg shadow-md">
          <h3 className="text-white-700 text-xl font-semibold">Enhanced Security</h3>
          <p className="text-gray-700 mt-2">Protecting your data with simplified IT management.</p>
        </div>
        <div className="border border-black p-4 rounded-lg shadow-md">
          <h3 className="text-white-700 text-xl font-semibold">Boosted Efficiency</h3>
          <p className="text-gray-700 mt-2">Automation saves time and improves productivity.</p>
        </div>
        <div className="border border-black p-4 rounded-lg shadow-md">
          <h3 className="text-white-700 text-xl font-semibold">Cost Reduction</h3>
          <p className="text-gray-700 mt-2">Optimized systems lower expenses.</p>
        </div>
        <div className="border border-black p-4 rounded-lg shadow-md">
          <h3 className="text-white-700 text-xl font-semibold">Scalability</h3>
          <p className="text-gray-700 mt-2">Grow your business with flexible IT solutions.</p>
        </div>
      </div>
      <div className="flex mt-10 justify-center">
      <img className="rounded-lg h-80 w-110 border border-purple-700 shadow-purple-400 mx-5 my-4" 
      src="https://files.oaiusercontent.com/file-TUh9bV7queXNZLa9xVQ7KJ?se=2025-03-08T17%3A56%3A00Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dbf36dfce-aeb6-4f02-a0f0-94a083330cee.webp&sig=djSnmRangrwZ4%2BTHrzY8gXIjlYpEkjjVLmpXNeFzMOQ%3D" 
      alt="pic"></img>
      </div>
        </div>
    
  );
};

export default Whatwedo;