import AudioCallGame from '../../components/Game/audiocallgame';
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
    const gameContainer = document.createElement('div');
    gameContainer.classList.add('audiocall-container');
    const game = new AudioCallGame(
      'Аудивызов',
      `Проверьте свой навык восприятия слов на слух. Выберите правильный вариант слова, которое услышали. <br> 
      Помните, что у Вас только одна попытка!`,
    );
    gameContainer.append(game.renderGame());
    this.container.append(gameContainer);
    return this.container;
  }
}

export default AudiocallPage;
