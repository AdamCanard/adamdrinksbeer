import { BeerData } from "../types";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { Drink } from "./drink";
import Image from "next/image";
import BeerLabel from "./beerlabel";
import Beer from "../../../public/ColdWest.jpg";
import { BeerContext } from "../beer/[id]/page";

export default function BeerViewer() {
  const router = useRouter();
  const beerData = useContext(BeerContext);
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
          <BeerLabel title={"Beer"} data={beerData.Beer} />
          {beerData.Brewery && (
            <BeerLabel title={"Brewery"} data={beerData.Brewery + ""} />
          )}
          {beerData.Rating != 0 && (
            <BeerLabel title={"Rating"} data={beerData.Rating + ""} />
          )}
          {beerData.By && (
            <>
              <BeerLabel title={"By"} data={beerData.By} />
              <Drink />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
