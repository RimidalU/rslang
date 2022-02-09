import Page from '../../components/Page';
import './main.scss';

class MainPage extends Page {
  static component = {
    mainTitle: `
      <div class="main-container">        
        <p class="main-title">main page</p>
      </div>`,
  };

  render() {
    const title = this.createHeaderTitle(MainPage.component.mainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default MainPage;
