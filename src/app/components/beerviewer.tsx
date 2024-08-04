import { BeerData } from "../types";
import { useRouter } from "next/navigation";
import { Drink } from "./drink";
import Image from "next/image";
import BeerLabel from "./beerlabel";
import Beer from "../../../public/ColdWest.jpg";

export default function BeerViewer(props: { beerData: BeerData }) {
  const router = useRouter();
  const routerReturn = () => {
    router.back();
  };
  return (
    <div className="w-full h-full">
      <div
        className="w-12 h-12 absolute top-2 left-2 bg-black"
        onClick={routerReturn}
      />
      <div className="flex flex-col gap-4 justify-center items-center">
        <Image
          src={Beer}
          width={250}
          height={250}
          alt="Picture of the author"
        />
        <div className="flex flex-col border-2 border-black w-72 justify-center items-center gap-2 bg-white">
          <BeerLabel title={"Beer"} data={props.beerData.Beer} />
          {props.beerData.Brewery && (
            <BeerLabel title={"Brewery"} data={props.beerData.Brewery + ""} />
          )}
          {props.beerData.Rating && (
            <BeerLabel title={"Rating"} data={props.beerData.Rating + ""} />
          )}
          {props.beerData.By && (
            <>
              <BeerLabel title={"By"} data={props.beerData.By} />
              <Drink />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
