import { StaticImageData } from "next/image";

export interface Action {
  type: string;
  sps?: number;
  buy?: number;
  power?: number;
  wager?: number;
  win?: number;
}

export enum Intoxication {
  sober,
  tipsy,
  drunk,
}

export interface Istate {
  sips: number;
  tipsoLevel: number;
  drunkness: Intoxication;
  sipsTaken: number;
  totalSips: number;
  sipPower: number;
  sps: number;
  beer: number;
}

export interface IUpgrade {
  [key: string]: UpgradeType;
}

export interface ICard {
  [key: string]: StaticImageData;
}

export interface UpgradeType {
  Amount: number;
  initCost: number;
  SPS: number;
  Logos: StaticImageData[];
}

export interface IUnlock {
  [key: string]: UnlockType;
}

export interface ICondition {
  [key: string]: number;
}

export interface IBonus {
  key: string;
  operator: string;
  value: number;
}

export interface UnlockType {
  Desc: string;
  Cost: number;
  Condition: ICondition;
  Bought: boolean;
  Bonus: IBonus;
}
