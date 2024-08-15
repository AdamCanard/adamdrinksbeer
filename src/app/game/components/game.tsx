"use client";
import {
  createContext,
  SetStateAction,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import Battleground from "./battleground";
import Clicker from "./clicker";
import Shop from "./shop";
import { useFrameTime } from "./gameloop";
import { Action, Istate, IUnlock, IUpgrade } from "./gametypes";
import { UnlockOBJ, UpgradeOBJ } from "./gameobjects";
import { reducer } from "./reducer";

//setup Main context for Game
export interface GameContextType {
  state: Istate;
  dispatch: React.Dispatch<Action>;
  upgradeList: IUpgrade;
  setUpgradeList: React.Dispatch<SetStateAction<IUpgrade>>;
  unlockList: IUnlock;
  setUnlockList: React.Dispatch<SetStateAction<IUnlock>>;
}

//cast empty object to contexttype
export const GameContext = createContext<GameContextType>(
  {} as GameContextType
);

//Starting game state
const initState: Istate = {
  sips: 0,
  sipPower: 1,
  totalSips: 0,
  tipsoLevel: 0,
  sipsTaken: 0,
  sps: 0,
  beer: 0,
};

export default function Game() {
  const [state, dispatch] = useReducer(reducer, initState);
  const [upgradeList, setUpgradeList] = useState<IUpgrade>(UpgradeOBJ);
  const [unlockList, setUnlockList] = useState<IUnlock>(UnlockOBJ);
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

  useEffect(() => {
    let beerSipTotal = Math.pow(1000, 1 + state.beer / 10);
    if (beerSipTotal <= state.totalSips) {
      dispatch({ type: "BEER" });
    }
  }, [state.beer, state.totalSips]);

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
