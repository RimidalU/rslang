import Page from '../../components/Page';
import './stats.scss';

class StatsPage extends Page {
  static component = {
    statsTitle: `
      <div class="stats-container">        
        <p class="stats-title">stats page</p>
      </div>`,
  };

  render() {
    const title = this.createHeaderTitle(StatsPage.component.statsTitle);
    this.container.append(title);
    return this.container;
  }
}

export default StatsPage;
