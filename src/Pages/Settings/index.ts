import Page from '../../components/Page';
import './settings.scss';

class SettingsPage extends Page {
  static component = {
    settingsTitle: `
      <div class="settings-container">        
        <p class="settings-title">settings page</p>
      </div>`,
  };

  render() {
    const title = this.createHeaderTitle(SettingsPage.component.settingsTitle);
    this.container.append(title);
    return this.container;
  }
}

export default SettingsPage;
