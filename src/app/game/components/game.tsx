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

interface GameContextType {
  state: Istate;
  dispatch: React.Dispatch<Action>;
}

//cast empty object to contexttype
export const GameContext = createContext<GameContextType>(
  {} as GameContextType
);

interface Action {
  type: string;
  sps?: number;
}

interface Istate {
  sips: number;
  sps: number;
}

function reducer(state: Istate, action: Action) {
  switch (action.type) {
    case "CLICK":
      return {
        sips: state.sips + 1,
        sps: state.sps,
      };
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

const initState: Istate = { sips: 0, sps: 0 };

export default function Game() {
  const [state, dispatch] = useReducer(reducer, initState);
  const frameTime = useFrameTime();

  //main gameloop updates once a second
  useEffect(() => {
    let sps = 0;
    dispatch({ type: "LOOP", sps: sps });
  }, [frameTime]);

  return (
    <div className="flex flex-row w-full h-screen">
      <GameContext.Provider value={{ state, dispatch }}>
        <Clicker />
        <Battleground />
        <Shop />
      </GameContext.Provider>
    </div>
  );
}
