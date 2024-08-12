import { useContext } from "react";
import { GameContext } from "./game";

export default function SipDisplay() {
  const gameContext = useContext(GameContext);
  return (
    <div className="flex flex-col  w-full h-1/6 justify-center items-center border-2 border-black">
      <div>{gameContext.state.sips} Sips</div>
      <div>{gameContext.state.sps} SPS</div>
    </div>
  );
}
