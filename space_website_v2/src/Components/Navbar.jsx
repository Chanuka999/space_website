import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div
      data-aos="fade-down"
      className="fixed top-0 right-0 w-full z-[99] bg-black/10 backdrop-blur-sm py-4 sm:py-4"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 text-white font-bold text-2xl">
            <img src={Logo} alt="" className="w-10 h-12" />
            <span>CR-SPACE</span>
          </div>
          <div className="text-white hidden md:block">
            <ul className="flex items-center gap-6 text-xl py-4 sm-py-0">
              <li>
                <a href="Hero.jsx">About</a>
              </li>
              <li>
                <a href="Banner.jsx">Technology</a>
              </li>
              <li>
                <a href="Banner2.jsx">Galaxy</a>
              </li>
              <li>
                <a href="Services.jsx">Satelite</a>
              </li>
            </ul>
          </div>
          <div>
            <button className="text-white border-2 border-white px-3 py-1 rounded-md">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
