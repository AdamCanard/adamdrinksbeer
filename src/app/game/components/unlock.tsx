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
    //Is not useless! used for non SPS unlocks like the tipso meter
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
    <div id="border-np" className="w-12 h-12">
      {buy ? (
        <div
          id="border-g"
          className="w-full h-full hover:cursor-pointer"
          onClick={handleClick}
        >
          {props.unlock.Cost}
        </div>
      ) : (
        <div id="border-r" className="w-full h-full hover:cursor-default ">
          {props.unlock.Cost}
        </div>
      )}
    </div>
  );
}
