import { ICard, IUnlock, IUpgrade } from "./gametypes";
import { StaticImageData } from "next/image";

import BeerDice from "../../../../public/BeerDice.png";
import BeerPong from "../../../../public/BeerPong.png";

import AceS from "../../../../public/Cards/A-S.png";
import TwoS from "../../../../public/Cards/2-S.png";
import ThreeS from "../../../../public/Cards/3-S.png";
import FourS from "../../../../public/Cards/4-S.png";
import FiveS from "../../../../public/Cards/5-S.png";
import SixS from "../../../../public/Cards/6-S.png";
import SevenS from "../../../../public/Cards/7-S.png";
import EightS from "../../../../public/Cards/8-S.png";
import NineS from "../../../../public/Cards/9-S.png";
import TenS from "../../../../public/Cards/10-S.png";
import JackS from "../../../../public/Cards/J-S.png";
import QueenS from "../../../../public/Cards/Q-S.png";
import KingS from "../../../../public/Cards/K-S.png";

import AceC from "../../../../public/Cards/A-C.png";
import TwoC from "../../../../public/Cards/2-C.png";
import ThreeC from "../../../../public/Cards/3-C.png";
import FourC from "../../../../public/Cards/4-C.png";
import FiveC from "../../../../public/Cards/5-C.png";
import SixC from "../../../../public/Cards/6-C.png";
import SevenC from "../../../../public/Cards/7-C.png";
import EightC from "../../../../public/Cards/8-C.png";
import NineC from "../../../../public/Cards/9-C.png";
import TenC from "../../../../public/Cards/10-C.png";
import JackC from "../../../../public/Cards/J-C.png";
import QueenC from "../../../../public/Cards/Q-C.png";
import KingC from "../../../../public/Cards/K-C.png";

import AceH from "../../../../public/Cards/A-H.png";
import TwoH from "../../../../public/Cards/2-H.png";
import ThreeH from "../../../../public/Cards/3-H.png";
import FourH from "../../../../public/Cards/4-H.png";
import FiveH from "../../../../public/Cards/5-H.png";
import SixH from "../../../../public/Cards/6-H.png";
import SevenH from "../../../../public/Cards/7-H.png";
import EightH from "../../../../public/Cards/8-H.png";
import NineH from "../../../../public/Cards/9-H.png";
import TenH from "../../../../public/Cards/10-H.png";
import JackH from "../../../../public/Cards/J-H.png";
import QueenH from "../../../../public/Cards/Q-H.png";
import KingH from "../../../../public/Cards/K-H.png";

import AceD from "../../../../public/Cards/A-D.png";
import TwoD from "../../../../public/Cards/2-D.png";
import ThreeD from "../../../../public/Cards/3-D.png";
import FourD from "../../../../public/Cards/4-D.png";
import FiveD from "../../../../public/Cards/5-D.png";
import SixD from "../../../../public/Cards/6-D.png";
import SevenD from "../../../../public/Cards/7-D.png";
import EightD from "../../../../public/Cards/8-D.png";
import NineD from "../../../../public/Cards/9-D.png";
import TenD from "../../../../public/Cards/10-D.png";
import JackD from "../../../../public/Cards/J-D.png";
import QueenD from "../../../../public/Cards/Q-D.png";
import KingD from "../../../../public/Cards/K-D.png";

import QuantumLogo1 from "../../../../public/QuantumLogoFrames/QuantumLogo1.png";
import QuantumLogo2 from "../../../../public/QuantumLogoFrames/QuantumLogo2.png";
import QuantumLogo3 from "../../../../public/QuantumLogoFrames/QuantumLogo3.png";
import QuantumLogo4 from "../../../../public/QuantumLogoFrames/QuantumLogo4.png";
import QuantumLogo5 from "../../../../public/QuantumLogoFrames/QuantumLogo5.png";
import QuantumLogo6 from "../../../../public/QuantumLogoFrames/QuantumLogo6.png";
import QuantumLogo7 from "../../../../public/QuantumLogoFrames/QuantumLogo7.png";
import QuantumLogo8 from "../../../../public/QuantumLogoFrames/QuantumLogo8.png";

const Empty: StaticImageData[] = [];

const QuantumLogoFrames: StaticImageData[] = [
  QuantumLogo1,
  QuantumLogo2,
  QuantumLogo3,
  QuantumLogo4,
  QuantumLogo5,
  QuantumLogo6,
  QuantumLogo7,
  QuantumLogo8,
];

