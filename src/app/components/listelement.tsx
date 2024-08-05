import { useRouter } from "next/navigation";
import { BeerData } from "../types";

export default function ListElement(props: { data: BeerData; type: string }) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/beer/" + props.data.id);
  };
  return (
    <>
      <div
        className="flex w-full h-12 border-2 justify-between items-center p-2 hover:cursor-pointer"
        onClick={handleClick}
      >
        <>
          <div>{props.data.Beer}</div>
          <div>{props.data.Brewery}</div>
          {props.data.Rating != 0 && <div>{props.data.Rating}</div>}
          {props.data.By && <div>{props.data.By}</div>}
        </>
      </div>
    </>
  );
}
