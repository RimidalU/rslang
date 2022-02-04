/* eslint-disable no-console */
import { WordInterface } from '../../interfaces/word-interface';

const wordsURL = 'https://rslang-learn.herokuapp.com/words';
export const getWords = async (group: number, page: number) => {
  const resp:Response = await fetch(`https://rslang-learn.herokuapp.com/words?group=${group}&page=${page}`);
  const data = await resp.json();
  return data;
};
export const getWord = async (id: string) => {
  const resp:Response = await fetch(`${wordsURL}/${id}`);
  const data: WordInterface = await resp.json();
  return data;
};
const rootDiv:HTMLDivElement = document.createElement('div');
rootDiv.innerHTML = JSON.stringify(getWords(2, 3));
document.body.append(rootDiv);
