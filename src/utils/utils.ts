export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// export function createLevelBtn(pageCount = 1): HTMLElement {
//  const wrapperForLeveleBtns = document.createElement('div');
//  wrapperForLeveleBtns.classList.add('wrapper-level');
//  const gameDescriptionText = document.createElement('p');
//  gameDescriptionText.innerHTML = 'Для начала игры выберите уровень';
//  wrapperForLeveleBtns.append(gameDescriptionText);
//  const containerForBtns = document.createElement('div');
//  containerForBtns.classList.add('level');

//  for (let i = 0; i < 6; i++) {
//    const levelBtn = document.createElement('button');
//    levelBtn.innerHTML = `${i + 1}`;
//    levelBtn.classList.add('level__btn');
//    levelBtn.id = `${i + 1}-level`;

//    levelBtn.addEventListener('click', () => console.log('aaa'));

//    containerForBtns.append(levelBtn);
//  }
//  wrapperForLeveleBtns.append(containerForBtns);
//  return wrapperForLeveleBtns;
// }

export function checkPage(hash: string) {
  const pageHash = window.location.hash.substring(1);
  return pageHash === hash;
}

export function createSoundReproductionBtn(path: string): HTMLElement {
  const wrapperForSoundBtn = document.createElement('div');
  wrapperForSoundBtn.classList.add('sound');

  const buttonElement = document.createElement('button');
  buttonElement.classList.add('sound__btn');
  buttonElement.innerHTML = 'play';

  const audioElement = document.createElement('audio');
  audioElement.setAttribute('src', `https://rs-lang-react.herokuapp.com/${path}`);

  buttonElement.addEventListener('click', () => {
    audioElement.play();
  });

  wrapperForSoundBtn.append(buttonElement);
  wrapperForSoundBtn.append(audioElement);

  return wrapperForSoundBtn;
}
