import { useContext } from "react";
import { GameContext } from "./game";
import { UnlockType } from "./gametypes";

export default function Unlocks() {
  const gameContext = useContext(GameContext);
  //not fully implemented
  return (
    <div className="flex flex-row flex-wrap w-full h-1/3 content-start">
      {Object.keys(gameContext.unlockList).map((key, index) => {
        //for every unlock in unlock list

        //grab the condition Object
        //which contains "Upgrade Name" : "Upgrade Amount"
        const condition = Object.entries(
          gameContext.unlockList[key].Condition
        )[0];
        //condition is formatted as ["Upgrade Name","Upgrade Amount"]
        let upgradeKey = condition[0];
        let upgradeAmount = condition[1];

        //if condition object is satisfied, render button
        if (gameContext.upgradeList[upgradeKey].Amount >= upgradeAmount) {
          return (
            <Unlock
              unlock={gameContext.unlockList[key]}
              index={index}
              key={index}
            />
          );
        }
      })}
    </div>
  );
}

export function Unlock(props: { unlock: UnlockType; index: number }) {
  return <div className="w-11 h-11 bg-white border-2 border-black"></div>;
}
