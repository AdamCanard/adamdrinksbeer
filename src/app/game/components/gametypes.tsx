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
  Cost: number;
  Condition: ICondition;
  Bought: boolean;
}
