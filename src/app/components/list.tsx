import { BeerData } from "../types";
import ListElement from "./listelement";
import { useState, useEffect } from "react";

export default function List(props: { Title: string }) {
  const [listElements, setListElements] = useState<BeerData[]>([]);

  //TODO fix type of listElements

  const getListElements = async () => {
    try {
      const response = await fetch("/api/getbeer/", { method: "GET" });
      const beerListResponse = await response.json();
      setListElements(beerListResponse.items);
    } catch {
      //dont throw error
    }
  };

  useEffect(() => {
    getListElements();
  }, []);

  const refreshData = () => {
    getListElements();
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="border-2 border-black bg-red-500 w-1/2 text-center text-3xl">
        {props.Title}
      </h1>
      <div className="w-96 flex flex-col border-2 bg-red-500 h-64 overflow-y-scroll">
        {listElements.map((listElement, index) => {
          if (props.Title == "Drank" && listElement.Drank)
            return (
              <ListElement data={listElement} type={props.Title} key={index} />
            );
          else if (props.Title == "Drink" && !listElement.Drank) {
            return (
              <ListElement data={listElement} type={props.Title} key={index} />
            );
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
