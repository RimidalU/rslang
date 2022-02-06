import Page from '../../Components/Page/page';
import './settings.scss';

class SettingsPage extends Page {
  static TextObject = {
    SettingsTitle: `
    <div class="settings-container">        
      <p class="settings-title">settings page</p>
    </div>    
    `,
  };

  render() {
    const title = this.createHeaderTitle(SettingsPage.TextObject.SettingsTitle);
    this.container.append(title);
    return this.container;
  }
}

export default SettingsPage;
