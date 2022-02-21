import apiResource from '../../module/api';
import { Word } from '../../module/apiInterface';
// eslint-disable-next-line import/no-cycle
import { getRandomNumber } from '../../utils/utils';

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

    wrapperStartGame.append(gameNameElement);
    wrapperStartGame.append(gameDescriptionElement);

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
        const levelBtns = document.querySelectorAll('.level__btn');

        levelBtns.forEach((e) => {
          e.classList.remove('active-level');
        });
        localStorage.setItem('levelForGame', `${i}`);
        levelBtn.classList.add('active-level');
      });
    }
    wrapper.append(containerForBtns);
    return wrapper;
  }

  // eslint-disable-next-line class-methods-use-this
  async getListOfWords(level: number, count = 20): Promise<Word[]> {
    // if (checkPage()) {
    //  console.log('Действие которое формирует список слов, если игра стартует со страницы учебника');
    // }
    const shuffleWords: Word[] = [];

    const randomPage = getRandomNumber(0, 29);

    const wordsForGame = await apiResource.getWords(randomPage, level);

    for (let i = 0; i < count; i++) {
      const randomNumber: number = getRandomNumber(0, count - 1);
      const randomWord = wordsForGame[randomNumber];
      if (!shuffleWords.some((el) => el.id === randomWord.id)) {
        shuffleWords.push(wordsForGame[randomNumber]);
      } else {
        i--;
      }
    }

    localStorage.setItem('shuffleWords', JSON.stringify(shuffleWords));
    return shuffleWords;
  }

  abstract getButtonsForAnswer(arrOfButtons: [], correctWordId: string): HTMLElement;

  abstract startGameBtn(): HTMLElement;
  abstract renderGame(): void;
  abstract gameResult(): HTMLElement;
}