export const Deck: ICard = {
  "A:S": AceS,
  "2:S": TwoS,
  "3:S": ThreeS,
  "4:S": FourS,
  "5:S": FiveS,
  "6:S": SixS,
  "7:S": SevenS,
  "8:S": EightS,
  "9:S": NineS,
  "10:S": TenS,
  "J:S": JackS,
  "Q:S": QueenS,
  "K:S": KingS,
  "A:H": AceH,
  "2:H": TwoH,
  "3:H": ThreeH,
  "4:H": FourH,
  "5:H": FiveH,
  "6:H": SixH,
  "7:H": SevenH,
  "8:H": EightH,
  "9:H": NineH,
  "10:H": TenH,
  "J:H": JackH,
  "Q:H": QueenH,
  "K:H": KingH,
  "A:C": AceC,
  "2:C": TwoC,
  "3:C": ThreeC,
  "4:C": FourC,
  "5:C": FiveC,
  "6:C": SixC,
  "7:C": SevenC,
  "8:C": EightC,
  "9:C": NineC,
  "10:C": TenC,
  "J:C": JackC,
  "Q:C": QueenC,
  "K:C": KingC,
  "A:D": AceD,
  "2:D": TwoD,
  "3:D": ThreeD,
  "4:D": FourD,
  "5:D": FiveD,
  "6:D": SixD,
  "7:D": SevenD,
  "8:D": EightD,
  "9:D": NineD,
  "10:D": TenD,
  "J:D": JackD,
  "Q:D": QueenD,
  "K:D": KingD,
};

export const Beers: StaticImageData[] = [BeerDice, BeerPong];
//move to DB eventually
//Passive upgrades, Contribute to SPS

export const UpgradeOBJ: IUpgrade = {
  //Every Quantum sip purchased sends a small part of your soul to the quantum realm
  //That segment or your soul will take small sips of your beer for you

  // Unlocks:
  // Fragmented sips x2
  // More Fragmented Sips x2
  // Even More Fragmented Sips x2
  // Quantam Frat (compounding)
  "Quantum Sip": {
    Amount: 0,
    initCost: 10,
    SPS: 0.1,
    Logos: QuantumLogoFrames,
  },
  //Every Friend you buy invites a friend over to your house who will help you drink beers

  // Unlocks:
  // Better Friends x2
  // Best Friends x2
  // Outsourced Friends x2
  Friend: { Amount: 0, initCost: 100, SPS: 1, Logos: Empty },
  //Each Drill creates a whole in the can that beer slowly leaks out of

  // Unlocks:
  // Bigger Bits x2
  // More Torque x2
  // Tougher Hands x2
  Drill: { Amount: 0, initCost: 1000, SPS: 7.5, Logos: Empty },
  //With new age technology sips can be aquired through printing! Although the market is heavily controlled

  // Unlocks:
  // Sips in Colour x2
  // Bootleg Ink x2
  // Counterfit Sips x2
  "Sip Printer": { Amount: 0, initCost: 11000, SPS: 12, Logos: Empty },

  // Unlocks:
  // Sip Fertalizer x2
  // Hydroponic Sips x2
  // Import Sip Seeds x2
  "Sip Farm ": { Amount: 0, initCost: 120000, SPS: 25, Logos: Empty },
};

