import Page from '../../components/Page';
import './sprint.scss';

class SprintPage extends Page {
  static component = {
    sprintTitle: `
      <div class="sprint-container">        
        <p class="sprint-title">sprint page</p>
      </div>`,
  };

  render() {
    const title = this.createHeaderTitle(SprintPage.component.sprintTitle);
    this.container.append(title);
    return this.container;
  }
}

export default SprintPage;
