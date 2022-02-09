import { PageIds } from '../../../declarations';
import BaseComponent from '../BaseComponent/baseComponent';
// import { PageIds } from '../../module/app';
import './header.scss';

const menuButton: HTMLElement = document.createElement('div');
menuButton.classList.add('menu');
menuButton.innerHTML = `<svg viewBox="0 0 64 48" fill="green">
    <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
    <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
    <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
</svg> `;
const buttons = [
  {
    id: PageIds.mainPage,
    text: 'RSLang',
  },
  {
    id: PageIds.textbookPage,
    text: 'textbook',
  },
  {
    id: PageIds.audiocallPage,
    text: 'audiocall',
  },
  {
    id: PageIds.sprintPage,
    text: 'sprint',
  },
  {
    id: PageIds.statsPage,
    text: 'stats',
  },
  {
    id: PageIds.settingsPage,
    text: 'settings',
  },
  {
    id: PageIds.errorPage,
    text: '404',
  },
];

class Header extends BaseComponent {
  renderPageButtons() {
    const pageButtons = document.createElement('div');
    pageButtons.classList.add('header');
    buttons.forEach((button) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${button.id}`;
      buttonHTML.classList.add('header-button');
      buttonHTML.innerText = button.text;
      pageButtons.append(buttonHTML);
    });

    this.container.append(pageButtons);
    this.container.id = 'header';
    this.container.append(menuButton);
    menuButton.addEventListener('click', () => this.container.children[0].classList.toggle('is-open'));
    pageButtons.addEventListener('click', () => {
      if (window.screen.width <= 660 && this.container.children[0].classList.contains('is-open')) {
        this.container.children[0].classList.toggle('is-open');
      }
    });
  }

  render() {
    this.renderPageButtons();
    return this.container;
  }
}

export default Header;
