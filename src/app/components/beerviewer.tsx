import { BeerData } from "../types";

export default function BeerViewer(props: { beerData: BeerData }) {
  console.log(props.beerData);
  return (
    <div className="flex w-full h-12 border-2 justify-between items-center p-2">
      <div>{props.beerData.Beer}</div>
      <div>{props.beerData.Brewery}</div>
      {props.beerData.Rating && <div>{props.beerData.Rating}</div>}
      {props.beerData.By && <div>{props.beerData.By}</div>}
    </div>
  );
}
