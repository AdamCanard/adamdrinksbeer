"use client";
import { useState, useEffect, useContext } from "react";
import { BeerData } from "../types";
import { BeerContext } from "../beer/[id]/page";

export function Drink(props: { Id?: string }) {
  const beerData = useContext(BeerContext);
  const drinkBeer = async (formData: FormData) => {
    try {
      const response = await fetch("/api/drinkbeer/", {
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
    console.log(beerData);
    if (beerData.Rating == 0) {
      //TODO
    }
    if (beerData.Brewery == "") {
      //TODO
    }
    const formData = new FormData();
    formData.append("id", beerData.id);
    formData.append("Beer", beerData.Beer);
    formData.append("Brewery", beerData.Brewery);
    formData.append("By", beerData.By);
    formData.append("Rating", beerData.Rating);
    formData.append("Drank", true);

    drinkBeer(formData);
  };

  return (
    <div
      onClick={handleClick}
      className="flex w-12 h-12 border-2 border-black bg-white hover:cursor-pointer"
    >
      Drink Me!
    </div>
  );
}
