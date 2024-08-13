export interface IUpgrade {
  [key: string]: UpgradeType;
}

export interface UpgradeType {
  Amount: number;
  initCost: number;
  SPS: number;
}

export interface IUnlock {
  [key: string]: UnlockType;
}

export interface ICondition {
  [key: string]: number;
}

export interface UnlockType {
  Desc: string;
  Condition: ICondition;
}

export interface Action {
  type: string;
  sps?: number;
  buy?: number;
}

export interface Istate {
  sips: number;
  sps: number;
}
