import Page from '../../components/Page';
import './audiocall.scss';
import AudioCallGame from '../../components/game/audiocallgame';

class AudiocallPage extends Page {
  static component = {
    audiocallTitle: `
      <div class="audiocall-container">
        <p class="audiocall-title">audiocall page</p>
      </div>`,
  };

  render() {
    // const title = this.createHeaderTitle(AudiocallPage.component.audiocallTitle);
    // this.container.append(title);

    const gameContainer = document.createElement('div');
    gameContainer.classList.add('audiocall-container');
    const game = new AudioCallGame(
      'Аудивызов',
      'В данной игре необходимо из предложенных вариантов ответа выбрать правильный перевод слова, который услышите',
    );
    gameContainer.append(game.renderGame());
    this.container.append(gameContainer);
    return this.container;
  }
}

export default AudiocallPage;
