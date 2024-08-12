import { useContext, useEffect } from "react";
import { GameContext, UnlockType } from "./game";

export default function Unlocks() {
  const gameContext = useContext(GameContext);
  //not fully implemented
  return (
    <div className="flex flex-row flex-wrap w-full h-1/3 content-start">
      {gameContext.unlockList.map((unlock, index) => {
        if (unlock.Trigger(gameContext.upgradeList[index].Amount)) {
          return <Unlock unlock={unlock} index={index} key={index} />;
        }
      })}
    </div>
  );
}

export function Unlock(props: { unlock: UnlockType; index: number }) {
  return <div className="w-11 h-11 bg-white border-2 border-black"></div>;
}
