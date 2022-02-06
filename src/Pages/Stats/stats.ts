import Page from '../../Components/Page/page';
import './stats.scss';

class StatsPage extends Page {
  static TextObject = {
    StatsTitle: `
    <div class="stats-container">        
      <p class="stats-title">stats page</p>
    </div>    
    `,
  };

  render() {
    const title = this.createHeaderTitle(StatsPage.TextObject.StatsTitle);
    this.container.append(title);
    return this.container;
  }
}

export default StatsPage;
