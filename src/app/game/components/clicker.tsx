import Beer from "./beer";
import SipDisplay from "./sipdisplay";

export default function Clicker() {
  //left side of Game
  return (
    <div className=" flex flex-col w-1/3 h-full bg-pink-500 outline-2 outline-black">
      <SipDisplay />
      <Beer />
    </div>
  );
}
