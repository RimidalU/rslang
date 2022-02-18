/* eslint-disable import/no-cycle */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/export */
/* eslint-disable no-console */
import Page from '../../components/Page';
import './textbook.scss';
import BookCard from '../../components/BookCard/bookCard';
import newApi from '../../module/api';
import { Word } from '../../module/apiInterface';
import pageInput from '../../components/Select/inputs';
import sectionInput from '../../components/Select/inputs2';

class TextbookPage extends Page {
  static component = {
    textbookTitle: `
      <div class="textbook-container"> 
        <div class="search-panel">
        </div>       
      </div>`,
  };

  public pageInput = document.querySelector('.page-input');

  static bookPage = localStorage.bookPage ? localStorage.bookPage : 0;

  static bookSection = localStorage.categoryPage ? localStorage.categoryPage : 0;

  static isRep = false;

  static inputPage: HTMLInputElement = pageInput;

  static inputCategory: HTMLInputElement = sectionInput;

  static wordsArr = newApi.getWords(TextbookPage.bookPage, TextbookPage.bookSection);

  static changeArr() {
    TextbookPage.wordsArr = newApi.getWords(TextbookPage.bookPage, TextbookPage.bookSection);
  }

  render() {
    this.container.innerHTML = '';
    this.container.style.background = 'radial-gradient(circle, rgba(221,244,255,1) 39%, rgba(255,113,113,1) 90%)';
    const cardContainer = document.createElement('div');
    cardContainer.innerHTML = '';
    cardContainer.classList.add('card-container');
    this.container.innerHTML += TextbookPage.component.textbookTitle;
    const pageInfo = document.createElement('p');
    pageInfo.textContent = `Страница ${TextbookPage.bookPage + 1}`;
    const sectionInfo = document.createElement('p');
    sectionInfo.textContent = `Раздел ${TextbookPage.bookSection + 1}`;
    this.container.prepend(TextbookPage.inputPage);
    this.container.prepend(TextbookPage.inputCategory);
    this.container.prepend(sectionInfo);
    this.container.prepend(pageInfo);
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
      cardArr.forEach((el) => {
        cardContainer.append(el.render());
      });
      this.container.append(cardContainer);
    });

    return this.container;
  }
}

TextbookPage.inputPage.addEventListener('change', () => {
  TextbookPage.bookPage = +TextbookPage.inputPage.value - 1;
  localStorage.bookPage = TextbookPage.bookPage;
  TextbookPage.isRep = true;
  TextbookPage.changeArr();
});

TextbookPage.inputCategory.addEventListener('change', () => {
  TextbookPage.bookSection = +TextbookPage.inputCategory.value - 1;
  localStorage.categoryPage = TextbookPage.bookSection;
  TextbookPage.isRep = true;
  TextbookPage.changeArr();
});

export default TextbookPage;
