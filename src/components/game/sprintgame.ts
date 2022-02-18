// import { checkPage } from '../../utils/utils';
// import Game from './game';
// import { IWords } from './interfacesForGame';

// export default class SprintGame extends Game {
//  // eslint-disable-next-line class-methods-use-this
//  getButtonsForAnswer(arrayOfWords: IWords[], correctWordId: string): HTMLElement {
//    const wrapper = document.createElement('div');
//    wrapper.classList.add('answers-wrapper');

//    for (let i = 0; i < arrayOfWords.length; i++) {
//      const word = arrayOfWords[i];
//      const btn = document.createElement('div');
//      btn.classList.add('answer-btn');
//      btn.innerHTML = word.wordTranslate;
//      btn.setAttribute('isCorrect', `${word.id === correctWordId}`);
//      wrapper.append(btn);
//    }

//    return wrapper;
//  }

//  playGame(): void {
//    if (checkPage('test')) {
//      console.log('Действие которое формирует список слов, если игра стартует со страницы учебника');
//    }
//    this.levelSelection();
//  }

//  // eslint-disable-next-line class-methods-use-this
//  gameResult(): void {
//    console.log('что-то');
//  }
// }
