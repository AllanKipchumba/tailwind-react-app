import React from "react";
import Double from "./cards/Double";
import Single from "./cards/Single";
import Tripple from "./cards/Tripple";
const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <Single />
        <Double />
        <Tripple />
      </div>
    </div>
  );
};

export default Cards;
