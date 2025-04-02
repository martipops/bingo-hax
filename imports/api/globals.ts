import { reactive, watch } from "vue";

export type WinConditionType = boolean[];
export type WinConditionsType = WinConditionType[];
export interface BingoCardType {
  winner: boolean;
  winCondition: WinConditionType | null;
  numbers: string[];
}
export type BingoCardsType = BingoCardType[];
export type SelectedNumbersType = string[];

const winConditions = reactive([] as WinConditionsType);
const selectedNumbers = reactive([] as SelectedNumbersType);
const bingoCards = reactive([] as BingoCardsType);

const newBingoCard = () => ({
  winner: false,
  winCondition: null,
  numbers: Array(25).fill('') as string[],
})

const addBingoCard = () => {
  const newCard = newBingoCard();
  bingoCards.push(newCard);
}

const determineWinner = (card: BingoCardType) => {
  for (const condition of winConditions) {
    let flag = true;
    for (let i = 0; i < condition.length; i++) {
      const val = condition[i];
      if (val === false) {
        continue;
      }
      if (!selectedNumbers.includes(card.numbers[i])) {
        flag = false;
        break;
      }
    }
    if (flag) {
      console.log("Winner found!", card.numbers);
      card.winner = true;
      card.winCondition = condition;
      return true;
    }
  }
  card.winner = false;
  card.winCondition = null;
}

export function globalsSingleton() {
  return { winConditions, selectedNumbers, bingoCards, newBingoCard, addBingoCard, determineWinner }
}
