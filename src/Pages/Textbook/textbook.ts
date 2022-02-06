import Page from '../../Components/Page/page';
import './textbook.scss';

class TextbookPage extends Page {
  static TextObject = {
    TextbookTitle: `
    <div class="textbook-container">        
      <p class="textbook-title">textbook page</p>
    </div>    
    `,
  };

  render() {
    const title = this.createHeaderTitle(TextbookPage.TextObject.TextbookTitle);
    this.container.append(title);
    return this.container;
  }
}

export default TextbookPage;
