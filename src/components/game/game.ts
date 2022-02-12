import { getRandomNumber } from '../../utils/utils';
import { IWords } from './interfacesForGame';

export default abstract class Game {
  gameName: string;

  gameDescription: string;

  constructor(gameName: string, gameDescription: string) {
    this.gameName = gameName;
    this.gameDescription = gameDescription;
  }

  gameDescriptionElement(): HTMLElement {
    const wrapperStartGame = document.createElement('div');
    wrapperStartGame.classList.add('game__description-container');

    const gameNameElement = document.createElement('h1');
    gameNameElement.classList.add('game__name');
    gameNameElement.innerHTML = this.gameName;

    const gameDescriptionElement = document.createElement('h3');
    gameDescriptionElement.classList.add('game__description');
    gameDescriptionElement.innerHTML = this.gameDescription;

    // const levelBtns: HTMLElement = this.creteLevelBtns();

    wrapperStartGame.append(gameNameElement);
    wrapperStartGame.append(gameDescriptionElement);
    // wrapperStartGame.append(levelBtns);

    return wrapperStartGame;
  }

  // eslint-disable-next-line class-methods-use-this
  creteLevelBtns(): HTMLElement {
    const wrapper = document.createElement('div');
    wrapper.classList.add('game__level-container');
    const gameDescriptionText = document.createElement('p');
    gameDescriptionText.innerHTML = 'Для начала игры выберите уровень';
    wrapper.append(gameDescriptionText);
    const containerForBtns = document.createElement('div');
    containerForBtns.classList.add('level');

    for (let i = 0; i < 6; i++) {
      const levelBtn = document.createElement('button');
      levelBtn.innerHTML = `${i + 1}`;
      levelBtn.classList.add('level__btn');
      levelBtn.id = `${i + 1}-level`;

      containerForBtns.append(levelBtn);

      levelBtn.addEventListener('click', () => {
        localStorage.setItem('levelForAudioCallGame', `${i}`);
      });
    }
    wrapper.append(containerForBtns);
    return wrapper;
  }

  // eslint-disable-next-line class-methods-use-this
  getListOfWords(count = 20): IWords[] {
    // if (checkPage()) {
    //  console.log('Действие которое формирует список слов, если игра стартует со страницы учебника');
    // }
    const shuffleWords: IWords[] = [];

    const words = localStorage.getItem('words');
    if (words) {
      const parsedWords: IWords[] = JSON.parse(words);

      for (let i = 0; i < count; i++) {
        const randomNumber: number = getRandomNumber(0, count - 1);
        const randomWord = parsedWords[randomNumber];
        if (!shuffleWords.some((el) => el.id === randomWord.id)) {
          shuffleWords.push(parsedWords[randomNumber]);
        } else {
          i--;
        }
      }
    }

    localStorage.setItem('shuffleWords', JSON.stringify(shuffleWords));
    return shuffleWords;
  }

  abstract getButtonsForAnswer(arrOfButtons: [], correctWordId: string): HTMLElement;

  abstract startGameBtn(): HTMLElement;
  abstract renderGame(): void;
  abstract gameResult(): void;
}
