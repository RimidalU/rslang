import Page from '../../Components/Page/page';
import './error.scss';

// export const enum ErrorTypes {
//   Error_404 = 404
// }

class ErrorPage extends Page {
  static TextObject = {
    ErrorTitle: `
    <div class="audiocall-container">        
      <p class="audiocall-title">404: Error! The page was not found!</p>
    </div>     
    `,
  };

  render() {
    const title = this.createHeaderTitle(ErrorPage.TextObject.ErrorTitle);
    this.container.append(title);
    return this.container;
  }
}

export default ErrorPage;
