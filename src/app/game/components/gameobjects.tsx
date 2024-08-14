import { IUnlock, IUpgrade } from "./gametypes";

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
  "Quantum Sip": { Amount: 0, initCost: 10, SPS: 0.1 },
  //Every Friend you buy invites a friend over to your house who will help you drink beers

  // Unlocks:
  // Better Friends x2
  // Best Friends x2
  // Outsourced Friends x2
  Friend: { Amount: 0, initCost: 100, SPS: 1 },
  //Each Drill creates a whole in the can that beer slowly leaks out of

  // Unlocks:
  // Bigger Bits x2
  // More Torque x2
  // Tougher Hands x2
  Drill: { Amount: 0, initCost: 1000, SPS: 7.5 },
  //With new age technology sips can be aquired through printing! Although the market is heavily controlled

  // Unlocks:
  // Sips in Colour x2
  // Bootleg Ink x2
  // Counterfit Sips x2
  "Sip Printer": { Amount: 0, initCost: 11000, SPS: 12 },

  Next2: { Amount: 0, initCost: 120000, SPS: 25 },
};

//find a way to organize unlocks (probably cost)
export const UnlockOBJ: IUnlock = {
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
};
