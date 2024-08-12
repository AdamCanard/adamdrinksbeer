"use client";
import {
  createContext,
  SetStateAction,
  useEffect,
  useReducer,
  useState,
} from "react";
import Battleground from "./battleground";
import Clicker from "./clicker";
import Shop from "./shop";
import { useFrameTime } from "./gameloop";

//setup Main context for Game
interface GameContextType {
  state: Istate;
  dispatch: React.Dispatch<Action>;
  upgradeList: UpgradeType[];
  setUpgradeList: React.Dispatch<SetStateAction<UpgradeType[]>>;
  unlockList: UnlockType[];
  setUnlockList: React.Dispatch<SetStateAction<UnlockType[]>>;
}

//cast empty object to contexttype
export const GameContext = createContext<GameContextType>(
  {} as GameContextType
);

export interface UpgradeType {
  Title: string;
  Amount: number;
  initCost: number;
  SPS: number;
}
export interface UnlockType {
  Title: string;
  Desc: string;
  Trigger: (int: number) => boolean;
}

export interface Action {
  type: string;
  sps?: number;
  buy?: number;
}

export interface Istate {
  sips: number;
  sps: number;
}

//define reducer for game mechanics
function reducer(state: Istate, action: Action) {
  switch (action.type) {
    //runs on each beer click
    //TODO change 1 to "SIP POWER variable"
    case "CLICK":
      return {
        sips: state.sips + 1,
        sps: state.sps,
      };
    //runs on purchase of item, spends the sips
    case "BUY":
      if (action.buy) {
        return {
          sips: state.sips - action.buy,
          sps: state.sps,
        };
      }
    //run by useEffect connected to game loop, adds SPS to total sips and updates SPS counter
    case "LOOP":
      if (action.sps) {
        return {
          sips: state.sips + action.sps,
          sps: action.sps,
        };
      }

    default:
      return state;
  }
}

//Starting game state
const initState: Istate = { sips: 0, sps: 0 };

export default function Game() {
  const [state, dispatch] = useReducer(reducer, initState);
  const [upgradeList, setUpgradeList] = useState<UpgradeType[]>(UpgradeList);
  const [unlockList, setUnlockList] = useState<UnlockType[]>(UnlockList);
  const frameTime = useFrameTime();

  //main gameloop updates once a second
  useEffect(() => {
    let sps = 0;
    //Counts all upgrades add their SPS together
    for (const upgrade in upgradeList) {
      if (Object.prototype.hasOwnProperty.call(upgradeList, upgrade)) {
        const element = upgradeList[upgrade];
        sps += element.Amount * element.SPS;
      }
    }
    //send SPS to dispatch
    dispatch({ type: "LOOP", sps: sps });
  }, [frameTime, upgradeList]);

  return (
    <div className="flex flex-row w-full h-screen">
      <GameContext.Provider
        value={{
          state,
          dispatch,
          upgradeList,
          setUpgradeList,
          unlockList,
          setUnlockList,
        }}
      >
        <Clicker />
        <Battleground />
        <Shop />
      </GameContext.Provider>
    </div>
  );
}

//move to DB eventually
//Passive upgrades, Contribute to SPS
const UpgradeList: UpgradeType[] = [
  //Every Quantum sip purchased sends a small part of your soul to the quantum realm
  //That segment or your soul will take small sips of your beer for you

  // Unlocks:
  // Fragmented sips
  // Quantam Frat (compounding)
  { Title: "Quantum Sip", Amount: 0, initCost: 10, SPS: 0.1 },
  //Every Friend you buy invites a friend over to your house who will help you drink beers

  // Unlocks:
  // Better Friends (static)
  { Title: "Friend", Amount: 0, initCost: 100, SPS: 1 },

  //Each Drill creates a whole in the can that beer slowly leaks out of

  // Unlocks:
  // Bigger Bits (static)
  { Title: "Drill", Amount: 0, initCost: 1000, SPS: 5 },
];

const UnlockList: UnlockType[] = [
  {
    Title: "Fragmented sips",
    Desc: "Splits all your quantum sips in half, doubling their effectiveness",
    Trigger: (int) => {
      if (int >= 10) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    Title: "Better Friends",
    Desc: "You scold your friends into drinking more, Makes them sip twice as fast",
    Trigger: (int) => {
      if (int >= 10) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    Title: "Bigger Bits",
    Desc: "You order larger drill bits to make bigger holes, doubles the size of holes",
    Trigger: (int) => {
      if (int >= 10) {
        return true;
      } else {
        return false;
      }
    },
  },
];
