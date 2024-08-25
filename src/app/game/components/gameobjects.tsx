import { IUnlock, IUpgrade } from "./gametypes";
import { StaticImageData } from "next/image";

import BeerDice from "../../../../public/BeerDice.png";
import BeerPong from "../../../../public/BeerPong.png";

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

export const Deck: string[] = [
  "A:S",
  "2:S",
  "3:S",
  "4:S",
  "5:S",
  "6:S",
  "7:S",
  "8:S",
  "9:S",
  "10:S",
  "J:S",
  "Q:S",
  "K:S",
  "A:H",
  "2:H",
  "3:H",
  "4:H",
  "5:H",
  "6:H",
  "7:H",
  "8:H",
  "9:H",
  "10:H",
  "J:H",
  "Q:H",
  "K:H",
  "A:C",
  "2:C",
  "3:C",
  "4:C",
  "5:C",
  "6:C",
  "7:C",
  "8:C",
  "9:C",
  "10:C",
  "J:C",
  "Q:C",
  "K:C",
  "A:D",
  "2:D",
  "3:D",
  "4:D",
  "5:D",
  "6:D",
  "7:D",
  "8:D",
  "9:D",
  "10:D",
  "J:D",
  "Q:D",
  "K:D",
];

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
