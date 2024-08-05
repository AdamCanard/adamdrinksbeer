"use client";
import { useState, useEffect, useContext } from "react";
import { BeerData } from "../types";
import { BeerContext } from "../beer/[id]/page";
import { PopupContext } from "./beerviewer";

export function Drink(props: { Id?: string }) {
  const beerData = useContext(BeerContext);
  const popupData = useContext(PopupContext);

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
    if (beerData.Rating == 0 || beerData.Brewery == "") {
      popupData.setDrinkTrigger(true);
    }
  };

  useEffect(() => {
    if (
      !popupData.drinkTrigger &&
      popupData.rating != 0 &&
      popupData.brewery != ""
    ) {
      const formData = new FormData();
      formData.append("id", beerData.id);
      formData.append("Beer", beerData.Beer);
      formData.append("Brewery", popupData.brewery);
      formData.append("By", beerData.By);
      formData.append("Rating", popupData.rating);
      formData.append("Drank", true);
      drinkBeer(formData);
    }
  }, [popupData.drinkTrigger]);

  return (
    <div
      onClick={handleClick}
      className="flex w-12 h-12 border-2 border-black bg-white hover:cursor-pointer"
    >
      Drink Me!
    </div>
  );
}
