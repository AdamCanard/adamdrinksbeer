import { Beer } from "./body";

export default function ListElement(props: { beer: Beer }) {
  return (
    <div className="flex w-full h-12 border-2 justify-between items-center">
      <div className="p-2">{props.beer.name}</div>
      <div className="p-2">{props.beer.brewery}</div>
      <div className="p-2">{props.beer.rating}</div>
    </div>
  );
}
