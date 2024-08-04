"use client";
import { useState, useEffect } from "react";
import { BeerData } from "../types";

export function Drink() {
  const [drankList, setDrankList] = useState<BeerData[]>();
  const [drinkList, setDrinkList] = useState<BeerData[]>();

  const makeBeer = async (formData: FormData) => {
    try {
      const response = await fetch("/api/newbeer/", {
        method: "POST",
        body: formData,
      });
      console.log(await response.json());
    } catch (err: any) {
      return new Response(
        JSON.stringify({ error: err.message || err.toString() }),
        {
          status: 500,
          headers: {},
        }
      );
    }
  };

  const handleClick = async () => {
    try {
      const response = await fetch("/api/getdrank/", { method: "GET" });
      const drankListResponse = await response.json();
      setDrankList(drankListResponse.items);
    } catch {
      //dont throw error
    }
    try {
      const response = await fetch("/api/getdrink/", { method: "GET" });
      const drinkListResponse = await response.json();
      setDrinkList(drinkListResponse.items);
    } catch {
      //dont throw error
    }
  };
  useEffect(() => {
    console.log(drinkList, drankList);

    if (drinkList != undefined && drankList != undefined) {
      const beerList = drinkList.concat(drankList);
      console.log(beerList);
      beerList.map((data) => {
        const formData = new FormData();
        formData.append("Beer", data.Beer);
        formData.append("Brewery", data.Brewery || "");
        formData.append("By", data.By || "");
        formData.append("Rating", data.Rating || 0);
        makeBeer(formData);
      });
    }
  }, [drinkList, drankList]);
  return (
    <div
      onClick={handleClick}
      className="flex w-12 h-12 border-2 border-black bg-white hover:cursor-pointer"
    >
      Drink Me!
    </div>
  );
}
