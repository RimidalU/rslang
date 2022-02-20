import { Word } from '../../module/apiInterface';
import { checkPage, getAnswersArray, getRandomNumber } from '../../utils/utils';
import { IWordGame } from './audiocallgame';
import Game from './game';

export default class SprintGame extends Game {
  listOfWords: Word[];

  correctWordNumber: number;

  resulGameListOfWords: IWordGame[];

  constructor(gameName: string, gameDescription: string) {
    super(gameName, gameDescription);
    this.listOfWords = [];
    this.correctWordNumber = 0;
    this.resulGameListOfWords = [];
  }

  // eslint-disable-next-line class-methods-use-this
  initLocalStorage(): void {
    localStorage.setItem('levelForAudioCallGame', '');
    localStorage.setItem('correctWordIndex', '');
  }

  // eslint-disable-next-line class-methods-use-this
  getWordAndTranslate(): HTMLElement {
    const wrapper = document.createElement('div');
    wrapper.classList.add('word-translate');
    const englishWordElem = document.createElement('p');
    englishWordElem.classList.add('word-translate__word');
    const translatehWordElem = document.createElement('p');
    translatehWordElem.classList.add('word-translate__translate');

    const englishWord = this.listOfWords[this.correctWordNumber];
    englishWordElem.innerHTML = englishWord.word;

    const randomTranslate = getRandomNumber(0, 1);
    const randomWordNumber = getRandomNumber(0, this.listOfWords.length - 1);
    const word = this.listOfWords[randomWordNumber];

    if (randomTranslate) {
      translatehWordElem.innerHTML = englishWord.wordTranslate;
    } else {
      translatehWordElem.innerHTML = word.wordTranslate;
    }

    wrapper.append(englishWordElem, translatehWordElem);

    return wrapper;
  }

  getButtonsForAnswer(): HTMLElement {
    const playField = document.createElement('div');
    playField.classList.add('play-field');

    const wrapperForAnswer = document.createElement('div');
    wrapperForAnswer.classList.add('answers-wrapper');

    const correctBtnNumber = getRandomNumber(0, 1);
    const usedVariantWordForBtn: Record<string, unknown> = {};

    const correctWord = this.listOfWords[this.correctWordNumber];

    playField.append(this.getWordAndTranslate());

    for (let i = 0; i < 2; i++) {
      const btn = document.createElement('button');
      btn.classList.add('answer-btn');
      btn.id = `${i + 1}-answer`;
      btn.setAttribute('isCorrect', `${i === correctBtnNumber}`);

      if (i === correctBtnNumber) {
        btn.innerHTML = 'Верно';
        btn.classList.add('correct');
        usedVariantWordForBtn[correctWord.id] = correctWord;
      } else {
        btn.innerHTML = 'Неверно';
        btn.classList.add('incorrect');
        //usedVariantWordForBtn[word.id] = word;
      }

      btn.addEventListener('click', (event: Event) => {
        const button = event.currentTarget as HTMLElement;

        const wordTranslate = document.querySelector('.word-translate__translate') as HTMLElement;

        if (wordTranslate.innerText === this.listOfWords[this.correctWordNumber].wordTranslate) {
          this.resulGameListOfWords = getAnswersArray(
            this.listOfWords,
            this.resulGameListOfWords,
            correctWord.wordTranslate,
            wordTranslate.innerText,
          );
          playField.remove();
          console.log(this.resulGameListOfWords);
        } else {
          this.resulGameListOfWords = getAnswersArray(
            this.listOfWords,
            this.resulGameListOfWords,
            correctWord.wordTranslate,
            wordTranslate.innerText,
          );
          playField.remove();
          console.log(this.resulGameListOfWords);
        }
        this.correctWordNumber++;

        const gameWrapper = document.querySelector('.game') as HTMLElement;
        gameWrapper.append(this.getButtonsForAnswer());
      });

      wrapperForAnswer.append(btn);

      const firstChildBtn = wrapperForAnswer.firstChild as HTMLElement;
      if (firstChildBtn.innerHTML === 'Верно') {
        firstChildBtn.remove();
        wrapperForAnswer.append(firstChildBtn);
      }

      playField.append(wrapperForAnswer);
    }

    return playField;
  }

  // eslint-disable-next-line class-methods-use-this
  playGame(): void {
    if (checkPage('test')) {
      console.log('Действие которое формирует список слов, если игра стартует со страницы учебника');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  startGameBtn(): HTMLElement {
    const startGameBtnContainer = document.createElement('div');
    startGameBtnContainer.classList.add('game__start-game');

    const startBtn = document.createElement('button');
    startBtn.classList.add('game__start-btn');
    startBtn.innerHTML = '<span data-title="ПОЕХАЛИ!">Начать игру</span>';
    startGameBtnContainer.append(startBtn);

    startBtn.addEventListener('click', async () => {
      const choisedLevel = localStorage.getItem('levelForAudioCallGame');
      const gameWrapper = document.querySelector('.game') as HTMLElement;
      const warningText = document.createElement('p');
      warningText.classList.add('game__warning-text');
      warningText.innerText = 'Выберите уровень!';
      const warningTextObjects = document.querySelectorAll('.game__warning-text');
      warningTextObjects.forEach((e) => e.remove());

      if (!choisedLevel) {
        startGameBtnContainer.append(warningText);

        setTimeout(() => {
          warningText.remove();
        }, 2000);
      } else {
        const levelString = localStorage.getItem('levelForAudioCallGame');
        const level: number = levelString ? +levelString : -1;

        for (let i = 0; i < 5; i++) {
          // eslint-disable-next-line no-await-in-loop
          const wordFromApi = await this.getListOfWords(level);
          if (!this.listOfWords.some((e) => e.page === wordFromApi[0].page)) {
            this.listOfWords = this.listOfWords.concat(wordFromApi);
          } else {
            i--;
          }
        }

        console.log(this.listOfWords);

        gameWrapper.innerHTML = '';
        gameWrapper.append(this.getButtonsForAnswer());

        document.querySelector('audio')?.play();
      }
    });

    return startGameBtnContainer;
  }

  renderGame(): HTMLElement {
    this.initLocalStorage();

    const gameWrapper = document.createElement('div');
    gameWrapper.classList.add('game');

    if (checkPage()) {
      console.log('Действие которое формирует список слов, если игра стартует со страницы учебника');
    } else {
      this.initLocalStorage();

      const gameDescriptionElement = this.gameDescriptionElement();
      const levelSelectionElement = this.creteLevelBtns();
      const startBtn = this.startGameBtn();
      gameWrapper.append(gameDescriptionElement, levelSelectionElement, startBtn);
    }

    return gameWrapper;
  }

  // eslint-disable-next-line class-methods-use-this
  gameResult(): HTMLElement {
    console.log('что-то');
  }
}
