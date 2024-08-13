import { useContext, useEffect, useState } from "react";
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

        //if condition object is satisfied,and the unlock hasnt been bought render button
        if (
          gameContext.upgradeList[upgradeKey].Amount >= upgradeAmount &&
          !gameContext.unlockList[key].Bought
        ) {
          return (
            <Unlock
              title={key}
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

export function Unlock(props: {
  title: string;
  unlock: UnlockType;
  index: number;
}) {
  const [buy, setBuy] = useState<boolean>(false);
  const gameContext = useContext(GameContext);

  //Handles purchase of upgrades
  const handleClick = () => {
    let unlocks = gameContext.unlockList;
    unlocks[props.title].Bought = true;
    gameContext.setUnlockList(unlocks);
    gameContext.dispatch({ type: "BUY", buy: props.unlock.Cost });
  };

  useEffect(() => {
    if (gameContext.state.sips >= props.unlock.Cost) {
      setBuy(true);
    } else {
      setBuy(false);
    }
  }, [gameContext.state.sips, props.unlock.Cost]);

  return (
    <>
      {buy ? (
        <div
          className="w-11 h-11 bg-white border-2 border-black hover:cursor-pointer"
          onClick={handleClick}
        ></div>
      ) : (
        <div className="w-11 h-11 bg-white border-2 border-black hover:cursor-pointer opacity-50"></div>
      )}
    </>
  );
}
