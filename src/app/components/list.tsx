import ListElement from "./listelement";
import { useState, useEffect } from "react";

export default function List(props: { Title: String; API: string }) {
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

  const refreshData = () => {
    getListElements(props.API);
  };

  return (
    <div className="flex flex-col">
      <h1>{props.Title}</h1>
      <div className="w-96 flex flex-col border-2 ">
        {listElements.map((listElement, index) => {
          const type: string = listElement.collectionName;
          return <ListElement data={listElement} type={type} key={index} />;
        })}
      </div>
      <button onClick={refreshData}>Click Me!</button>
    </div>
  );
}
