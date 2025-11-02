const App = () => {
  return (
    <div className="min-h-screen flex items-start justify-center bg-white text-black p-4">
      
      {/* Left Section - Keep your original code */}
      <div className="flex-1">
        <div className="mt-10 ml-4">
          <span className="font-serif text-amber-100 font-extralight italic ml-10 text-3xl">
            Fillantia
          </span>
        </div>
        <div className="mt-30 ml-30">
          <img className="w-25 mt-4" src="/image.png" alt="Fillanta Logo" />

          <h1 className="text-2xl font-semibold mt-6 text-black">Get Started</h1>

          <span className="text-gray-500 mt-2 mb-6">
            Welcome to Fillanta — Let’s create your account
          </span>

          <div className="bg-gray-100 h-1 w-105 mt-10"></div>

          <div className="w-full max-w-sm mb-30 mt-20">
            <p className="mb-2 text-sm text-black font-bold">Email</p>

            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border mb-6 border-gray-400 rounded-md 
                         bg-transparent text-black placeholder-black
                         focus:outline-none focus:border-green-900 
                         transition duration-300"
            />
            <p className="text-black font-bold cursor-pointer flex justify-between">
              Password
              <span className="ml-60 text-shadow-black cursor-pointer font-bold">Forget?</span>
            </p>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border border-gray-400 rounded-md 
                         bg-transparent text-black placeholder-black
                         focus:outline-none focus:border-green-900
                         transition duration-300"
            />

            <button
              className="
            bg-[#1E5B42]   
            hover:bg-[#1E5B41]
            text-white            
            font-semibold       
            py-2                
            px-6
            pl-40
            pr-40          
            rounded-2xl                    
            duration-300       
            ease-in-out          
            focus:outline-none    
            focus:ring-2    
            mt-8
            cursor-pointer
            focus:ring-indigo-500
            focus:ring-opacity-50
          "
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Right Section - Adjusted */}
      <div className="flex-1 flex justify-center md:justify-end items-start">
        <img
          className="mt-10 w-175  h-175"
          src="/let.png"
          alt="Decorative"
        />
      </div>
    </div>
  );
};

export default App;
