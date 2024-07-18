"use client";
import ListElement from "./listelement";
import { useState, useEffect } from "react";

export interface Beer {
  name: string;
  brewery: string;
  rating: number;
}

export default function Body() {
  const [drankList, setDrankList] = useState([]);

  // const getUpdatedDranks = async () => {
  //   try {
  //     const response = await fetch("/api/getdrank/", { method: "POST" });
  //     const drankListResponse = await response.json();
  //     setDrankList(drankListResponse.items);
  //   } catch {
  //     //dont throw error
  //   }
  // };

  const getDranks = async () => {
    try {
      const response = await fetch("/api/getdrank/", { method: "GET" });
      const drankListResponse = await response.json();
      setDrankList(drankListResponse.items);
    } catch {
      //dont throw error
    }
  };

  useEffect(() => {
    getDranks();
  }, []);

  return (
    <div className="flex flex-row gap-4 justify-center items-center w-full h-full bg-red-500">
      <div className="flex flex-col">
        <div className="w-96 h-96 flex flex-col border-2 ">
          {drankList.map((beer, index) => {
            const newBeer: Beer = {
              name: beer.Name,
              brewery: beer.Brewery,
              rating: beer.Rating,
            };
            return <ListElement beer={newBeer} key={index} />;
          })}
        </div>
        {/* <button className="w-12 h-12 bg-white" onClick={getUpdatedDranks}>
          Refresh
        </button> */}
      </div>
      <div className="w-72 h-96 flex border-2 "></div>
    </div>
  );
}
