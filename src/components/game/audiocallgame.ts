/* eslint-disable class-methods-use-this */
import { Word } from '../../module/apiInterface';
import { checkPage, createSoundReproductionBtn, getCorrectImg, getRandomNumber } from '../../utils/utils';
import Game from './game';

export default class AudioCallGame extends Game {
  listOfWords: Word[];

  correctWordNumber: number;

  constructor(gameName: string, gameDescription: string) {
    super(gameName, gameDescription);
    this.listOfWords = [];
    this.correctWordNumber = 0;
  }

  initLocalStorage(): void {
    localStorage.setItem('levelForAudioCallGame', '');
    localStorage.setItem('correctWordIndex', '');
  }

  getButtonsForAnswer(): HTMLElement {
    this.initLocalStorage();

    const playField = document.createElement('div');
    playField.classList.add('play-field');

    const wrapperForAnswer = document.createElement('div');
    wrapperForAnswer.classList.add('answers-wrapper');
    const correctBtnNumber = getRandomNumber(0, 3);

    let soundPath = '';
    let soundReproductionBtn: HTMLElement;

    const usedVariantWordForBtn: Record<string, unknown> = {};

    for (let i = 0; i < 4; i++) {
      const randomWordNumber = getRandomNumber(0, this.listOfWords.length - 1);
      const word = this.listOfWords[randomWordNumber];
      const correctWord = this.listOfWords[this.correctWordNumber];

      if (!usedVariantWordForBtn[word.id] && word.wordTranslate !== correctWord.wordTranslate) {
        const btn = document.createElement('button');
        btn.classList.add('answer-btn');
        btn.id = `${i + 1}-answer`;
        btn.setAttribute('isCorrect', `${i === correctBtnNumber}`);

        if (i === correctBtnNumber) {
          btn.innerHTML = correctWord.wordTranslate;
          soundPath = correctWord.audio;

          soundReproductionBtn = createSoundReproductionBtn(soundPath);

          localStorage.setItem('correctWordIndex', `${this.correctWordNumber}`);
          playField.append(soundReproductionBtn);
          usedVariantWordForBtn[correctWord.id] = correctWord;
        } else {
          btn.innerHTML = word.wordTranslate;
          usedVariantWordForBtn[word.id] = word;
        }

        btn.addEventListener('click', (event: Event) => {
          const button = event.currentTarget as HTMLElement;
          const answer = button.getAttribute('isCorrect');

          const index = Number(localStorage.getItem('correctWordIndex'));
          const correctImgPath = this.listOfWords[index].image;

          if (answer === 'true') {
            button.classList.add('correct');
            console.log('пометить слово как угаданное');
            wrapperForAnswer.insertAdjacentElement('beforebegin', getCorrectImg(correctImgPath));
          } else {
            button.classList.add('incorrect');
            console.log('пометить слово как не угаданное');
            wrapperForAnswer.insertAdjacentElement('beforebegin', getCorrectImg(correctImgPath));
          }

          if (this.correctWordNumber === 19) {
            playField.append(this.gameResult());
          }
        });

        wrapperForAnswer.append(btn);
      } else {
        i--;
      }
    }

    playField.append(wrapperForAnswer);

    return playField;
  }

  startGameBtn(): HTMLElement {
    const startGameBtnContainer = document.createElement('div');
    startGameBtnContainer.classList.add('start-game__container');

    const startBtn = document.createElement('button');
    startBtn.classList.add('start-game__btn');
    startBtn.innerText = 'Начать игру';
    startGameBtnContainer.append(startBtn);

    startBtn.addEventListener('click', async () => {
      const choisedLevel = localStorage.getItem('levelForAudioCallGame');
      const gameWrapper = document.querySelector('.game') as HTMLElement;

      if (!choisedLevel) {
        const warningText = document.createElement('p');
        warningText.classList.add('start-game__warning-text');
        warningText.innerText = 'Выберите уровень!';
        startGameBtnContainer.append(warningText);

        setTimeout(() => {
          warningText.remove();
        }, 2000);
      } else {
        console.log('Уровень выбран');
        const levelString = localStorage.getItem('levelForAudioCallGame');
        const level: number = levelString ? +levelString : -1;
        this.listOfWords = await this.getListOfWords(level);

        gameWrapper.innerHTML = '';
        gameWrapper.append(this.getButtonsForAnswer());
        const nextWordBtn = this.nextWord();
        gameWrapper.append(nextWordBtn);

        document.querySelector('audio')?.play();
      }
    });

    return startGameBtnContainer;
  }

  // eslint-disable-next-line class-methods-use-this
  nextWord(): HTMLElement {
    const nextWordBtn = document.createElement('button');
    nextWordBtn.classList.add('next-word');
    nextWordBtn.innerText = 'Дальше →';

    nextWordBtn.addEventListener('click', () => {
      const gameWrapper = document.querySelector('.game') as HTMLElement;
      gameWrapper.innerHTML = '';
      gameWrapper.append(this.getButtonsForAnswer());

      if (this.correctWordNumber !== 19) {
        this.correctWordNumber++;
        gameWrapper.append(nextWordBtn);
      }

      document.querySelector('audio')?.play();
    });

    return nextWordBtn;
  }

  renderGame(): HTMLElement {
    const gameWrapper = document.createElement('div');
    gameWrapper.classList.add('game');

    if (checkPage()) {
      console.log('Действие которое формирует список слов, если игра стартует со страницы учебника');
    } else {
      this.initLocalStorage();

      const gameDescriptionElement = this.gameDescriptionElement();
      gameWrapper.append(gameDescriptionElement);
      const levelSelectionElement = this.creteLevelBtns();
      gameWrapper.append(levelSelectionElement);
      const startBtn = this.startGameBtn();
      gameWrapper.append(startBtn);
    }

    return gameWrapper;
  }

  gameResult(): HTMLElement {
    const playField = document.querySelector('.play-field') as HTMLElement;
    playField.innerHTML = '';

    const gameResultContainer = document.createElement('div');
    gameResultContainer.classList.add('game-result');

    gameResultContainer.innerText = 'ffffff';

    return gameResultContainer;
  }
}
