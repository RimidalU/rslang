import { checkPage, createLevelBtn, getRandomNumber } from '../utils/utils';
import { IWords } from './interfacesForGame';

export default abstract class Game {
  gameName: string;

  gameDescription: string;

  constructor(gameName: string, gameDescription: string) {
    this.gameName = gameName;
    this.gameDescription = gameDescription;
  }

  levelSelection(): HTMLElement {
    const wrapperStartGame = document.createElement('div');
    wrapperStartGame.classList.add('wrapper-startPageGame');

    const gameNameElement = document.createElement('div');
    gameNameElement.innerHTML = this.gameName;

    const gameDescriptionElement = document.createElement('div');
    gameDescriptionElement.innerHTML = this.gameName;

    const levelBtns: HTMLElement = createLevelBtn();

    wrapperStartGame.append(gameNameElement);
    wrapperStartGame.append(gameDescriptionElement);
    wrapperStartGame.append(levelBtns);

    return wrapperStartGame;
  }

  // eslint-disable-next-line class-methods-use-this
  getListOfWords(count: number): IWords[] {
    if (checkPage('test')) {
      console.log('Действие которое формирует список слов, если игра стартует со страницы учебника');
    }
    const arr: IWords[] = [];

    const words = localStorage.getItem('testArayOfWord');
    if (words) {
      const parsedWords: IWords[] = JSON.parse(words);

      for (let i = 0; i < count; i++) {
        const randomNumber: number = getRandomNumber(0, 600);
        const randomWord = parsedWords[randomNumber];
        if (!arr.some((el) => el.id === randomWord.id)) {
          arr.push(parsedWords[randomNumber]);
        } else {
          i--;
        }
      }
    }
    return arr;
  }

  abstract getButtonsForAnswer(arrOfButtons: [], correctWordId: string): HTMLElement;

  abstract playGame(): void;

  abstract gameResult(): void;
}
