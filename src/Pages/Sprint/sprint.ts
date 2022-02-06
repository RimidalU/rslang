import Page from '../../Components/Page/page';
import './sprint.scss';

class SprintPage extends Page {
  static TextObject = {
    SprintTitle: `
    <div class="sprint-container">        
      <p class="sprint-title">sprint page</p>
    </div>    
    `,
  };

  render() {
    const title = this.createHeaderTitle(SprintPage.TextObject.SprintTitle);
    this.container.append(title);
    return this.container;
  }
}

export default SprintPage;
