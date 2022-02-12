/* eslint-disable max-len */
import Page from '../../components/Page';
import './main.scss';

class MainPage extends Page {
  static component = {
    mainTitle: `
      <div class="container">
      <main class="main" id="main">
      <div class="description">
          <div class="description-form">
              <h1 class="description-text">RS Lang</h1>
              <p class="description-text">Изучи коллекцию из 4000 слов в различных форматах.</p>
              <button class="button register-btn">
              Попробовать                    
          </button>
          </div>
          <div class="image">
              <img src="../assets/jpg/placeholder.png" alt="main image">
          </div> 
          <div class="info-cards">
              <div class="card">
                  <div class="card-logo">
                      <img src="../assets/svg/desktop.svg" alt="">                          
                  </div>
                  <h4 class="card-header">4000 слов</h4>
                  <p class="card-text">
                      База данных содержит 4000 слов.
                  </p>
              </div>
              <div class="card">
                  <div class="card-logo">
                      <img src="../assets/svg/tele.svg" alt="">                                                         
                  </div>
                  <h4 class="card-header">Статистика</h4>
                  <p class="card-text">
                      Ежедневно наблюдай за своим прогрессом в один клик
                  </p>
              </div>
              <div class="card">
                  <div class="card-logo">
                      <img src="../assets/svg/colb.svg" alt="">                                                        
                  </div>
                  <h4 class="card-header">Мини-игры</h4>
                  <p class="card-text">
                      Предлагаем мини-игры для закрепления материала
                  </p>
              </div>
          </div>           
      </div>  
  </main>
  <div class="services" id="services">
      <h3 class="team-header">Проект предлагает вам: </h3>
      <div class="service-container">
          <div class="side-info book-img">
              <img class="service-img" src="../assets/jpg/technology 1.png" alt="text">
          </div>
          <div class="main-info">
              <h3 class="service-header">Учебник</h3>
              <p class="service-text">Учебник позволяет посмотреть коллекцию слов, которые будут встречаться в мини-играх, также их можно отметить как сложные для себя.</p>
              <a href="" class="service-link">Попробовать <svg class="arrow" width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.180771 0.680771C0.237928 0.623469 0.305828 0.578007 0.380583 0.546987C0.455337 0.515967 0.535477 0.5 0.616412 0.5C0.697347 0.5 0.777487 0.515967 0.852241 0.546987C0.926996 0.578007 0.994896 0.623469 1.05205 0.680771L8.4358 8.06452C8.4931 8.12168 8.53857 8.18958 8.56959 8.26433C8.60061 8.33909 8.61657 8.41923 8.61657 8.50016C8.61657 8.5811 8.60061 8.66123 8.56959 8.73599C8.53857 8.81074 8.4931 8.87864 8.4358 8.9358L1.05205 16.3196C0.936514 16.4351 0.779809 16.5 0.616412 16.5C0.453015 16.5 0.29631 16.4351 0.180771 16.3196C0.0652316 16.204 0.000322157 16.0473 0.000322157 15.8839C0.000322157 15.7205 0.0652316 15.5638 0.180771 15.4483L7.13011 8.50016L0.180771 1.55205C0.123469 1.4949 0.078006 1.427 0.0469863 1.35224C0.0159666 1.27749 0 1.19735 0 1.11641C0 1.03548 0.0159666 0.955338 0.0469863 0.880583C0.078006 0.805829 0.123469 0.737928 0.180771 0.680771Z" fill="#96BB7C"/>
                  </svg>
                  </a>
          </div>
          <div class="side-info stat-info">
              <h3 class="service-header">Cтатистика</h3>
              <p class="service-text">Статистика позволяет отследить прогресс в изучении слов</p>
              <a href="" class="service-link">Попробовать <svg class="arrow" width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.180771 0.680771C0.237928 0.623469 0.305828 0.578007 0.380583 0.546987C0.455337 0.515967 0.535477 0.5 0.616412 0.5C0.697347 0.5 0.777487 0.515967 0.852241 0.546987C0.926996 0.578007 0.994896 0.623469 1.05205 0.680771L8.4358 8.06452C8.4931 8.12168 8.53857 8.18958 8.56959 8.26433C8.60061 8.33909 8.61657 8.41923 8.61657 8.50016C8.61657 8.5811 8.60061 8.66123 8.56959 8.73599C8.53857 8.81074 8.4931 8.87864 8.4358 8.9358L1.05205 16.3196C0.936514 16.4351 0.779809 16.5 0.616412 16.5C0.453015 16.5 0.29631 16.4351 0.180771 16.3196C0.0652316 16.204 0.000322157 16.0473 0.000322157 15.8839C0.000322157 15.7205 0.0652316 15.5638 0.180771 15.4483L7.13011 8.50016L0.180771 1.55205C0.123469 1.4949 0.078006 1.427 0.0469863 1.35224C0.0159666 1.27749 0 1.19735 0 1.11641C0 1.03548 0.0159666 0.955338 0.0469863 0.880583C0.078006 0.805829 0.123469 0.737928 0.180771 0.680771Z" fill="#96BB7C"/>
                  </svg>
                  </a>
          </div>
          <div class="main-info stat-image">
              <img class="service-img" src="../assets/jpg/statr.png" alt="text">
          </div>
          <div class="side-info call-image">
              <img class="service-img" src="../assets/jpg/call.jpg" alt="text">
          </div>
          <div class="main-info call-info">
              <h3 class="service-header">Аудиовызов</h3>
              <p class="service-text">Мини-игра, правила которой просты: слушаешь произношение - угадываешь слово(а лучше выбирать осознанно)</p>
              <a href="" class="service-link">Попробовать <svg class="arrow" width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.180771 0.680771C0.237928 0.623469 0.305828 0.578007 0.380583 0.546987C0.455337 0.515967 0.535477 0.5 0.616412 0.5C0.697347 0.5 0.777487 0.515967 0.852241 0.546987C0.926996 0.578007 0.994896 0.623469 1.05205 0.680771L8.4358 8.06452C8.4931 8.12168 8.53857 8.18958 8.56959 8.26433C8.60061 8.33909 8.61657 8.41923 8.61657 8.50016C8.61657 8.5811 8.60061 8.66123 8.56959 8.73599C8.53857 8.81074 8.4931 8.87864 8.4358 8.9358L1.05205 16.3196C0.936514 16.4351 0.779809 16.5 0.616412 16.5C0.453015 16.5 0.29631 16.4351 0.180771 16.3196C0.0652316 16.204 0.000322157 16.0473 0.000322157 15.8839C0.000322157 15.7205 0.0652316 15.5638 0.180771 15.4483L7.13011 8.50016L0.180771 1.55205C0.123469 1.4949 0.078006 1.427 0.0469863 1.35224C0.0159666 1.27749 0 1.19735 0 1.11641C0 1.03548 0.0159666 0.955338 0.0469863 0.880583C0.078006 0.805829 0.123469 0.737928 0.180771 0.680771Z" fill="#96BB7C"/>
                  </svg>
                  </a>
          </div>
          <div class="side-info sprint-info">
              <h3 class="service-header">Спринт</h3>
              <p class="service-text">Мини-игра, в которой нужно определить, правильно ли переведено слово на русский язык</p>
              <a href="" class="service-link">Попробовать <svg class="arrow" width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.180771 0.680771C0.237928 0.623469 0.305828 0.578007 0.380583 0.546987C0.455337 0.515967 0.535477 0.5 0.616412 0.5C0.697347 0.5 0.777487 0.515967 0.852241 0.546987C0.926996 0.578007 0.994896 0.623469 1.05205 0.680771L8.4358 8.06452C8.4931 8.12168 8.53857 8.18958 8.56959 8.26433C8.60061 8.33909 8.61657 8.41923 8.61657 8.50016C8.61657 8.5811 8.60061 8.66123 8.56959 8.73599C8.53857 8.81074 8.4931 8.87864 8.4358 8.9358L1.05205 16.3196C0.936514 16.4351 0.779809 16.5 0.616412 16.5C0.453015 16.5 0.29631 16.4351 0.180771 16.3196C0.0652316 16.204 0.000322157 16.0473 0.000322157 15.8839C0.000322157 15.7205 0.0652316 15.5638 0.180771 15.4483L7.13011 8.50016L0.180771 1.55205C0.123469 1.4949 0.078006 1.427 0.0469863 1.35224C0.0159666 1.27749 0 1.19735 0 1.11641C0 1.03548 0.0159666 0.955338 0.0469863 0.880583C0.078006 0.805829 0.123469 0.737928 0.180771 0.680771Z" fill="#96BB7C"/>
                  </svg>
                  </a>
          </div>
          <div class="main-info sprint-image">
              <img class="service-img" src="../assets/jpg/sprint.jpg" alt="text">
          </div>
      </div>
  </div>  
  <div class="team" id="team">
      <h3 class="team-header">Над проектом работали: </h3>
      <div class="team-container">
          <div class="member-card">
              <img class="member-avatar" src="../assets/jpg/member-avatar-1.jpg" alt="Lead avatar">
              <h4 class="member-header">Владимир</h4>
              <p class="member-text">Lead разработчик</p>
              <ul class="members-list">
                  <li class="members-item">Распределение задач</li>
                  <li class="members-item">Работа с REST API</li>
                  <li class="members-item">Разработка мини-игры</li>
              </ul>
          </div>
          <div class="member-card">
              <img class="member-avatar" src="../assets/jpg/member-avatar-1.jpg" alt="Lead avatar">
              <h4 class="member-header">Айнур</h4>
              <p class="member-text">Ментор</p>
              <ul class="members-list">
                  <li class="members-item">Распределение задач</li>
                  <li class="members-item">Проведение консультаций</li>
                  <li class="members-item">Помощь в код-ревью</li>
              </ul>
          </div>
          <div class="member-card">
              <img class="member-avatar" src="../assets/jpg/member-avatar-1.jpg" alt="Lead avatar">
              <h4 class="member-header">Андрей</h4>
              <p class="member-text">Front-end разработчик</p>
              <ul class="members-list">
                  <li class="members-item">Разработка мини-игры</li>
                  <li class="members-item">Проведение консультаций</li>
              </ul>
          </div>
          <div class="member-card">
              <img class="member-avatar" src="../assets/jpg/member-avatar-1.jpg" alt="Lead avatar">
              <h4 class="member-header">Андрей</h4>
              <p class="member-text">Front-end разработчик</p>
              <ul class="members-list">
                  <li class="members-item">Разработка внешней оболочки</li>
                  <li class="members-item">Работа с REST API</li>
              </ul>
          </div>
      </div>
      </div>
      <a class="back-to-top" href="#header" title="Наверх">&uarr;</a>
      </div>    
      `,
  };

  render() {
    const title = this.createHeaderTitle(MainPage.component.mainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default MainPage;
