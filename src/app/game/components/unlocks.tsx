import { useContext, useEffect, useState } from "react";
import { GameContext, GameContextType } from "./game";
import { IBonus, UnlockType } from "./gametypes";

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
        ></div>
      ) : (
        <div className="w-11 h-11 bg-white border-2 border-black hover:cursor-pointer opacity-50"></div>
      )}
    </>
  );
}

function BonusCalculator(bonus: IBonus, gameContext: GameContextType) {
  //if bonus
  if (Object.keys(gameContext.upgradeList).includes(bonus.key)) {
    let upgrades = gameContext.upgradeList;
    const calculator = Operator(bonus.operator);
    upgrades[bonus.key].Multiplier = calculator(
      upgrades[bonus.key].Multiplier,
      bonus.value
    );
    gameContext.setUpgradeList(upgrades);
  }
}

function Operator(operator: string) {
  switch (operator) {
    case "*":
      return (a: number, b: number) => {
        return a * b;
      };
    default:
      return (a: number, b: number) => {
        return a;
      };
  }
}
