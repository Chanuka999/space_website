import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4">
      <div className="container">
        <div className="flex">
          <div className="flex">
            <img src={Logo} alt="" class="w-30 h-30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
