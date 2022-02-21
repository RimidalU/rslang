import Page from '../../components/Page';
import './textbook.scss';
import BookCard from '../../components/BookCard/bookCard';
import apiResource from '../../module/api';
import { Word } from '../../module/apiInterface';
import pageInput from '../../components/Select/inputs';
import sectionInput from '../../components/Select/inputs2';
import audioLink from '../../components/Select/audiolink';
import sprintLink from '../../components/Select/sprintlink';

class TextbookPage extends Page {
  static component = {
    textbookTitle: `
      <div class="textbook-container">        
      </div>`,
  };

  private cardContainer = document.createElement('div');

  static bookPage = localStorage.bookPage ? localStorage.bookPage : 0;

  static bookSection = localStorage.categoryPage ? localStorage.categoryPage : 0;

  static inputPage: HTMLInputElement = pageInput;

  static inputCategory: HTMLInputElement = sectionInput;

  static audiocallLink = audioLink;

  static sprintgameLink = sprintLink;

  static wordsArr = apiResource.getWords(TextbookPage.bookPage, TextbookPage.bookSection);

  get contr() {
    return this.container;
  }

  static changeArr() {
    TextbookPage.wordsArr = apiResource.getWords(TextbookPage.bookPage, TextbookPage.bookSection);
  } // меняет массив

  render() {
    this.container.innerHTML = '';
    this.container.lastChild?.remove();
    localStorage.removeItem('wordsArray');
    this.container.style.background = '#96BB7C';
    this.container.innerHTML += TextbookPage.component.textbookTitle;
    const pageInfo = document.createElement('p');
    pageInfo.textContent = `Страница ${+TextbookPage.bookPage + 1}`;
    pageInfo.style.padding = '10px';
    const sectionInfo = document.createElement('p');
    sectionInfo.textContent = `Раздел ${+TextbookPage.bookSection + 1}`;
    sectionInfo.style.padding = '10px';
    this.container.prepend(TextbookPage.inputPage);
    this.container.prepend(TextbookPage.inputCategory);
    this.container.prepend(sectionInfo);
    this.container.prepend(pageInfo);
    this.container.append(TextbookPage.audiocallLink);
    this.container.append(TextbookPage.sprintgameLink);
    this.cardContainer.innerHTML = '';
    this.cardContainer.classList.add('card-container');
    const cardArr: Array<BookCard> = [];
    TextbookPage.wordsArr.then((data: Array<Word>) => {
      data.forEach((el: Word) => {
        cardArr.push(
          new BookCard(
            'div',
            'book-card',
            `${el.word}`,
            `${el.textMeaning}`,
            `${el.textExample}`,
            `${el.transcription}`,
            `${el.textMeaningTranslate}`,
            `${el.textExampleTranslate}`,
            `${el.wordTranslate}`,
            `${el.image}`,
          ),
        );
      });
      localStorage.wordsArr = JSON.stringify(data);
      this.cardContainer.innerHTML = '';
      cardArr.forEach((el) => {
        this.cardContainer.append(el.render());
      });
      this.container.append(this.cardContainer);
    });

    TextbookPage.inputPage.addEventListener('change', () => {
      if (+TextbookPage.inputPage.value >= 1 && +TextbookPage.inputPage.value <= 30) {
        TextbookPage.bookPage = +TextbookPage.inputPage.value - 1;
        localStorage.removeItem('bookPage');
        localStorage.bookPage = TextbookPage.bookPage;
        TextbookPage.changeArr();
        this.container = this.render();
      }
    });

    TextbookPage.inputCategory.addEventListener('change', () => {
      if (+TextbookPage.inputCategory.value >= 1 && +TextbookPage.inputCategory.value <= 6) {
        TextbookPage.bookSection = +TextbookPage.inputCategory.value - 1;
        localStorage.removeItem('bookSection');
        localStorage.bookSection = TextbookPage.bookSection;
        TextbookPage.changeArr();
        this.container.innerHTML = '';
        this.container = this.render();
      }
    });

    return this.container;
  }
}

export default TextbookPage;
