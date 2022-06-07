import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#00df9a]">growing with data analytics</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="text-xl sm:text-4xl md:text-5xl">
            Fast, flexible financing for{" "}
            <Typed
              strings={["btb", "btc", "sass"]}
              typeSpeed={150}
              backSpeed={100}
              loop
              showCursor={true}
              className="text-xl sm:text-4xl md:text-5xl text-[#00df9a] font-bold uppercase md:pl-4 pl-2"
            />
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 p-2">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms{" "}
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Hero;
