/* eslint-disable no-console */
import { getStorage } from '../../module/storage';
import './userCard.scss';

class UserCard {
  name: string | undefined;

  password: string | undefined;

  email: string | undefined;

  constructor() {
    this.name = 'Введите имя';
    this.password = 'Введите пароль';
    this.email = 'Введите email';
  }

  static nameInput = document.getElementById('name');

  // eslint-disable-next-line class-methods-use-this
  updateUser() {
    // let er = UserCard.nameInput!;
    console.log('er');
    // apiResource.updateUser({
    //   name: `${this.name}`,
    //   email: `${this.email}`,
    //   password: `${this.password}`,
    // });
    // this.render();
  }

  render() {
    const userState = getStorage();

    this.name = userState.name;
    this.password = userState.password;

    const userHtml = `
      <div class="stats-container"> 
        <div class="user-container">
            <div class="user-ico"></div>
              <input class="user-input" id="name" type="text" value="${this.name}">                         
            <div class="user-button">
                <button class="register-btn update-user" id="update-user" onclick="userCardBlock.updateUser()">Изменить</button>
                <button  class="register-btn delete-user" onclick="userCardBlock.deleteUser()">Удалить</button>
            </div>
        </div>  
        
        <div class="stat-container">

          <div class="day-stat">
              <table class="table-wrap">
                  <thead class="table-head">
                      <tr>
                          <th colspan="2">Изученно за день</th>                    
                      </tr>
                  </thead>
                  <tbody class="table-body">
                      <tr>
                          <th>количество новых слов за день</th>
                          <th>20</th>
                      </tr>
                      <tr>
                          <th>количество изученных слов за день</th>
                          <th>20</th>
                      </tr>
                      <tr>
                          <th>процент правильных ответов за день</th>
                          <th>75%</th>
                      </tr>
                  </tbody>
              </table>
          </div>   
        
          <div class="sprint-stat">
              <table class="sprint-wrap">
                  <thead class="table-head">
                      <tr>
                          <th colspan="2">Спринт</th>                    
                      </tr>
                  </thead>
                  <tbody class="table-body">
                      <tr>
                          <th>количество новых слов за день</th>
                          <th>20</th>
                      </tr>
                      <tr>
                          <th>процент правильных ответов%</th>
                          <th>75%</th>
                      </tr>
                      <tr>
                          <th>длина серии правильных ответов </th>
                          <th>7</th>
                      </tr>
                  </tbody>
              </table>
          </div>

          <div class="call-start">
              <table class="call-wrap">
                  <thead class="table-head">
                      <tr>
                          <th colspan="2">Аудивызов</th>                    
                      </tr>
                  </thead>
                  <tbody class="table-body">
                      <tr>
                          <th>количество новых слов за день</th>
                          <th>20</th>
                      </tr>
                      <tr>
                          <th>процент правильных ответов</th>
                          <th>75%</th>
                      </tr>
                      <tr>
                          <th>длина серии правильных ответов </th>
                          <th>7</th>
                      </tr>
                  </tbody>
            </div>
        </div>  
      </div>       
    `;

    return userHtml;
  }
}

const userCardBlock = new UserCard();

export default userCardBlock;
