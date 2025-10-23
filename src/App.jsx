const App = () => {
  return (
    
    <div
      className=" ml-40 mt-40 tems-center justify-center 
      text-white"
    >
    
      <img className="w-32 mt-4" src="/image.png" alt="Fillanta Logo" />

      <h1 className="text-2xl font-semibold mt-6 text-black">Get Started</h1>

      <span className="text-gray-600 mt-2 mb-6">
        Welcome to Fillanta — Let’s create your account
      </span>
      
      <div className="bg-gray-200 w-90 h-1 mt-15">
      hi
      </div>
      <div className="w-full max-w-sm mt-20">
        <p className="mb-2 text-sm text-black">Email</p>

        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
          className="w-full px-4 py-2 border mb-6 border-gray-400 rounded-md 
                     bg-transparent text-black placeholder-black
                     focus:outline-none focus:border-green-600 
                     transition duration-300"
        />
        <p className="text-black font-bold">Password
           <span className="ml-60 font-light text-shadow-black">Forget?</span></p>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
          className="w-full px-4 py-2 border border-gray-400 rounded-md 
                     bg-transparent text-black placeholder-black
                     focus:outline-none focus:border-green-600 
                     transition duration-300"
        />
      </div>

      <button>
        Sign up
      </button>
    </div>
  );
};

export default App;
