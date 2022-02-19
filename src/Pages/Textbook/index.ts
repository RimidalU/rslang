import Page from '../../components/Page';
import './textbook.scss';

class TextbookPage extends Page {
  static component = {
    textbookTitle: `
      <div class="textbook-container">        
        <p class="textbook-title">textbook page</p>
      </div>`,
  };

  render() {
    const title = this.createHeaderTitle(TextbookPage.component.textbookTitle);
    this.container.append(title);
    return this.container;
  }
}

export default TextbookPage;
