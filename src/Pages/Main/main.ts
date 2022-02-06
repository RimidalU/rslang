import Page from '../../Components/Page/page';
import './main.scss';

class MainPage extends Page {
  static TextObject = {
    MainTitle: `
    <div class="main-container">        
      <p class="main-title">main page</p>
    </div>    
    `,
  };

  render() {
    const title = this.createHeaderTitle(MainPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default MainPage;
