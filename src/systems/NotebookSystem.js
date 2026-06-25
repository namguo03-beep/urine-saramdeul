import { CHARACTERS } from '../data/characters.js';
import { CLUES } from '../data/clues.js';
import { QUESTS } from '../data/quests.js';

export class NotebookSystem {
  constructor(gameState) {
    this.gameState = gameState;
  }

  getSnapshot() {
    const state = this.gameState.snapshot();
    return {
      quest: state.currentQuest ? QUESTS[state.currentQuest] : null,
      people: state.people.map((id) => CHARACTERS[id]).filter(Boolean),
      clues: state.clues.map((id) => CLUES[id]).filter(Boolean)
    };
  }
}
