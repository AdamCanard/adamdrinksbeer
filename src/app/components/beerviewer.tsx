import Popup from "./popup";
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

//type for Popup context
interface PopupContextType {
  rating: number;
  setRating: React.Dispatch<SetStateAction<number>>;
  brewery: string;
  setBrewery: React.Dispatch<SetStateAction<string>>;
  drinkTrigger: boolean;
  setDrinkTrigger: React.Dispatch<SetStateAction<boolean>>;
}

//cast empty object to contexttype
export const PopupContext = createContext<PopupContextType>(
  {} as PopupContextType
);

export default function BeerViewer() {
  const beerData = useContext(BeerContext);
  const [rating, setRating] = useState(0);
  const [brewery, setBrewery] = useState("");
  const [drinkTrigger, setDrinkTrigger] = useState(false);

  //Set rating and brewing to beerData values
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
                  {/* Only render drink button here because this is what works, 
                could check drank value of database object */}
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
