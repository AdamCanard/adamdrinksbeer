import ListElement from "./listelement";
import { useState, useEffect } from "react";

export default function List(props: { Title: String; API: string }) {
  const [listElements, setListElements] = useState([]);

  //TODO fix type of listElements
  // set list scrollable after 5 elements

  const getListElements = async (API: string) => {
    try {
      const response = await fetch(API, { method: "GET" });
      const drankListResponse = await response.json();
      setListElements(drankListResponse.items);
    } catch {
      //dont throw error
    }
  };

  useEffect(() => {
    getListElements(props.API);
  }, []);

  const refreshData = () => {
    getListElements(props.API);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="border-2 border-black bg-red-500 w-1/2 text-center text-3xl">
        {props.Title}
      </h1>
      <div className="w-96 flex flex-col border-2 bg-red-500 h-64 overflow-y-scroll">
        {listElements.map((listElement, index) => {
          const type: string = listElement.collectionName;
          return <ListElement data={listElement} type={type} key={index} />;
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
