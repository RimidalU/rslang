import BaseComponent from '../BaseComponent/baseComponent';

class BookCard extends BaseComponent {
  private bookCardInner: HTMLDivElement = document.createElement('div');

  private bookCardBack: HTMLDivElement = document.createElement('div');

  private word: string;

  private textMeaning: string;

  private textExample: string;

  private transcription: string;

  private wordTranslate: string;

  private textMeaningTranslate: string;

  private textExampleTranslate: string;

  private backgroundURL: string;

  constructor(
    tagName: string,
    className: string,
    word: string,
    textMeaning: string,
    textExample: string,
    transcription: string,
    wordTranslate: string,
    textMeaningTranslate: string,
    textExampleTranslate: string,
    backgroundURL: string,
  ) {
    super(tagName, className);
    this.word = word;
    this.textMeaning = textMeaning;
    this.textExample = textExample;
    this.transcription = transcription;
    this.wordTranslate = wordTranslate;
    this.textMeaningTranslate = textMeaningTranslate;
    this.textExampleTranslate = textExampleTranslate;
    this.backgroundURL = backgroundURL;
  }

  createInnerView() {
    this.bookCardInner.classList.add('book-card-inner');
    const bookCardFront: HTMLDivElement = document.createElement('div');
    bookCardFront.classList.add('book-card-front');
    const wordHeader: HTMLHeadElement = document.createElement('h3');
    wordHeader.textContent = this.word;
    wordHeader.classList.add('front-text');
    const trans: HTMLParagraphElement = document.createElement('p');
    trans.textContent = this.transcription;
    trans.classList.add('front-text');
    bookCardFront.prepend(wordHeader);
    bookCardFront.append(trans);
    this.bookCardInner.prepend(bookCardFront);
    this.bookCardInner.style.background = `url("https://rslang-learn.herokuapp.com/${this.backgroundURL}") center/cover no-repeat`;
    return this.bookCardInner;
  }

  createDescription() {
    this.bookCardBack.classList.add('book-card-back');
    const temp: string[] = [this.textMeaning, this.textExample, this.wordTranslate, this.textMeaningTranslate, this.textExampleTranslate];
    temp.forEach((el: string) => {
      const elString: HTMLParagraphElement = document.createElement('p');
      elString.classList.add('desc-text');
      if (el === this.textMeaning || el === this.textExample) {
        elString.classList.add('en-text');
      }
      if (el === this.wordTranslate) {
        elString.classList.add('translated');
      }
      elString.style.background = 'transparent';
      elString.insertAdjacentHTML('afterbegin', el);
      this.bookCardBack.insertAdjacentElement('beforeend', elString);
    });
    this.bookCardInner.append(this.bookCardBack);
    return this.bookCardInner;
  }

  render() {
    this.container.innerHTML = '';
    this.container.prepend(this.createInnerView());
    this.container.append(this.createDescription());
    return this.container;
  }
}

export default BookCard;
