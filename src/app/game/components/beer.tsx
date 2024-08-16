import { useContext } from "react";
import { GameContext } from "./game";
import Image from "next/image";
import BeerImg from "../../../../public/PBR.png";
import { TipsoMeter } from "./tipsometer";

export default function Beer() {
  //The clickable beer that adds sips to sip counter
  const gameContext = useContext(GameContext);
  const handleClick = () => {
    gameContext.dispatch({ type: "CLICK" });
  };

  return (
    <div className="flex flex-col w-full h-4/5 justify-start items-center gap-2">
      <Image
        id="border"
        width={200}
        height={300}
        src={BeerImg}
        alt="Clicking Beer"
        onClick={handleClick}
        className="hover:cursor-pointer"
      />

      {gameContext.unlockList["Tipso Meter"].Bought && <TipsoMeter />}
    </div>
  );
}
