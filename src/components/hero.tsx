function Hero() {
    return (
      <div className="h-[37rem] bg-[url('/public/bg.jpg')] bg-[length:100%_100%] bg-no-repeat">
        <div className="my-48 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-72 text-center">
          <h1 className="font-extrabold text-gray-900">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-indigo-400 text-4xl sm:text-6xl md:text-7xl">
              ToysRus
            </p>
          </h1>
          <h2 className="mt-3 max-w-md mx-auto text-yellow-100 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl font-extrabold">
          Feel the Wonder of Toys
          </h2>
        </div>
      </div>
    );
  }
  
  export default Hero;
  