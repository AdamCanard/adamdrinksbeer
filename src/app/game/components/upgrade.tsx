import { useContext, useEffect, useState } from "react";
import { UpgradeType } from "./gametypes";
import { GameContext } from "./game";
import Image from "next/image";

export default function Upgrade(props: {
  title: string;
  upgrade: UpgradeType;
}) {
  const [cost, setCost] = useState<number>(0);
  const [buy, setBuy] = useState<boolean>(false);
  const gameContext = useContext(GameContext);

  //Handles purchase of upgrades
  const handleClick = () => {
    let upgrades = gameContext.upgradeList;
    upgrades[props.title].Amount += 1;
    gameContext.setUpgradeList(upgrades);
    gameContext.dispatch({ type: "BUY", buy: cost });
  };

  //Calculates the cost of the next upgrade
  useEffect(() => {
    setCost(
      Math.round(props.upgrade.initCost * Math.pow(1.15, props.upgrade.Amount))
    );
  }, [props.upgrade.Amount, props.upgrade.initCost]);

  //Checks if you can afford this upgrade
  useEffect(() => {
    if (gameContext.state.sips >= cost) {
      setBuy(true);
    } else {
      setBuy(false);
    }
  }, [cost, gameContext.state.sips]);

  const cheat = () => {
    let upgrades = gameContext.upgradeList;
    upgrades[props.title].Amount += 1;
    gameContext.setUpgradeList(upgrades);
  };

  return (
    <div
      id="border-s"
      className="grid w-full h-16 grid-cols-5 grid-rows-1 justify-center items-center text-center"
    >
      <Image
        src={props.upgrade.Icon}
        width={64}
        height={64}
        alt="battleground Image"
        onClick={cheat}
        className="col-span-1 w-full "
      />

      <div className="col-span-2 w-full ">{props.title}</div>
      <div className="col-span-1 w-full">{props.upgrade.Amount}</div>
      {/* disables onClick if you cant afford */}
      <div id="border-np" className="col-span-1 h-full leading-5 ">
        {buy ? (
          <button
            id="border-g"
            className="hover:cursor-pointer w-full h-full"
            onClick={handleClick}
          >
            {cost}
            {" sips"}
          </button>
        ) : (
          <button id="border-r" className="hover:cursor-default w-full h-full">
            {cost}
            {" sips"}
          </button>
        )}
      </div>
    </div>
  );
}
