import { SetStateAction } from "react";

export function Shuffle(
  Deck: string[],
  DeckSetter: React.Dispatch<SetStateAction<string[]>>
) {
  let newDeck = Deck;
  let currentIndex = newDeck.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newDeck[currentIndex], newDeck[randomIndex]] = [
      newDeck[randomIndex],
      newDeck[currentIndex],
    ];
  }
  DeckSetter(newDeck);
}
export function Draw(
  Deck: string[],
  DeckSet: React.Dispatch<SetStateAction<string[]>>,
  Hand: string[],
  HandSet: React.Dispatch<SetStateAction<string[]>>
) {
  let newDeck = Deck;
  let draw = newDeck.splice(0, 1);
  Hand.push(draw[0]);
  HandSet(Hand);
  DeckSet(newDeck);
}

export function BJEvaluateHand(Hand: string[]) {
  let value = 0;
  let ace = false;

  for (let i = 0; i < Hand.length; i++) {
    const element = Hand[i];
    let temp = element.split(":")[0];

    if (temp === "J" || temp === "Q" || temp === "K") {
      value += 10;
    } else if (temp === "A") {
      value += 1;
      ace = true;
    } else {
      value += +temp;
    }
  }

  if (ace) {
    if (value + 10 > 21) {
      return value + "";
    } else {
      return value + "/" + (value + 10);
    }
  } else {
    return value + "";
  }
}

export function BJFinalHand(Hand: string[]) {
  let value = 0;
  let ace = false;

  for (let i = 0; i < Hand.length; i++) {
    const element = Hand[i];
    let temp = element.split(":")[0];

    if (temp === "J" || temp === "Q" || temp === "K") {
      value += 10;
    } else if (temp === "A") {
      value += 1;
      ace = true;
    } else {
      value += +temp;
    }
  }

  if (ace) {
    if (value + 10 > 21) {
      return value + "";
    } else {
      return value + 10;
    }
  } else {
    return value + "";
  }
}
