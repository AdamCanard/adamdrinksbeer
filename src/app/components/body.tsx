"use client";
import DrankForm from "./drankform";
import DrinkForm from "./drinkform";
import List from "./list";

export default function Body() {
  return (
    <div className="grid md:flex flex-row w-full h-full gap-2 justify-center items-center">
      <div className="flex flex-col">
        <DrankForm />
        <DrinkForm />
      </div>
      <div className="grid ">
        <List Title={"Drank"} API="/api/getdrank/" />
        <List Title={"Drink"} API="/api/getdrink/" />
      </div>
    </div>
  );
}
