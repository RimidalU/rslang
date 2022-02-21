/* eslint-disable no-console */
import { Word } from '../../module/apiInterface';
import { checkPage, createSoundReproductionBtn, getAnswersArray, getRandomNumber } from '../../utils/utils';
import Game from './game';
import { IWordGame } from './interface-game';

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
    localStorage.setItem('levelForGame', '');
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
      }

      btn.addEventListener('click', (event: Event) => {
        const button = event.currentTarget as HTMLElement;
        const answer = button.getAttribute('isCorrect');

        const audio = document.createElement('audio');
        playField.append(audio);

        const wordTranslate = document.querySelector('.word-translate__translate') as HTMLElement;

        const resultAfterClick = wordTranslate.innerText === this.listOfWords[this.correctWordNumber].wordTranslate;
        if (resultAfterClick.toString() === answer) {
          this.resulGameListOfWords = getAnswersArray(
            this.listOfWords,
            this.resulGameListOfWords,
            correctWord.wordTranslate,
            correctWord.wordTranslate,
          );

          audio.src = './assets/sound/correct-sound.mp3';
        } else {
          this.resulGameListOfWords = getAnswersArray(this.listOfWords, this.resulGameListOfWords, correctWord.wordTranslate, '');

          audio.src = './assets/sound/incorrect-sound.mp3';
        }
        this.correctWordNumber++;
        playField.remove();

        const gameWrapper = document.querySelector('.game') as HTMLElement;
        if (this.correctWordNumber !== this.listOfWords.length) {
          gameWrapper.append(this.getButtonsForAnswer());
        } else {
          gameWrapper.append(this.gameResult());
        }
        audio.setAttribute('autoplay', '');

        setTimeout(() => {
          audio.play();
        }, 200);
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

  startGameBtn(): HTMLElement {
    const startGameBtnContainer = document.createElement('div');
    startGameBtnContainer.classList.add('game__start-game');

    const startBtn = document.createElement('button');
    startBtn.classList.add('game__start-btn');
    startBtn.innerHTML = '<span data-title="ПОЕХАЛИ!">Начать игру</span>';
    startGameBtnContainer.append(startBtn);

    startBtn.addEventListener('click', async () => {
      const choisedLevel = localStorage.getItem('levelForGame');
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
        startGameBtnContainer.innerHTML = `<div class="load">
        <hr/><hr/><hr/><hr/>
      </div>`;
        const levelString = localStorage.getItem('levelForGame');
        const level: number = levelString ? +levelString : -1;

        for (let i = 0; i < 10; i++) {
          // eslint-disable-next-line no-await-in-loop
          const wordFromApi = await this.getListOfWords(level);
          if (!this.listOfWords.some((e) => e.page === wordFromApi[0].page)) {
            this.listOfWords = this.listOfWords.concat(wordFromApi);
          } else {
            i--;
          }
        }

        gameWrapper.innerHTML = '';

        const timer = document.createElement('div');
        timer.classList.add('timer');
        let counter = 60;
        timer.innerText = `${counter}`;

        const timerFunction = setInterval(() => {
          counter--;
          timer.innerText = `${counter}`;
          gameWrapper.prepend(timer);

          if (counter === 0) {
            gameWrapper.innerHTML = '';
            clearInterval(timerFunction);
            gameWrapper.append(this.gameResult());
          }
        }, 1000);

        gameWrapper.append(timer, this.getButtonsForAnswer());
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

  gameResult(): HTMLElement {
    const gameResultContainer = document.createElement('div');
    gameResultContainer.classList.add('game-result');
    const header = document.createElement('h2');
    header.innerText = `Результаты игры:
    Количество слов участвовавших в игре: ${this.resulGameListOfWords.length}`;

    const correctContainer = document.createElement('div');
    correctContainer.classList.add('game-result__container');
    correctContainer.innerHTML = '<h3>Выбрано верно:</h3>';
    const wordsResultArr = this.resulGameListOfWords;

    const incorrectContainer = document.createElement('div');
    incorrectContainer.classList.add('game-result__container');
    incorrectContainer.innerHTML = '<h3>Выбрано неверно:</h3>';

    wordsResultArr.forEach((e): void => {
      let sound: HTMLElement;
      const infoContainer = document.createElement('div');
      infoContainer.classList.add('result');
      const wordContainer = document.createElement('p');
      const transcriptionContainer = document.createElement('p');
      const wordTranslateContainer = document.createElement('p');

      if (e.result === true) {
        wordContainer.innerText = e.word;
        transcriptionContainer.innerText = e.transcription;
        wordTranslateContainer.innerText = e.wordTranslate;
        sound = createSoundReproductionBtn(e.audio);
        sound.classList.add('result__sound');
        infoContainer.append(wordContainer, transcriptionContainer, wordTranslateContainer, sound);
        correctContainer.append(infoContainer);
      } else {
        wordContainer.innerText = e.word;
        transcriptionContainer.innerText = e.transcription;
        wordTranslateContainer.innerText = e.wordTranslate;
        sound = createSoundReproductionBtn(e.audio);
        sound.classList.add('result-sound');
        infoContainer.append(wordContainer, transcriptionContainer, wordTranslateContainer, sound);
        incorrectContainer.append(infoContainer);
      }
    });

    gameResultContainer.append(header, correctContainer, incorrectContainer);

    return gameResultContainer;
  }
}
