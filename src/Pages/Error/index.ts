import Page from '../../components/Page';
import './error.scss';

class ErrorPage extends Page {
  static component = {
    errorTitle: `
      <div class="audiocall-container">        
        <p class="audiocall-title">404: Error! The page was not found!</p>
      </div>`,
  };

  render() {
    const title = this.createHeaderTitle(ErrorPage.component.errorTitle);
    this.container.append(title);
    return this.container;
  }
}

export default ErrorPage;
