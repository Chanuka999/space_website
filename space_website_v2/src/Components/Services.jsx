import React from "react";
import { FaReact } from "react-icons/fa";

const ServiceData = [
  {
    title: "HST",
    content: "300-1500km",
    description:
      "used for astromical observations,capturig stunning images of the universe.",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "ISS",
    content: "500-1500km",
    description:
      "it is a habitable artifical satellite orbiting Earth and serves as a space enviroment research laboratary",
    icon: <FaShuttleSpace />,
    aosDelay: "500",
  },
  {
    title: "GPS",
    content: "300-1500km",
    description:
      "part of the Global positionig system(GPS) used for navigation.",
    icon: <FaSpaceawesome />,
    aosDelay: "300",
  },
];

const Services = () => {
  return (
    <div>
      <div className="container">
        <div className="min-h-[400px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
            {ServiceData.map((data, index) => (
              <div>
                <h1>{data.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
