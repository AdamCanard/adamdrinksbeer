import { IUnlock, IUpgrade } from "./gametypes";

//move to DB eventually
//Passive upgrades, Contribute to SPS
export const UpgradeOBJ: IUpgrade = {
  //Every Quantum sip purchased sends a small part of your soul to the quantum realm
  //That segment or your soul will take small sips of your beer for you

  // Unlocks:
  // Fragmented sips
  // Quantam Frat (compounding)
  "Quantum Sip": { Amount: 0, initCost: 10, SPS: 0.1 },
  //Every Friend you buy invites a friend over to your house who will help you drink beers

  // Unlocks:
  // Better Friends (static)
  Friend: { Amount: 0, initCost: 100, SPS: 1 },
  //Each Drill creates a whole in the can that beer slowly leaks out of

  // Unlocks:
  // Bigger Bits (static)
  Drill: { Amount: 0, initCost: 1000, SPS: 7.5 },

  Next: { Amount: 0, initCost: 11000, SPS: 12 },

  Next2: { Amount: 0, initCost: 120000, SPS: 25 },
};

export const UnlockOBJ: IUnlock = {
  "Bigger Sips": {
    Desc: "Aquire a taste for beer, You are now willing to take bigger sips doubling your Sip Power",
    Cost: 250,
    Condition: { sipsTaken: 100 },
    Bought: false,
    Bonus: { key: "sipPower", operator: "*", value: 2 },
  },
  "Huge Sips": {
    Desc: "You start to crave beer, You double your Sip Power to get even more sips",
    Cost: 500,
    Condition: { sipsTaken: 250 },
    Bought: false,
    Bonus: { key: "sipPower", operator: "*", value: 2 },
  },
  Gulp: {
    Desc: "You arent able to function without Beer anymore, You switch to gulps to satisfy your need",
    Cost: 1200,
    Condition: { sipsTaken: 500 },
    Bought: false,
    Bonus: { key: "sipPower", operator: "*", value: 3 },
  },

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
  "Better Friends": {
    Desc: "You scold your friends into drinking more, Makes them sip twice as fast",
    Cost: 1000,
    Condition: { Friend: 10 },
    Bought: false,
    Bonus: { key: "Friend", operator: "*", value: 2 },
  },
  "Bigger Bits": {
    Desc: "You order larger drill bits to make bigger holes, doubles the size of holes",
    Cost: 12000,
    Condition: { Drill: 10 },
    Bought: false,
    Bonus: { key: "Drill", operator: "*", value: 2 },
  },
};
