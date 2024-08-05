"use client";
import { useEffect, useState, createContext } from "react";
import BeerViewer from "../../components/beerviewer";
import { BeerData } from "../../types";

export const BeerContext = createContext<BeerData>({
  Beer: "",
  Drank: false,
});

//Route here after clicking on Beer list element
export default function Page({ params }: { params: { id: string } }) {
  //assign the beer id to the beerData
  //unsure if this is neccesary
  const [beerData, setBeerData] = useState<BeerData>({
    id: params.id,
    Beer: "",
    Drank: false,
  });

  //store beerdata on beer by id
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

  //on render grab the beer data from the given beer id
  useEffect(() => {
    const formData = new FormData();
    formData.append("id", params.id);
    getData(formData);
  }, []);

  return (
    //setup beerdata context
    <BeerContext.Provider value={beerData}>
      <BeerViewer />
    </BeerContext.Provider>
  );
}
