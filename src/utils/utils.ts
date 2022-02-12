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
  buttonElement.innerHTML = 'воспроизведение звука';

  const audioElement = document.createElement('audio');
  audioElement.setAttribute('src', `https://rs-lang-react.herokuapp.com/${path}`);

  buttonElement.addEventListener('click', () => {
    audioElement.play();
  });

  wrapperForSoundBtn.append(buttonElement);
  wrapperForSoundBtn.append(audioElement);

  return wrapperForSoundBtn;
}

export function getCorrectImg(path: string): HTMLElement {
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img__container');

  const img = document.createElement('img');
  img.setAttribute('src', `https://rs-lang-react.herokuapp.com/${path}`);

  imgContainer.append(img);

  return imgContainer;
}
