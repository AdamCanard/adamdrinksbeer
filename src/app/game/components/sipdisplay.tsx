import { useContext } from "react";
import { GameContext } from "./game";

export default function SipDisplay() {
  //pulls from Context displays total sips and SPS
  const gameContext = useContext(GameContext);
  return (
    <div className="flex flex-col  w-full h-1/6 justify-center items-center border-2 border-black">
      <div>{Math.round(gameContext.state.sips)} Sips</div>
      <div>{Math.round(gameContext.state.sps * 100) / 100} SPS</div>
      <div>{gameContext.state.beer} Beers</div>
      <div>
        {Math.round(
          Math.pow(1000, 1 + gameContext.state.beer / 10) -
            gameContext.state.totalSips
        )}
        Sips until finished this Beer
      </div>
    </div>
  );
}
