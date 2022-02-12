/* eslint-disable class-methods-use-this */
import { checkPage, getRandomNumber } from '../../utils/utils';
import Game from './game';
import { IWords } from './interfacesForGame';

export default class AudioCallGame extends Game {
  listOfWords: IWords[];

  constructor(gameName: string, gameDescription: string) {
    super(gameName, gameDescription);
    this.listOfWords = [];
  }

  getButtonsForAnswer(): HTMLElement {
    const wrapper = document.createElement('div');
    wrapper.classList.add('answers-wrapper');
    const correctWordNumber = getRandomNumber(0, 3);

    for (let i = 0; i < 4; i++) {
      const randomWordNumber = getRandomNumber(0, this.listOfWords.length - 1);
      const word = this.listOfWords[randomWordNumber];
      const btn = document.createElement('button');
      btn.classList.add('answer-btn');
      btn.id = `${i + 1}-answer`;
      btn.innerHTML = word.wordTranslate;
      btn.setAttribute('isCorrect', `${i === correctWordNumber}`);

      btn.addEventListener('click', (event: Event) => {
        const button = event.currentTarget as HTMLElement;
        const answer = button.getAttribute('isCorrect');

        if (answer === 'true') {
          button.classList.add('correct');
          console.log('пометить слово как угаданное');
        } else {
          button.classList.add('incorrect');
          console.log('пометить слово как не угаданное');
        }
      });

      wrapper.append(btn);
    }

    return wrapper;
  }

  startGameBtn(): HTMLElement {
    const startBtn = document.createElement('button');
    startBtn.classList.add('start-game');
    startBtn.innerText = 'Начать игру';

    startBtn.addEventListener('click', () => {
      const gameWrapper = document.querySelector('.game') as HTMLElement;
      gameWrapper.innerHTML = '';

      gameWrapper.append(this.getButtonsForAnswer());
    });

    return startBtn;
  }

  // eslint-disable-next-line class-methods-use-this
  nextWord(): void {
    const button = document.createElement('div');
    button.classList.add('next-word');

    button.addEventListener('click', () => {});
  }

  renderGame(): HTMLElement {
    if (checkPage('test')) {
      console.log('Действие которое формирует список слов, если игра стартует со страницы учебника');
    }
    const gameWrapper = document.createElement('div');
    gameWrapper.classList.add('game');

    const gameDescriptionElement = this.gameDescriptionElement();
    gameWrapper.append(gameDescriptionElement);
    const levelSelectionElement = this.creteLevelBtns();
    gameWrapper.append(levelSelectionElement);
    const startBtn = this.startGameBtn();
    gameWrapper.append(startBtn);

    this.listOfWords = this.getListOfWords(20);

    const buttonsForAnswers = this.getButtonsForAnswer();

    console.log(this.listOfWords);

    return gameWrapper;
  }

  // eslint-disable-next-line class-methods-use-this
  gameResult(): void {
    console.log('что-то');
  }
}
