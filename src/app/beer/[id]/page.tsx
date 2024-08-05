"use client";
import { useEffect, useState } from "react";
import BeerViewer from "../../components/beerviewer";
import { BeerData } from "../../types";

export default function Page({ params }: { params: { id: string } }) {
  const [beerData, setBeerData] = useState<BeerData>({
    Beer: "",
    Drank: false,
  });
  const getData = async (formData: FormData) => {
    try {
      const response = await fetch("/api/getbeerbyid/", {
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
    formData.append("id", params.id);
    getData(formData);
  }, []);

  return <BeerViewer beerData={beerData} />;
}
