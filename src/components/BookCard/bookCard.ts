import BaseComponent from '../BaseComponent/baseComponent';

class BookCard extends BaseComponent {
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

  createDescription() {
    const wordHeader: HTMLHeadElement = document.createElement('h3');
    wordHeader.textContent = this.word;
    wordHeader.style.background = 'black';
    const description = document.createElement('div');
    description.prepend(wordHeader);
    description.classList.add('book-description');
    const temp: string[] = [
      this.textMeaning,
      this.textExample,
      this.transcription,
      this.wordTranslate,
      this.textMeaningTranslate,
      this.textExampleTranslate,
    ];
    temp.forEach((el: string) => {
      const elString: HTMLParagraphElement = document.createElement('p');
      elString.style.color = 'red';
      elString.style.background = 'transparent';
      elString.style.filter = 'none';
      elString.insertAdjacentHTML('afterbegin', el);
      description.append(elString);
    });
    return description;
  }

  render() {
    this.container.innerHTML = '';
    this.container.append();
    this.container.append(this.createDescription());
    this.container.style.background = `url("https://rslang-learn.herokuapp.com/${this.backgroundURL}") center/cover no-repeat`;
    this.container.style.filter = 'grayscale(0.4)';
    return this.container;
  }
}

export default BookCard;
