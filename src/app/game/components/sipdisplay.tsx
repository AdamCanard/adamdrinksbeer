import { useContext } from "react";
import { GameContext } from "./game";

export default function SipDisplay() {
  //pulls from Context displays total sips and SPS
  const gameContext = useContext(GameContext);
  const cheat = () => {
    gameContext.dispatch({ type: "BEER" });
  };
  return (
    <div
      id="border"
      className="flex flex-col w-full h-1/5 justify-center items-center"
    >
      <div>{Math.round(gameContext.state.sips)} Sips</div>
      <div>{Math.round(gameContext.state.sps * 100) / 100} SPS</div>
      <div onClick={cheat}>{gameContext.state.beer} Beers</div>
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
