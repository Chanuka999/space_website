import React from "react";

const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative z-50">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4"></div>
        <div className="space-y-4 lg:pr-36">
          <h1 className="text-5xl font-bold">Orbite the Earth</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            vero tenetur nostrum ad pariatur! Aspernatur tempora, commodi
            voluptatem harum debitis culpaet sapiente placeat provident
            consectetur quibusdam dolores dignissimos maiores?
          </p>
          <button className="bg-blue-400 text-white hover-bg-blue-500 px-4 py-1 rounded-md duration-200">
            Learn More
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
