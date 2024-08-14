import { useContext, useEffect, useState } from "react";
import { UnlockType } from "./gametypes";
import { GameContext } from "./game";
import { BonusCalculator } from "./unlockfunctions";

export function Unlock(props: {
  title: string;
  unlock: UnlockType;
  index: number;
}) {
  const [buy, setBuy] = useState<boolean>(false);
  const gameContext = useContext(GameContext);

  //Handles purchase of unlocks
  const handleClick = () => {
    let unlocks = gameContext.unlockList;
    //might be useless
    unlocks[props.title].Bought = true;

    gameContext.setUnlockList(unlocks);
    gameContext.dispatch({ type: "BUY", buy: props.unlock.Cost });
    BonusCalculator(props.unlock.Bonus, gameContext);
  };

  //renders the buy button if you can afford it
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
        >
          {props.unlock.Cost}
        </div>
      ) : (
        <div className="w-11 h-11 bg-white border-2 border-black hover:cursor-pointer opacity-50">
          {props.unlock.Cost}
        </div>
      )}
    </>
  );
}
