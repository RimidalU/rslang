import Page from '../components/Page';
import AdminPage from '../Pages/Admin';
import AudiocallPage from '../Pages/Audiocall';
import ErrorPage from '../Pages/Error';
import MainPage from '../Pages/Main';
import SettingsPage from '../Pages/Settings';
import SprintPage from '../Pages/Sprint';
import StatsPage from '../Pages/Stats';
import TextbookPage from '../Pages/Textbook';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PageIds } from '../../declarations';

class App {
  private static container: HTMLElement = document.body;

  private static defaultPageId = 'current-page';

  private header: Header;

  private footer: Footer;

  private hash: string;

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    switch (idPage) {
      case PageIds.mainPage:
        page = new MainPage(idPage);
        break;
      case PageIds.adminPage:
        page = new AdminPage(idPage);
        break;
      case PageIds.audiocallPage:
        page = new AudiocallPage(idPage);
        break;
      case PageIds.settingsPage:
        page = new SettingsPage(idPage);
        break;
      case PageIds.sprintPage:
        page = new SprintPage(idPage);
        break;
      case PageIds.statsPage:
        page = new StatsPage(idPage);
        break;
      case PageIds.textbookPage:
        page = new TextbookPage(idPage);
        break;
      default:
        page = new ErrorPage(idPage);
        break;
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      App.container.insertAdjacentElement('beforeend', pageHTML);
    }
  }

  constructor() {
    this.header = new Header('header', 'header-container');
    this.footer = new Footer('footer', 'footer-container');
    this.hash = '#main-page';
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      this.hash = window.location.hash.slice(1);
      App.renderNewPage(this.hash);
    });
  }

  run() {
    App.renderNewPage('main-page');
    this.enableRouteChange();
    App.container.prepend(this.header.render());
    App.container.insertAdjacentElement('afterend', this.footer.render());
  }
}

export default App;
