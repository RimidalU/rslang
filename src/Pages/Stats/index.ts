import Page from '../../components/Page';
import userCardBlock from '../../components/UserCard/userCard';
import './stats.scss';

class StatsPage extends Page {
  static input = userCardBlock.render();

  render() {
    this.container.innerHTML = StatsPage.input;
    return this.container;
  }
}

export default StatsPage;
