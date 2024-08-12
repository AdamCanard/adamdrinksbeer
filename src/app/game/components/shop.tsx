import Image from "next/image";

export default function Shop() {
  return (
    <div className="w-1/3 h-full bg-orange-500 outline-2 outline-black">
      <Upgrades />
      <Unlocks />
    </div>
  );
}

interface Upgrade {
  Title: string;
  Amount: number;
}

//move to DB eventually
//Passive upgrades, Contribute to SPS
const UpgradeList: Upgrade[] = [
  //Every Quantum sip purchased sends a small part of your soul to the quantum realm
  //That segment or your soul will take small sips of your beer for you

  // Unlocks:
  // Quantam Frat (compounding)
  { Title: "Quantum Sip", Amount: 0 },
  //Every Friend you buy invites a friend over to your house who will help you drink beers

  // Unlocks:
  // Better Friends (static)
  { Title: "Friend", Amount: 0 },

  //Each Drill creates a whole in the can that beer slowly leaks out of

  // Unlocks:
  // Bigger Bits (static)
  { Title: "Drill", Amount: 0 },
];

export function Upgrades() {
  return (
    <div className="flex flex-col w-full h-full">
      {UpgradeList.map((upgrade, index) => {
        return <Upgrade upgrade={upgrade} key={index} />;
      })}
    </div>
  );
}

export function Upgrade(props: { upgrade: Upgrade }) {
  return (
    <div className="flex flex-row w-full h-12 border-2 border-black items-center pl-1 justify-start">
      <div className="w-10 h-10 bg-black"></div>
      <div className="pl-8">{props.upgrade.Title}</div>
      <div className="ml-auto pr-3">{props.upgrade.Amount}</div>
    </div>
  );
}

export function Unlocks() {
  return <></>;
}
