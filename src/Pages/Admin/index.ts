import Page from '../../components/Page';
import './admin.scss';

class AdminPage extends Page {
  static component = {
    adminTitle: `
      <div class="admin-container">        
        <p class="admin-title">admin page</p>
      </div>`,
  };

  render() {
    const title = this.createHeaderTitle(AdminPage.component.adminTitle);
    this.container.append(title);
    return this.container;
  }
}

export default AdminPage;
