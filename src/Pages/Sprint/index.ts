import SprintGame from '../../components/Game/sprintgame';
import Page from '../../components/Page';
import './sprint.scss';

class SprintPage extends Page {
  static component = {
    sprintTitle: `
      <div class="sprint-container">        
        <p class="sprint-title">sprint page</p>
      </div>`,
  };

  render() {
    const gameContainer = document.createElement('div');
    gameContainer.classList.add('sprint-container');
    const game = new SprintGame(
      'Спринт',
      `За предоставленное время Вам нужно принять решение - совпадает ли слово на английском языке с предложенным переводом`,
    );
    gameContainer.append(game.renderGame());
    this.container.append(gameContainer);
    return this.container;
  }
}

export default SprintPage;
