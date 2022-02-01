import { WordInterface } from '../../interfaces/word-interface';

const wordsURL = 'https://rslang-learn.herokuapp.com/words';
export const getWords = async (group: number | string, page: number | string) => {
  const resp:Response = await fetch(`${wordsURL}/?group=${group}&page=${page}`);
  const data: Array<WordInterface> = await resp.json();
  return data;
};
export const getWord = async (id: string) => {
  const resp:Response = await fetch(`${wordsURL}/${id}`);
  const data: WordInterface = await resp.json();
  return data;
};
