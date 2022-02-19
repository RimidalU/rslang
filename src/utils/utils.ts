// eslint-disable-next-line import/no-cycle
import { IWordGame } from '../components/Game/audiocallgame';
import { Word } from '../module/apiInterface';

export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function checkPage(hash = 'textbook-page') {
  const pageHash = window.location.hash.substring(1);

  return pageHash === hash;
}

export function createSoundReproductionBtn(path: string): HTMLElement {
  const wrapperForSoundBtn = document.createElement('div');
  wrapperForSoundBtn.classList.add('sound');

  const buttonElement = document.createElement('button');
  buttonElement.classList.add('sound__btn');

  const imgForBtn = document.createElement('img');
  imgForBtn.classList.add('sound__img');
  imgForBtn.src = './assets/svg/volume.svg';

  const audioElement = document.createElement('audio');
  audioElement.setAttribute('src', `https://rs-lang-react.herokuapp.com/${path}`);

  buttonElement.addEventListener('click', () => {
    audioElement.play();
  });

  buttonElement.append(imgForBtn);
  wrapperForSoundBtn.append(buttonElement);
  wrapperForSoundBtn.append(audioElement);

  return wrapperForSoundBtn;
}

export function getCorrectImg(path: string): HTMLElement {
  if (document.querySelector('.play-field')?.contains(document.querySelector('.img__container'))) {
    document.querySelector('.img__container')?.remove();
  }

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img__container');

  const img = document.createElement('img');
  img.setAttribute('src', `https://rs-lang-react.herokuapp.com/${path}`);

  imgContainer.append(img);

  return imgContainer;
}

export function getAnswersArray(
  listOfWords: Word[],
  resulGameListOfWords: IWordGame[],
  correctAnswer: string,
  answer: string,
): IWordGame[] {
  const index: number = listOfWords.findIndex((e) => e.wordTranslate === correctAnswer);
  const answerWord: IWordGame = listOfWords[index];
  answerWord.result = answerWord.wordTranslate === answer;
  resulGameListOfWords.push(answerWord);
  return resulGameListOfWords;
}
