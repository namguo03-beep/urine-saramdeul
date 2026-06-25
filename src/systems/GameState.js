import { FLAGS_SCHEMA } from '../data/flagsSchema.js';

const clone = (value) => JSON.parse(JSON.stringify(value));

export class GameState {
  constructor() {
    this.flags = clone(FLAGS_SCHEMA);
    this.people = new Set();
    this.clues = new Set();
    this.currentQuest = null;
  }

  setFlag(key, value = true) {
    if (!(key in this.flags)) {
      console.warn(`Unknown flag: ${key}`);
    }
    this.flags[key] = value;
  }

  addPerson(id) {
    this.people.add(id);
  }

  addClue(id) {
    this.clues.add(id);
  }

  updateQuest(id) {
    this.currentQuest = id;
  }

  snapshot() {
    return {
      flags: { ...this.flags },
      people: [...this.people],
      clues: [...this.clues],
      currentQuest: this.currentQuest
    };
  }
}

export const gameState = new GameState();
