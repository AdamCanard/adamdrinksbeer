import {
  ChangeEvent,
  createContext,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import { Deck } from "./gameobjects";
import { BJEvaluateHand, Draw, Shuffle } from "./deckfunctions";
import CardBack from "../../../../public/Cards/CardBack.png";
import { GameContext } from "./game";

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

interface GameInputs {
  game: string;
  wager: number;
}

export function BlackJack() {
  //create state for deck
  const gameContext = useContext(GameContext);
  const [DeckKeys, setDeckKeys] = useState<string[]>(Object.keys(Deck));
  const [dealer, setDealer] = useState<string[]>([]);
  const [player, setPlayer] = useState<string[]>([]);
  const [gameTrigger, setGameTrigger] = useState<boolean>(false);
  const [inputs, setInputs] = useState<GameInputs>({
    game: "blackjack",
    wager: 10,
  });

  function StartRound() {
    Shuffle(DeckKeys, setDeckKeys);
    Draw(DeckKeys, setDeckKeys, dealer, setDealer);
    Draw(DeckKeys, setDeckKeys, player, setPlayer);
    Draw(DeckKeys, setDeckKeys, dealer, setDealer);
    Draw(DeckKeys, setDeckKeys, player, setPlayer);
    setGameTrigger(true);
  }

  const handleClick = () => {
    if (inputs.wager >= 10) {
      if (gameContext.state.sips >= inputs.wager) {
        gameContext.dispatch({ type: "WAGER", wager: inputs.wager });
        StartRound();
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <>
      {!gameTrigger ? (
        <>
          <div
            id="border"
            className="h-32 w-64 flex flex-col justify-start items-center p-2 gap-2"
          >
            <label className="flex justify-between gap-1">
              Game:
              <input
                type="text"
                name="game"
                value={inputs.game}
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label className="flex justify-between gap-1">
              Wager:
              <input
                type="number"
                name="wager"
                value={inputs.wager}
                onChange={(e) => handleChange(e)}
              />
            </label>

            <button
              id="border"
              className="hover:cursor-pointer"
              onClick={handleClick}
            >
              Start Game
            </button>
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
          <BlackJackGame wager={inputs.wager} />
        </BlackJackContext.Provider>
      )}
    </>
  );
}

export function BlackJackGame(props: { wager: number }) {
  const blackJackContext = useContext(BlackJackContext);
  const gameContext = useContext(GameContext);
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

    if (blackJackContext.DeckKeys.length < 20) {
      blackJackContext.setDeckKeys(Object.keys(Deck));
    }

    let playerEvaluatedHand = BJEvaluateHand(blackJackContext.player);
    let playervalue;
    let dealerEvaluatedHand = BJEvaluateHand(blackJackContext.dealer);
    let dealervalue;

    if (playerEvaluatedHand.includes("/")) {
      playervalue = +playerEvaluatedHand.split("/")[1];
    } else {
      playervalue = +playerEvaluatedHand;
    }

    if (dealerEvaluatedHand.includes("/")) {
      dealervalue = +dealerEvaluatedHand.split("/")[1];
    } else {
      dealervalue = +dealerEvaluatedHand;
    }

    //dealer 25
    //player 20

    //WIN
    if (playervalue <= 21 && (playervalue > dealervalue || dealervalue > 21)) {
      console.log("win");
      gameContext.dispatch({ type: "WIN", win: props.wager * 2 });
    } else if (
      //PUSH
      playervalue === dealervalue ||
      (playervalue > 21 && dealervalue > 21)
    ) {
      console.log("push");
      gameContext.dispatch({ type: "WIN", win: props.wager });
    } else {
      console.log("loss");
      //womp womp
    }

    console.log("Dealer: ", dealervalue);
    console.log("Player: ", playervalue);

    blackJackContext.setGameTrigger(false);
    blackJackContext.setPlayer([]);
    blackJackContext.setDealer([]);
  }, [blackJackContext, gameContext, props.wager]);

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
