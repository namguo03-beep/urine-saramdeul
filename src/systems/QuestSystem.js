export class QuestSystem {
  constructor(gameState) {
    this.gameState = gameState;
  }

  update(id) {
    this.gameState.updateQuest(id);
  }
}
