import Beer from "./beer";
import SipDisplay from "./sipdisplay";

export default function Clicker() {
  //left side of Game
  return (
    <div
      id="border"
      className="flex flex-col w-1/4 h-full bg-[#bababa] p-2 gap-2"
    >
      <SipDisplay />
      <Beer />
    </div>
  );
}
