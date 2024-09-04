import Upgrades from "./upgrades";
import Unlocks from "./unlocks";

export default function Shop() {
  //Right side of the game
  return (
    <div id="border" className="w-1/4 h-full">
      <Upgrades />
      <Unlocks />
    </div>
  );
}
