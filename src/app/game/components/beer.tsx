import { useContext } from "react";
import { GameContext } from "./game";
import Image from "next/image";
import BeerImg from "../../../../public/PBR.png";

export default function Beer() {
  //The clickable beer that adds sips to sip counter
  const gameContext = useContext(GameContext);
  const handleClick = () => {
    gameContext.dispatch({ type: "CLICK" });
  };
  return (
    <div className="flex w-full h-4/6 justify-center items-center border-2 border-black">
      <Image
        width={200}
        height={400}
        src={BeerImg}
        alt="Clicking Beer"
        onClick={handleClick}
        className="hover:cursor-pointer"
      />
    </div>
  );
}
