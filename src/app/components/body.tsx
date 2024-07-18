"use client";
import ListElement from "./listelement";
import { useState, useEffect } from "react";

export function List(props: { Title: String; API: string }) {
  const [listElements, setListElements] = useState([]);

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

  return (
    <div className="flex flex-col">
      <h1>{props.Title}</h1>
      <div className="w-96 h-96 flex flex-col border-2 ">
        {listElements.map((listElement, index) => {
          const type: string = listElement.collectionName;
          return <ListElement data={listElement} type={type} key={index} />;
        })}
      </div>
      {/* <button className="w-12 h-12 bg-white" onClick={getUpdatedDranks}>
          Refresh
        </button> */}
    </div>
  );
}

export default function Body() {
  // const getUpdatedDranks = async () => {
  //   try {
  //     const response = await fetch("/api/getdrank/", { method: "POST" });
  //     const drankListResponse = await response.json();
  //     setDrankList(drankListResponse.items);
  //   } catch {
  //     //dont throw error
  //   }
  // };

  return (
    <div className="flex flex-row gap-4 justify-center items-center w-full h-full bg-red-500">
      <List Title={"Drank"} API="/api/getdrank/" />
      <List Title={"Drink"} API="/api/getdrink/" />
    </div>
  );
}
