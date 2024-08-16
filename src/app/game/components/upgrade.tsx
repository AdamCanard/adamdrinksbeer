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
    <div id="border" className="flex flex-row w-full h-18 items-center">
      <Image
        src={
          props.upgrade.Logos[Math.floor(props.upgrade.Amount / 10)] ||
          props.upgrade.Logos[props.upgrade.Logos.length - 1]
        }
        width={64}
        height={64}
        alt="battleground Image"
        onClick={cheat}
      />

      <div className="w-32">{props.title}</div>
      <div className="w-8">{props.upgrade.Amount}</div>
      {/* disables onClick if you cant afford */}
      {buy ? (
        <button
          className="w-16 h-16 bg-[url('../../public/CanBuyBackground.png')] hover:cursor-pointer"
          onClick={handleClick}
        >
          {cost}
          {" sips"}
        </button>
      ) : (
        <button className="w-16 h-16 bg-[url('../../public/CantBuyBackground.png')] hover:cursor-default">
          {cost}
          {" sips"}
        </button>
      )}
    </div>
  );
}
