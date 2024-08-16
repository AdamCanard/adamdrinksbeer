import TipsoFrame1 from "../../../../public/TipsoFrames/TipsoMeter 1.png";
import TipsoFrame2 from "../../../../public/TipsoFrames/TipsoMeter 2.png";
import TipsoFrame3 from "../../../../public/TipsoFrames/TipsoMeter 3.png";
import TipsoFrame4 from "../../../../public/TipsoFrames/TipsoMeter 4.png";
import TipsoFrame5 from "../../../../public/TipsoFrames/TipsoMeter 5.png";
import TipsoFrame6 from "../../../../public/TipsoFrames/TipsoMeter 6.png";
import TipsoFrame7 from "../../../../public/TipsoFrames/TipsoMeter 7.png";
import TipsoFrame8 from "../../../../public/TipsoFrames/TipsoMeter 8.png";
import TipsoFrame9 from "../../../../public/TipsoFrames/TipsoMeter 9.png";
import TipsoFrame10 from "../../../../public/TipsoFrames/TipsoMeter 10.png";
import TipsoFrame11 from "../../../../public/TipsoFrames/TipsoMeter 11.png";
import TipsoFrame12 from "../../../../public/TipsoFrames/TipsoMeter 12.png";
import TipsoFrame13 from "../../../../public/TipsoFrames/TipsoMeter 13.png";
import TipsoFrame14 from "../../../../public/TipsoFrames/TipsoMeter 14.png";
import TipsoFrame15 from "../../../../public/TipsoFrames/TipsoMeter 15.png";
import TipsoFrame16 from "../../../../public/TipsoFrames/TipsoMeter 16.png";
import TipsoFrame17 from "../../../../public/TipsoFrames/TipsoMeter 17.png";
import TipsoFrame18 from "../../../../public/TipsoFrames/TipsoMeter 18.png";
import TipsoFrame19 from "../../../../public/TipsoFrames/TipsoMeter 19.png";
import TipsoFrame20 from "../../../../public/TipsoFrames/TipsoMeter 20.png";
import TipsoFrame21 from "../../../../public/TipsoFrames/TipsoMeter 21.png";
import TipsoTitle from "../../../../public/TipsoTitle.png";
import { GameContext } from "./game";
import { useContext } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

const TipsoMeterFrames: StaticImageData[] = [
  TipsoFrame1,
  TipsoFrame2,
  TipsoFrame3,
  TipsoFrame4,
  TipsoFrame5,
  TipsoFrame6,
  TipsoFrame7,
  TipsoFrame8,
  TipsoFrame9,
  TipsoFrame10,
  TipsoFrame11,
  TipsoFrame12,
  TipsoFrame13,
  TipsoFrame14,
  TipsoFrame15,
  TipsoFrame16,
  TipsoFrame17,
  TipsoFrame18,
  TipsoFrame19,
  TipsoFrame20,
  TipsoFrame21,
];

export function TipsoMeter() {
  const gameContext = useContext(GameContext);
  return (
    <div id="border" className="flex flex-col justify-end w-full h-26">
      <Image src={TipsoTitle} width={360} height={16} alt="TipsoTitle" />
      <Image
        src={TipsoMeterFrames[Math.floor(gameContext.state.tipsoLevel / 5)]}
        width={360}
        height={80}
        alt="TipsoMeter"
      />
    </div>
  );
}
