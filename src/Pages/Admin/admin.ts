import Page from '../../Components/Page/page';
import './admin.scss';

class AdminPage extends Page {
  static TextObject = {
    AdminTitle: `
    <div class="admin-container">        
      <p class="admin-title">admin page</p>
    </div>    
    `,
  };

  render() {
    const title = this.createHeaderTitle(AdminPage.TextObject.AdminTitle);
    this.container.append(title);
    return this.container;
  }
}

export default AdminPage;
