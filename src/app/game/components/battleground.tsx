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
import CardBack from "../../../../public/Cards/CardBack.png";

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
import { ICard, UpgradeType } from "./gametypes";
import { BJEvaluateHand, Draw, Shuffle } from "./deckfunctions";

export default function Battleground() {
  const gameContext = useContext(GameContext);
  //TODO based on unlocks
  return (
    <div
      id="border"
      className="grid grid-flow-row-dense grid-cols-5 grid-rows-5 w-1/2 h-full bg-[#bababa] "
    >
      <BlackJack />
      {/* {Object.keys(gameContext.upgradeList).map((key, index) => {
        if (gameContext.upgradeList[key].Amount >= 1)
          return GameList(key, index, gameContext.upgradeList[key]);
      })} */}
    </div>
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
  DeckKeys: string[];
  setDeckKeys: React.Dispatch<SetStateAction<string[]>>;
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
  const [DeckKeys, setDeckKeys] = useState<string[]>(Object.keys(Deck));
  const [dealer, setDealer] = useState<string[]>([]);
  const [player, setPlayer] = useState<string[]>([]);
  const [gameTrigger, setGameTrigger] = useState<boolean>(false);
  function StartRound() {
    Shuffle(DeckKeys, setDeckKeys);
    Draw(DeckKeys, setDeckKeys, dealer, setDealer);
    Draw(DeckKeys, setDeckKeys, player, setPlayer);
    Draw(DeckKeys, setDeckKeys, dealer, setDealer);
    Draw(DeckKeys, setDeckKeys, player, setPlayer);
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
          value={{
            DeckKeys,
            setDeckKeys,
            player,
            setPlayer,
            dealer,
            setDealer,
            setGameTrigger,
          }}
        >
          <BlackJackGame />
        </BlackJackContext.Provider>
      )}
    </>
  );
}

export function BlackJackGame() {
  const blackJackContext = useContext(BlackJackContext);
  const [reveal, setReveal] = useState<boolean>(false);

  const EndRound = useCallback(() => {
    //dealer hits on 16 and soft 17
    setReveal(true);
    const dealerHit = () => {
      const evaluatedHand = BJEvaluateHand(blackJackContext.dealer);
      if (evaluatedHand.includes("/")) {
        const soft = +evaluatedHand.split("/")[1];
        if (soft <= 17) {
          return true;
        }
      } else {
        if (+evaluatedHand <= 16) {
          return true;
        }
      }
      return false;
    };

    while (dealerHit()) {
      Draw(
        blackJackContext.DeckKeys,
        blackJackContext.setDeckKeys,
        blackJackContext.dealer,
        blackJackContext.setDealer
      );
    }

    console.log(
      "Dealer: ",
      blackJackContext.dealer,
      BJEvaluateHand(blackJackContext.dealer)
    );
    console.log(
      "Player: ",
      blackJackContext.player,
      BJEvaluateHand(blackJackContext.player)
    );

    // if (blackJackContext.dealer)
    //   if (blackJackContext.DeckKeys.length < 20) {
    //     blackJackContext.setDeckKeys(Object.keys(Deck));
    //   }

    // blackJackContext.setGameTrigger(false);
    // blackJackContext.setPlayer([]);
    // blackJackContext.setDealer([]);
  }, [blackJackContext]);

  useEffect(() => {
    let evaluatedHand = BJEvaluateHand(blackJackContext.player);
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
        <div id="border" className="flex flex-col w-64 h-32 p-2 gap-1">
          <div
            id="border"
            className="flex h-3/6 w-full justify-start items-center p-1 gap-1"
          >
            {blackJackContext.player.map((card: string, index: number) => {
              return (
                <Image
                  src={Deck[card]}
                  height={40}
                  width={32}
                  alt="Playing Card"
                  key={index}
                />
              );
            })}
            <div>{BJEvaluateHand(blackJackContext.player)}</div>
          </div>
          <div className="flex flex-row h-3/6 w-full  gap-2 text-center leading-8">
            <div
              id="border"
              className="w-16 h-full hover:cursor-pointer"
              onClick={() =>
                Draw(
                  blackJackContext.DeckKeys,
                  blackJackContext.setDeckKeys,
                  blackJackContext.player,
                  blackJackContext.setPlayer
                )
              }
            >
              HIT
            </div>
            <div
              id="border"
              className="w-16 h-full hover:cursor-pointer"
              onClick={EndRound}
            >
              STAND
            </div>
            <div
              id="border"
              className="flex w-32 h-full justify-evenly items-center "
            >
              {blackJackContext.dealer.map((card: string, index: number) => {
                if (index === 0 && !reveal) {
                  return (
                    <Image
                      src={CardBack}
                      height={40}
                      width={32}
                      alt="Playing Card"
                      key={index}
                    />
                  );
                } else {
                  return (
                    <Image
                      src={Deck[card]}
                      height={40}
                      width={32}
                      alt="Playing Card"
                      key={index}
                    />
                  );
                }
              })}
              <div>
                {reveal
                  ? BJEvaluateHand(blackJackContext.dealer)
                  : BJEvaluateHand(blackJackContext.dealer.slice(0, 1))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-32 w-32 hover:cursor-pointer text-white bg-black"
          onClick={() => console.log(blackJackContext.DeckKeys)}
        >
          show Deck
        </div>
      </div>
    </>
  );
}
