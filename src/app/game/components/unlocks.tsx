import { useContext } from "react";
import { GameContext } from "./game";

import { Unlock } from "./unlock";

export default function Unlocks() {
  const gameContext = useContext(GameContext);
  //not fully implemented
  return (
    <div
      id="border-s"
      className="grid grid-cols-6 grid-rows-4 grid-flow-row-dense w-full h-1/3 justify-center items-center"
    >
      {Object.keys(gameContext.unlockList).map((key, index) => {
        //for every unlock in unlock list

        //grab the condition Object
        //which contains "Upgrade Name" : "Upgrade Amount"
        const condition = Object.entries(
          gameContext.unlockList[key].Condition
        )[0];
        //condition is formatted as ["Upgrade Name","Upgrade Amount"]
        let unlockKey = condition[0];
        let unlockAmount = condition[1];

        //if unlock refers to an upgrade
        if (Object.keys(gameContext.upgradeList).includes(unlockKey)) {
          //if condition object is satisfied,and the unlock hasnt been bought render button
          if (
            gameContext.upgradeList[unlockKey].Amount >= unlockAmount &&
            !gameContext.unlockList[key].Bought
          ) {
            return (
              <Unlock
                title={key}
                unlock={gameContext.unlockList[key]}
                index={index}
                key={index}
              />
            );
          }
          //if unlock refers to a state variable
        } else if (Object.keys(gameContext.state).includes(unlockKey)) {
          //needed switch case for reducer object
          switch (unlockKey) {
            case "beer":
              if (
                gameContext.state.beer >= unlockAmount &&
                !gameContext.unlockList[key].Bought
              ) {
                return (
                  <Unlock
                    title={key}
                    unlock={gameContext.unlockList[key]}
                    index={index}
                    key={index}
                  />
                );
              }
              break;
            case "totalSips":
              if (
                gameContext.state.totalSips >= unlockAmount &&
                !gameContext.unlockList[key].Bought
              ) {
                return (
                  <Unlock
                    title={key}
                    unlock={gameContext.unlockList[key]}
                    index={index}
                    key={index}
                  />
                );
              }
              break;
            case "sipsTaken":
              if (
                gameContext.state.sipsTaken >= unlockAmount &&
                !gameContext.unlockList[key].Bought
              ) {
                return (
                  <Unlock
                    title={key}
                    unlock={gameContext.unlockList[key]}
                    index={index}
                    key={index}
                  />
                );
              }
              break;
            case "sips":
              if (
                gameContext.state.sips >= unlockAmount &&
                !gameContext.unlockList[key].Bought
              ) {
                return (
                  <Unlock
                    title={key}
                    unlock={gameContext.unlockList[key]}
                    index={index}
                    key={index}
                  />
                );
              }
              break;
            case "sipPower":
              if (
                gameContext.state.sipPower >= unlockAmount &&
                !gameContext.unlockList[key].Bought
              ) {
                return (
                  <Unlock
                    title={key}
                    unlock={gameContext.unlockList[key]}
                    index={index}
                    key={index}
                  />
                );
              }
              break;
            case "sps":
              if (
                gameContext.state.sps >= unlockAmount &&
                !gameContext.unlockList[key].Bought
              ) {
                return (
                  <Unlock
                    title={key}
                    unlock={gameContext.unlockList[key]}
                    index={index}
                    key={index}
                  />
                );
              }
              break;
            default:
              break;
          }
        }
      })}
    </div>
  );
}
