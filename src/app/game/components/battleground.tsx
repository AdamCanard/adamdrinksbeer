import {
  createContext,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { GameContext } from "./game";

import { Deck } from "./gameobjects";

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

import Friend1 from "../../../../public/Friends Frames/FriendsFrame 1.png";
import Friend2 from "../../../../public/Friends Frames/FriendsFrame 2.png";
import Friend3 from "../../../../public/Friends Frames/FriendsFrame 3.png";

import Image from "next/image";
import { UpgradeType } from "./gametypes";

export default function Battleground() {
  const gameContext = useContext(GameContext);
  //TODO based on unlocks
  return (
    <BlackJack />
    // <div
    //   id="border"
    //   className="grid grid-flow-row-dense grid-cols-5 grid-rows-5 w-1/2 h-full bg-[#bababa] "
    // >

    //   {Object.keys(gameContext.upgradeList).map((key, index) => {
    //     if (gameContext.upgradeList[key].Amount >= 1)
    //       return GameList(key, index, gameContext.upgradeList[key]);
    //   })}
    // </div>
  );
}

function GameList(key: string, index: number, upgrade: UpgradeType) {
  switch (key) {
    case "Quantum Sip":
      return <QuantumSip upgrade={upgrade} key={index} />;
    case "Friend":
      return <Friend upgrade={upgrade} key={index} />;
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
      width={128}
      height={128}
      alt="battleground Image"
      className=" col-span-1 row-span-1"
    />
  );
}

const FriendFrames = [Friend1, Friend2, Friend3];

export function Friend(props: { upgrade: UpgradeType }) {
  let FriendFrame = props.upgrade.Amount;
  if (FriendFrame >= 4) {
    FriendFrame = 3;
  }

  return (
    <Image
      src={FriendFrames[FriendFrame - 1]}
      width={256}
      height={128}
      alt="battleground Image"
      className="col-span-2 row-span-1"
    />
  );
}

export interface IBlackJackContext {
  Deck: string[];
  player: string[];
  setPlayer: React.Dispatch<SetStateAction<string[]>>;
  dealer: string[];
  setDealer: React.Dispatch<SetStateAction<string[]>>;
  setGameTrigger: React.Dispatch<SetStateAction<boolean>>;
}

//cast empty object to contexttype
export const BlackJackContext = createContext<IBlackJackContext>(
  {} as IBlackJackContext
);

export function BlackJack() {
  //create state for deck
  const [dealer, setDealer] = useState<string[]>([]);
  const [player, setPlayer] = useState<string[]>([]);
  const [gameTrigger, setGameTrigger] = useState<boolean>(false);
  function StartRound() {
    Shuffle(Deck);
    Draw(Deck, dealer, setDealer);
    Draw(Deck, player, setPlayer);
    Draw(Deck, dealer, setDealer);
    Draw(Deck, player, setPlayer);
    setGameTrigger(true);
  }
  return (
    <>
      {!gameTrigger ? (
        <>
          <div
            className="h-32 w-32 hover:cursor-pointer text-white bg-red-500"
            onClick={StartRound}
          >
            StartGame
          </div>
        </>
      ) : (
        <BlackJackContext.Provider
          value={{ Deck, player, setPlayer, dealer, setDealer, setGameTrigger }}
        >
          <BlackJackGame />
        </BlackJackContext.Provider>
      )}
    </>
  );
}

export function BlackJackGame() {
  const blackJackContext = useContext(BlackJackContext);

  function EvaluateHand(Hand: string[]) {
    let value = 0;
    let ace = false;
    for (let i = 0; i < Hand.length; i++) {
      const element = Hand[i];

      let temp = element.split(":")[0];

      if (temp === "J" || temp === "Q" || temp === "K") {
        value += 10;
      } else if (temp === "A") {
        value += 1;
        ace = true;
      } else {
        value += +temp;
      }
    }

    if (ace) {
      if (value + 10 > 21) {
        return value + "";
      } else {
        return value + "/" + (value + 10);
      }
    } else {
      return value + "";
    }
  }

  const EndRound = useCallback(() => {
    //show win screen
    console.log(EvaluateHand(blackJackContext.dealer));
    console.log(EvaluateHand(blackJackContext.player));

    blackJackContext.setPlayer([]);
    blackJackContext.setDealer([]);

    blackJackContext.setGameTrigger(false);
  }, [blackJackContext]);

  useEffect(() => {
    let evaluatedHand = EvaluateHand(blackJackContext.player);
    let handvalue;

    if (evaluatedHand.includes("/")) {
      handvalue = 0;
    } else {
      handvalue = +evaluatedHand;
    }
    if (handvalue > 21) {
      EndRound();
    }
  }, [EndRound, blackJackContext.player]);
  return (
    <>
      <div className="flex flex-row w-full">
        <div
          className="h-32 w-32 hover:cursor-pointer text-white bg-black"
          onClick={() => console.log(blackJackContext.Deck)}
        >
          show Deck
        </div>
        <div
          className="h-32 w-32 hover:cursor-pointer text-white bg-red-500"
          onClick={() => {
            console.log("dealer", blackJackContext.dealer);
            console.log("player", blackJackContext.player);
          }}
        >
          {EvaluateHand(blackJackContext.dealer) + "\n"}
          {EvaluateHand(blackJackContext.player)}
        </div>

        <div
          className="h-32 w-32 hover:cursor-pointer text-white bg-green-500"
          onClick={() =>
            Draw(
              blackJackContext.Deck,
              blackJackContext.player,
              blackJackContext.setPlayer
            )
          }
        >
          Draw Player
        </div>

        <div className="flex flex- justify-center items-center gap-4 text-white ">
          <div
            className="w-14 h-14 hover:cursor-pointer bg-black rounded-full text-center"
            onClick={() =>
              Draw(
                blackJackContext.Deck,
                blackJackContext.player,
                blackJackContext.setPlayer
              )
            }
          >
            Hit
          </div>
          <div
            className="w-14 h-14 hover:cursor-pointer bg-black rounded-full text-center"
            //double stakes
            onClick={() =>
              Draw(
                blackJackContext.Deck,
                blackJackContext.player,
                blackJackContext.setPlayer
              )
            }
          >
            Double
          </div>
          <div
            className="w-14 h-14 hover:cursor-pointer bg-black rounded-full text-center"
            onClick={EndRound}
          >
            Stand
          </div>
          <div
            className="w-14 h-14 hover:cursor-pointer bg-black rounded-full text-center"
            //onClick={Split}
          >
            Split
          </div>
        </div>
      </div>
    </>
  );
}

//update to take in state var of deck instead
function Shuffle(Deck: string[]) {
  let currentIndex = Deck.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [Deck[currentIndex], Deck[randomIndex]] = [
      Deck[randomIndex],
      Deck[currentIndex],
    ];
  }
}
function Draw(
  Deck: string[],
  Hand: string[],
  HandSet: React.Dispatch<SetStateAction<string[]>>
) {
  //TODO if deck empty dont draw
  let draw = Deck.splice(0, 1);
  Hand.push(draw[0]);
  HandSet(Hand);
}
