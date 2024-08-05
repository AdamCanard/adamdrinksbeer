import { BeerData } from "../types";
import { useRouter } from "next/navigation";
import {
  useState,
  useContext,
  createContext,
  SetStateAction,
  useEffect,
} from "react";
import { Drink } from "./drink";
import Image from "next/image";
import BeerLabel from "./beerlabel";
import Beer from "../../../public/ColdWest.jpg";
import { BeerContext } from "../beer/[id]/page";

interface PopupContextType {
  rating: number;
  setRating: React.Dispatch<SetStateAction<number>>;
  brewery: string;
  setBrewery: React.Dispatch<SetStateAction<string>>;
  drinkTrigger: boolean;
  setDrinkTrigger: React.Dispatch<SetStateAction<boolean>>;
}

export const PopupContext = createContext<PopupContextType>(
  {} as PopupContextType
);

export default function BeerViewer() {
  const beerData = useContext(BeerContext);

  const [rating, setRating] = useState(0);
  const [brewery, setBrewery] = useState("");
  const [drinkTrigger, setDrinkTrigger] = useState(false);

  useEffect(() => {
    if (beerData.Rating) {
      setRating(beerData.Rating);
    }
    if (beerData.Brewery) {
      setBrewery(beerData.Brewery);
    }
  }, [beerData]);

  const router = useRouter();

  const routerReturn = () => {
    router.back();
  };
  return (
    <div className="w-full h-screen">
      <div
        className="w-12 h-12 absolute top-2 left-2 bg-black hover:cursor-pointer z-10"
        onClick={routerReturn}
      />
      <PopupContext.Provider
        value={{
          rating,
          setRating,
          brewery,
          setBrewery,
          drinkTrigger,
          setDrinkTrigger,
        }}
      >
        <Popup>
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
        </Popup>
      </PopupContext.Provider>
    </div>
  );
}

export function Popup(props: { children?: React.ReactNode }) {
  const popupData = useContext(PopupContext);
  const handleSubmit = () => {
    if (popupData.rating != 0 && popupData.brewery != "") {
      popupData.setDrinkTrigger(false);
    }
  };
  return (
    <>
      {popupData.drinkTrigger ? (
        <>
          <div className="absolute flex w-full h-full justify-center items-center">
            <div className=" w-80 border-2 border-black bg-white z-10 p-2">
              <label className="flex justify-between">
                Enter Rating:
                <input
                  className="border-2 border-black"
                  type="text"
                  name="Rating"
                  value={popupData.rating || ""}
                  onChange={(e) => popupData.setRating(+e.target.value)}
                />
              </label>
              <label className="flex justify-between">
                Enter Brewery:
                <input
                  className="border-2 border-black"
                  type="text"
                  name="Brewery"
                  value={popupData.brewery}
                  onChange={(e) => popupData.setBrewery(e.target.value)}
                />
              </label>
              <div
                onClick={handleSubmit}
                className=" w-16 h-6 border-2 border-black hover:cursor-pointer leading-5 pl-1"
              >
                Submit
              </div>
            </div>
          </div>
          <div className="opacity-25 pointer-events-none">{props.children}</div>
        </>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
}
