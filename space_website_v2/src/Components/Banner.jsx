import React from "react";
import Satelite from "../assets/satelite1.jpg";

const Banner = () => {
  return (
    <div className="bg-black text-white pb-12">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div>
            <img src={Satelite} alt="" />
          </div>
          <div>
            <p>Our Mission</p>
            <h1>Rapidcast</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              ea a libero dolor aut ipsum, quo nesciunt, similique perferendis
              dicta praesentium deleniti , aliquid sit alias quisquam. Vitae
              dolorem quam ducimus!
            </p>
            <button className="primary-button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
