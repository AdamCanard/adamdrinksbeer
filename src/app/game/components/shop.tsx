import Upgrades from "./upgrades";
import Unlocks from "./unlocks";

export default function Shop() {
  //Right side of the game
  return (
    <div className="w-1/4 h-full bg-orange-500 outline-2 outline-black">
      <Upgrades />
      <Unlocks />
    </div>
  );
}
