import Image from "next/image";
import { UpgradeType, UnlockType } from "./game";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "./game";

export default function Shop() {
  return (
    <div className="w-1/3 h-full bg-orange-500 outline-2 outline-black">
      <Upgrades />
      <Unlocks />
    </div>
  );
}

export function Upgrades() {
  const gameContext = useContext(GameContext);
  return (
    <div className="flex flex-col w-full h-2/3">
      {gameContext.upgradeList.map((upgrade, index) => {
        return <Upgrade upgrade={upgrade} index={index} key={index} />;
      })}
    </div>
  );
}

export function Upgrade(props: { upgrade: UpgradeType; index: number }) {
  const [cost, setCost] = useState<number>(0);
  const [buy, setBuy] = useState<Boolean>(false);
  const gameContext = useContext(GameContext);
  const handleClick = () => {
    let upgrades = gameContext.upgradeList;
    upgrades[props.index].Amount += 1;
    gameContext.setUpgradeList(upgrades);
    gameContext.dispatch({ type: "BUY", buy: cost });
  };
  useEffect(() => {
    setCost(
      Math.round(props.upgrade.initCost * Math.pow(1.2, props.upgrade.Amount))
    );
  }, [props.upgrade.Amount, props.upgrade.initCost]);

  useEffect(() => {
    if (gameContext.state.sips >= cost) {
      setBuy(true);
    } else {
      setBuy(false);
    }
  }, [cost, gameContext.state.sips]);

  return (
    <div className="grid grid-flow-col grid-cols-5 w-full h-12 border-2 border-black items-center pl-1 justify-start">
      <div className="w-10 h-10 bg-black"></div>
      <div className="col-span-2">{props.upgrade.Title}</div>
      <div className="">{props.upgrade.Amount}</div>
      {buy ? (
        <button
          className="w-full h-full border-2 border-black hover:cursor-pointer"
          onClick={handleClick}
        >
          {cost}
          {" sips"}
        </button>
      ) : (
        <button className="w-full h-full border-2 border-black opacity-50">
          {cost}
          {" sips"}
        </button>
      )}
    </div>
  );
}

export function Unlocks() {
  const gameContext = useContext(GameContext);
  return (
    <div className="flex flex-row flex-wrap w-full h-1/3 content-start">
      {gameContext.unlockList.map((unlock, index) => {
        if (unlock.Trigger) {
          return <Unlock unlock={unlock} index={index} key={index} />;
        }
      })}
    </div>
  );
}

export function Unlock(props: { unlock: UnlockType; index: number }) {
  return <div className="w-11 h-11 bg-white border-2 border-black"></div>;
}
