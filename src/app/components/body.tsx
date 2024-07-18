"use client";
import ListElement from "./listelement";

import { useState } from "react";

export interface Beer {
  name: string;
  brewery: string;
  rating: string;
}

const beerOne: Beer = {
  name: "Athabasca Wit",
  brewery: "Bow River Brewing",
  rating: "4/10",
};
const beerTwo: Beer = {
  name: "Athabasca Wit",
  brewery: "Bow River Brewing",
  rating: "4/10",
};
const beerThree: Beer = {
  name: "Athabasca Wit",
  brewery: "Bow River Brewing",
  rating: "4/10",
};

const initDrankList = [beerOne, beerTwo, beerThree];

export default function Body() {
  const [drankList, setDrankList] = useState(initDrankList);
  return (
    <div className="flex flex-row gap-4 justify-center items-center w-full h-full bg-red-500">
      <div className="w-96 h-96 flex flex-col border-2 ">
        {drankList.map((beer, index) => {
          return <ListElement beer={beer} key={index} />;
        })}
      </div>
      <div className="w-72 h-96 flex border-2 "></div>
    </div>
  );
}