//find a way to organize unlocks (probably cost)
export const UnlockOBJ: IUnlock = {
  //Beer unlocks
  "Tipso Meter": {
    Desc: "You get an ad for the Tipso Meter! It will give you advantages based on your level of tipsy",
    Cost: 150,
    Condition: { beer: 1 },
    Bought: false,
    Bonus: { key: "unlock", operator: "Tipso Meter", value: 0 },
  },
  Blackjack: {
    Desc: "Your friends are tired of sitting around drinking, they wont invite any more friends until you give them something to do",
    Cost: 200,
    Condition: { Friend: 5 },
    Bought: false,
    Bonus: { key: "unlock", operator: "Blackjack", value: 0 },
  },

  //Sip Unlocks
  "Bigger Sips": {
    Desc: "Aquire a taste for beer, You are now willing to take bigger sips doubling your Sip Power",
    Cost: 100,
    Condition: { sipsTaken: 100 },
    Bought: false,
    Bonus: { key: "sipPower", operator: "*", value: 2 },
  },
  "Huge Sips": {
    Desc: "You start to crave beer, You double your Sip Power to get even more sips",
    Cost: 400,
    Condition: { sipsTaken: 400 },
    Bought: false,
    Bonus: { key: "sipPower", operator: "*", value: 2 },
  },
  Gulp: {
    Desc: "You arent able to function without Beer anymore, You switch to gulps to satisfy your need",
    Cost: 750,
    Condition: { sipsTaken: 1000 },
    Bought: false,
    Bonus: { key: "sipPower", operator: "*", value: 3 },
  },

  //Quantum Sips Unlocks
  "Fragmented Sips": {
    Desc: "Splits all your Quantum sips in half, doubling their effectiveness",
    Cost: 100,
    Condition: { "Quantum Sip": 10 },
    Bought: false,
    Bonus: { key: "Quantum Sip", operator: "*", value: 2 },
  },
  "More Fragmented Sips": {
    Desc: "Splits all your Fragmented sips in half, doubling their effectiveness",
    Cost: 250,
    Condition: { "Quantum Sip": 25 },
    Bought: false,
    Bonus: { key: "Quantum Sip", operator: "*", value: 2 },
  },
  "Even More Fragmented Sips": {
    Desc: "Splits all your Fragmented sips in half, doubling their effectiveness",
    Cost: 500,
    Condition: { "Quantum Sip": 50 },
    Bought: false,
    Bonus: { key: "Quantum Sip", operator: "*", value: 2 },
  },

  //Friend Unlocks
  "Better Friends": {
    Desc: "You scold your friends into drinking more, makes them sip twice as fast",
    Cost: 1000,
    Condition: { Friend: 10 },
    Bought: false,
    Bonus: { key: "Friend", operator: "*", value: 2 },
  },
  "Best Friends": {
    Desc: "You grow more fond of your friends and they become your Best Friends, makes them sip twice as fast",
    Cost: 2500,
    Condition: { Friend: 25 },
    Bought: false,
    Bonus: { key: "Friend", operator: "*", value: 2 },
  },
  "Outsourced Friends": {
    Desc: "You convince your Friends to bring in their friends to sip for them, MLM style. Quadruples sip rate",
    Cost: 12000,
    Condition: { Friend: 50 },
    Bought: false,
    Bonus: { key: "Friend", operator: "*", value: 4 },
  },

  //Drill Unlocks
  "Bigger Bits": {
    Desc: "You order larger drill bits to make bigger holes, doubles the size of holes",
    Cost: 12000,
    Condition: { Drill: 10 },
    Bought: false,
    Bonus: { key: "Drill", operator: "*", value: 2 },
  },
  "More Torque": {
    Desc: "You buy a better drill engine to more effectively drill holes, doubles hole speed",
    Cost: 30000,
    Condition: { Drill: 25 },
    Bought: false,
    Bonus: { key: "Drill", operator: "*", value: 2 },
  },
  "Tougher Hands": {
    Desc: "Your soft hands cant hold the drill anymore, Tougher Hands would double your output",
    Cost: 75000,
    Condition: { Drill: 50 },
    Bought: false,
    Bonus: { key: "Drill", operator: "*", value: 2 },
  },

  //Sip Printer Unlocks
  "Sips in Colour": {
    Desc: "You bite the bullet and but colour ink for your Sip Printer, doubles the value of Printed Sips",
    Cost: 70000,
    Condition: { "Sip Printer": 10 },
    Bought: false,
    Bonus: { key: "Sip Printer", operator: "*", value: 2 },
  },
  "Bootleg Ink": {
    Desc: "Your tired of paying conglomerates artificially inflated prices for ink, you start getting your ink from the dark web doubling your margins",
    Cost: 150000,
    Condition: { "Sip Printer": 25 },
    Bought: false,
    Bonus: { key: "Sip Printer", operator: "*", value: 2 },
  },
  "Counterfit Sips": {
    Desc: "Not wanting to certify your Printed Sips anymore, you skip the process and double your production speed",
    Cost: 300000,
    Condition: { "Sip Printer": 50 },
    Bought: false,
    Bonus: { key: "Sip Printer", operator: "*", value: 2 },
  },

  //Sip Farm Unlocks
  "Sip Fertalizer": {
    Desc: "Buy some Sip Fertalizer to double the fruitfulness of your sip fruits",
    Cost: 200000,
    Condition: { "Sip Farm": 10 },
    Bought: false,
    Bonus: { key: "Sip Farm", operator: "*", value: 2 },
  },
  "Hydroponic Sips": {
    Desc: "Set up Hydroponics for Sip Plant automation, your sips grow twice as fast",
    Cost: 500000,
    Condition: { "Sip Farm": 25 },
    Bought: false,
    Bonus: { key: "Sip Farm", operator: "*", value: 2 },
  },
  "Import Sip Seeds": {
    Desc: "Start Importing exotic Sip Seeds to produce Sip fruits of double value",
    Cost: 800000,
    Condition: { "Sip Farm": 50 },
    Bought: false,
    Bonus: { key: "Sip Farm", operator: "*", value: 2 },
  },
};
