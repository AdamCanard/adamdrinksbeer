"use client";

import Form from "./form";
import List from "./list";

export default function Body() {
  return (
    <div className="flex flex-col md:flex w-full h-full gap-2 items-center">
      <div className="flex flex-row flex-wrap ">
        <List Title="Drank" API="/api/getdrank/" />
        <List Title="Drink" API="/api/getdrink/" />
      </div>
      <div className="flex flex-row gap-32 ">
        <Form
          Title="Drank"
          API="/api/newdrank/"
          Fields={["Beer", "Brewery", "Rating"]}
        />
        <Form
          Title="Drink"
          API="/api/newdrink/"
          Fields={["Beer", "Brewery", "By"]}
        />
      </div>
    </div>
  );
}
