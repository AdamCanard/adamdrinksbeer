import { useContext } from "react";
import { GameContext } from "./game";

import Upgrade from "./upgrade";

export default function Upgrades() {
  const gameContext = useContext(GameContext);
  //Converts upgrade list to Upgrade components
  return (
    <div id="border-s" className="flex flex-col w-full h-2/3 gap-1">
      {Object.keys(gameContext.upgradeList).map((key, index) => {
        return (
          <Upgrade
            title={key}
            upgrade={gameContext.upgradeList[key]}
            key={index}
          />
        );
      })}
    </div>
  );
}
