import React from "react";
import MoonSurface from "../assets/moon.png";

const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative z-50">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold uppercase">
              Orbite the Earth
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Welcome to space web site, your gateway to the wonders of the
              cosmos! Discover the mysteries of space, explore breathtaking
              galaxies, and stay updated with the latest astronomical
              discoveries. Stay informed with real-time updates on space
              missions, astronomical events, and scientific breakthroughs. 🌌
              Interactive Universe – Explore planets, stars, and galaxies
              through stunning visuals and interactive simulations. 🛰️ Space
              Missions – Track ongoing and past space missions, including NASA,
              SpaceX, and international space agencies. 📡 Astronomy Guides –
              Learn about constellations, black holes, exoplanets, and more
              through in-depth articles and educational content.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="300"
              className="primary-button"
            >
              Learn More
            </button>
          </div>
          <div></div>
        </div>
      </div>

      <img
        src={MoonSurface}
        alt=""
        className="absolute right-0 bottom-o w-full brightness-50 z-10 "
      />
      <div className="absolute bottom-o w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;
