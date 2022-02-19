import Page from '../../components/Page';
import './audiocall.scss';

class AudiocallPage extends Page {
  static component = {
    audiocallTitle: `
      <div class="audiocall-container">        
        <p class="audiocall-title">audiocall page</p>
      </div>`,
  };

  render() {
    const title = this.createHeaderTitle(AudiocallPage.component.audiocallTitle);
    this.container.append(title);
    return this.container;
  }
}

export default AudiocallPage;
