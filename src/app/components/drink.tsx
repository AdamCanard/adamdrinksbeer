"use client";
import { useState, useEffect } from "react";
import { BeerData } from "../types";

export function Drink() {
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

  const handleClick = async () => {};

  return (
    <div
      onClick={handleClick}
      className="flex w-12 h-12 border-2 border-black bg-white hover:cursor-pointer"
    >
      Drink Me!
    </div>
  );
}
