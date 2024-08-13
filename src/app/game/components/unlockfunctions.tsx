import { GameContextType } from "./game";
import { IBonus } from "./gametypes";

export function BonusCalculator(bonus: IBonus, gameContext: GameContextType) {
  //if bonus effects upgrades

  if (Object.keys(gameContext.upgradeList).includes(bonus.key)) {
    let upgrades = gameContext.upgradeList;
    const calculator = Operator(bonus.operator);
    upgrades[bonus.key].SPS = calculator(upgrades[bonus.key].SPS, bonus.value);
    gameContext.setUpgradeList(upgrades);
  } else if (Object.keys(gameContext.state).includes(bonus.key)) {
    switch (bonus.key) {
      case "sipPower":
        gameContext.dispatch({ type: "POWER", power: bonus.value });
      default:
        break;
    }
  }
}

export function Operator(operator: string) {
  switch (operator) {
    case "*":
      return (a: number, b: number) => {
        return a * b;
      };
    case "+":
      return (a: number, b: number) => {
        return a + b;
      };
    default:
      return (a: number, b: number) => {
        return a;
      };
  }
}
