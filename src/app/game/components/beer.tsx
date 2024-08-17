import { useContext, useEffect, useState } from "react";
import { GameContext } from "./game";
import Image, { StaticImageData } from "next/image";
import { Beers } from "./gameobjects";
import { TipsoMeter } from "./tipsometer";

export default function Beer() {
  const [currentBeer, setCurrentBeer] = useState<StaticImageData>(Beers[0]);

  //The clickable beer that adds sips to sip counter
  const gameContext = useContext(GameContext);

  const handleClick = () => {
    gameContext.dispatch({ type: "CLICK" });
  };

  const randomBeer = () => {
    return Beers[Math.floor(Math.random() * Beers.length)];
  };

  useEffect(() => {
    const newBeer = randomBeer();
    setCurrentBeer(newBeer);
  }, [gameContext.state.beer]);

  return (
    <div className="flex flex-col w-full h-4/5 justify-start items-center gap-2">
      <Image
        width={200}
        height={250}
        src={currentBeer}
        alt="Clicking Beer"
        onClick={handleClick}
        className="hover:cursor-pointer"
        priority={true}
      />

      {gameContext.unlockList["Tipso Meter"].Bought && <TipsoMeter />}
    </div>
  );
}
