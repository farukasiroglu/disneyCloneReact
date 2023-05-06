import React from "react";
import disney from "../assets/Images/disney.png";
import marvel from "../assets/Images/marvel.png";
import nationalgeographic from "../assets/Images/nationalG.png";
import pixar from "../assets/Images/pixar.png";
import starwars from "../assets/Images/starwar.png";

import starwarsV from "../assets/Videos/star-wars.mp4";
import disneyV from "../assets/Videos/disney.mp4";
import marvelV from "../assets/Videos/marvel.mp4";
import pixarV from "../assets/Videos/pixar.mp4";
import nationalV from "../assets/Videos/national-geographic.mp4";

function ProductionHouse() {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: marvel,
      video: marvelV,
    },
    {
      id: 3,
      image: pixar,
      video: pixarV,
    },
    {
      id: 4,
      image: nationalgeographic,
      video: nationalV,
    },
    {
      id: 5,
      image: starwars,
      video: starwarsV,
    },
  ];

  return (
    <>
    {/* PC Blocks */}
    <div className="hidden md:flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {productionHouseList.map((item) => (
        <div className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-lg shadow-gray-800">
          <video
            src={item.video}
            loop
            autoPlay
            playsInline
            className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50"
          />
          <img src={item.image} className="w-full z-[1]" />
        </div>
      ))}
    </div>
    {/* Mobile Slide */}
    <div className="md:hidden flex gap-4 overflow-x-auto w-full px-4 py-4 scrollbar-none scroll-smooth">
    {productionHouseList.map((item) => (
        <div className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-lg shadow-gray-800">
          <video
            src={item.video}
            loop
            autoPlay
            playsInline
            className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50"
          />
          <img src={item.image} className="min-w-[130px] z-[1]" />
        </div>
      ))}
    </div>
    </>
  );
}

export default ProductionHouse;
