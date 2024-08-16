import Upgrades from "./upgrades";
import Unlocks from "./unlocks";

export default function Shop() {
  //Right side of the game
  return (
    <div id="border" className="w-1/4 h-full bg-[#bababa] p-2 gap-2">
      <Upgrades />
      <Unlocks />
    </div>
  );
}
