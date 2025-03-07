import React from "react";
import video from "./assets/video.mp4";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Banner from "./Components/Banner";
import Banner2 from "./Components/Banner2";
import Footer from "./Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
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
      <Services />
      <Banner />
      <Banner2 />
      <Footer />
    </div>
  );
};

export default App;
