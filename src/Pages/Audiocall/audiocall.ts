import Page from '../../Components/Page/page';
import './audiocall.scss';

class AudiocallPage extends Page {
  static TextObject = {
    AudiocallTitle: `
    <div class="audiocall-container">        
      <p class="audiocall-title">audiocall page</p>
    </div>    
    `,
  };

  render() {
    const title = this.createHeaderTitle(AudiocallPage.TextObject.AudiocallTitle);
    this.container.append(title);
    return this.container;
  }
}

export default AudiocallPage;
