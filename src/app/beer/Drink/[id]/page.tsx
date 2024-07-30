"use client";
import { useEffect, useState } from "react";
import BeerViewer from "../../../components/beerviewer";
import { BeerData } from "../../../types";

export default function Page({
  params,
}: {
  params: { id: string; collection: string };
}) {
  const [beerData, setBeerData] = useState<BeerData>({
    Beer: "",
    Brewery: "",
    By: "",
  });
  const getData = async (formData: FormData) => {
    try {
      const response = await fetch("/api/getbyid/", {
        method: "POST",
        body: formData,
      });
      const beerResponse = await response.json();

      setBeerData(beerResponse);
    } catch {
      //dont throw error
    }
  };

  useEffect(() => {
    const formData = new FormData();
    formData.append("collection", "Drink");
    formData.append("id", params.id);
    getData(formData);
  }, []);

  return <BeerViewer beerData={beerData} />;
}
