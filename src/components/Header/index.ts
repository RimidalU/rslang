import { PageIds } from '../../../declarations';
import BaseComponent from '../BaseComponent/baseComponent';
// import { PageIds } from '../../module/app';
import './header.scss';

const buttons = [
  {
    id: PageIds.mainPage,
    text: 'to main',
  },
  {
    id: PageIds.textbookPage,
    text: 'to textbook',
  },
  {
    id: PageIds.audiocallPage,
    text: 'to audiocall',
  },
  {
    id: PageIds.sprintPage,
    text: 'to sprint',
  },
  {
    id: PageIds.statsPage,
    text: 'to stats',
  },
  {
    id: PageIds.settingsPage,
    text: 'to settings',
  },
];

class Header extends BaseComponent {
  renderPageButtons() {
    const pageButtons = document.createElement('div');
    pageButtons.classList.add('header-wrapper');
    pageButtons.innerHTML = '<img src="../../assets/jpg/lion.jpg" alt="Lion" class="header-ico">';
    buttons.forEach((button) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${button.id}`;
      buttonHTML.classList.add('header-button');
      buttonHTML.innerText = button.text;
      pageButtons.append(buttonHTML);
    });

    this.container.append(pageButtons);
  }

  render() {
    this.renderPageButtons();
    return this.container;
  }
}

export default Header;
