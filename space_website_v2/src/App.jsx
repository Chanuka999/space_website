import React from "react";
import video from "./assets/video.mp4";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <div>
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z[-1]"
        >
          <source src={video} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
