import { BeerData } from "../types";
import ListElement from "./listelement";
import { useState, useEffect } from "react";

export default function List(props: { Title: string }) {
  const [listElements, setListElements] = useState<BeerData[]>([]);

  //pull list of beers from database
  const getListElements = async () => {
    try {
      const response = await fetch("/api/getbeer/", { method: "GET" });
      const beerListResponse = await response.json();
      setListElements(beerListResponse.items);
    } catch {
      //dont throw error
    }
  };

  //On Render pull data from database
  useEffect(() => {
    getListElements();
  }, []);

  //Refreshes List
  const refreshData = () => {
    getListElements();
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="border-2 border-black bg-red-500 w-1/2 text-center text-3xl">
        {props.Title}
      </h1>
      <div className="w-96 flex flex-col border-2 bg-red-500 h-64 overflow-y-scroll">
        {/* For each database object in list elements */}
        {listElements.map((listElement, index) => {
          //if List title is Drank, add database elements whos drank value is true
          if (props.Title == "Drank" && listElement.Drank)
            return <ListElement data={listElement} key={index} />;
          //if List title is Drink, add database elements whos drank value is false
          else if (props.Title == "Drink" && !listElement.Drank) {
            return <ListElement data={listElement} key={index} />;
          }
        })}
      </div>
      <button
        onClick={refreshData}
        className="border-2 border-black bg-red-500 w-1/2"
      >
        Refresh!
      </button>
    </div>
  );
}
