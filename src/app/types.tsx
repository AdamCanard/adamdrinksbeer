import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";

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
  collectionId?: string;
  id?: string;
  Beer: string;
  Brewery?: string;
  Rating?: number;
  By?: string;
  Image?: any;
  Drank: boolean;
}
