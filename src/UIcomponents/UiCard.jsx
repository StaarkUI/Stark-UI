import React from "react";
import FoodCard from "../design/FoodCard";
import RipperEffectCard from "../design/RipperEffectCard";
import MusicCard from "../design/MusicCard";


const UiCard = () => {
  return (
    <div className="mt-20 ml-40">
      <h1 className="ml-50 mt-24 pb-5 text-2xl font-bold">Card</h1>
      <div>
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Food Card
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <FoodCard />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Ripper Card
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <RipperEffectCard />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="ml-52 text-xl font-medium text-gray-500 my-4">
          Media Control Card
        </h1>
        <div className="ml-50 border-1 border-gray-300 w-200 h-100 rounded-2xl">
          <MusicCard />
        </div>
      </div>



      <div className="ml-80 mt-25">
        <h1 className="font-mono">Built by STARK UI at Vercel. The source code is available on GitHub.</h1>
      </div>
    </div>
  );
};

export default UiCard;
