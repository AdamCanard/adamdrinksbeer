import { useContext } from "react";
import { GameContext } from "./game";
import Quantum1 from "../../../../public/QuantumFrames/QuantumFrame 1.png";
import Quantum2 from "../../../../public/QuantumFrames/QuantumFrame 2.png";
import Quantum3 from "../../../../public/QuantumFrames/QuantumFrame 3.png";
import Quantum4 from "../../../../public/QuantumFrames/QuantumFrame 4.png";
import Quantum5 from "../../../../public/QuantumFrames/QuantumFrame 5.png";
import Quantum6 from "../../../../public/QuantumFrames/QuantumFrame 6.png";
import Quantum7 from "../../../../public/QuantumFrames/QuantumFrame 7.png";
import Quantum8 from "../../../../public/QuantumFrames/QuantumFrame 8.png";
import Quantum9 from "../../../../public/QuantumFrames/QuantumFrame 9.png";
import Quantum10 from "../../../../public/QuantumFrames/QuantumFrame 10.png";

import Image from "next/image";
import { UpgradeType } from "./gametypes";

export default function Battleground() {
  const gameContext = useContext(GameContext);
  //TODO based on unlocks
  return (
    <div className="grid grid-flow-row-dense grid-cols-10 grid-rows-10 w-1/2 h-full bg-blue-500 outline-2 outline-black">
      {Object.keys(gameContext.upgradeList).map((key, index) => {
        if (gameContext.upgradeList[key].Amount >= 1)
          return GameList(key, index, gameContext.upgradeList[key]);
      })}
    </div>
  );
}

export interface IGame {
  [key: string]: JSX.Element;
}

function GameList(key: string, index: number, upgrade: UpgradeType) {
  switch (key) {
    case "Quantum Sip":
      return <QuantumSip upgrade={upgrade} key={index} />;
    default:
      break;
  }
}

const QuantumSipFrames = [
  Quantum1,
  Quantum2,
  Quantum3,
  Quantum4,
  Quantum5,
  Quantum6,
  Quantum7,
  Quantum8,
  Quantum9,
  Quantum10,
];

export function QuantumSip(props: { upgrade: UpgradeType }) {
  let QuantumFrame = Math.floor((props.upgrade.Amount / 10) * 2);
  if (QuantumFrame === 0) {
    QuantumFrame++;
  } else if (QuantumFrame >= 11) {
    //Final stage of Quantum Game
    QuantumFrame = 10;
  }
  return (
    <Image
      src={QuantumSipFrames[QuantumFrame - 1]}
      width={256}
      height={256}
      alt="battleground Image"
      className="border-2 border-black col-span-2 row-span-2"
    />
  );
}
