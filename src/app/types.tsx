export interface Drank {
  Beer: string;
  Brewery: string;
  Rating: number;
}

export interface Drink {
  Beer: string;
  Brewery: string;
  By: string;
}

export interface BeerData {
  id?: string;
  Beer: string;
  Brewery?: string;
  Rating?: number;
  By?: string;
  Drank: boolean;
}
