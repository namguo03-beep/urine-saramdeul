import { ESSAY_QUESTIONS, getEssay2Question } from '../data/essayQuestions.js';

export class EssaySystem {
  constructor(gameState, sheetSync) {
    this.gameState = gameState;
    this.sheetSync = sheetSync;
  }

  getQuestion(id) {
    if (id === 'essay2') {
      return getEssay2Question(this.gameState.flags.choice);
    }
    return ESSAY_QUESTIONS[id]?.question ?? '';
  }

  submit(id, answer) {
    const question = this.getQuestion(id);
    const step = id === 'essay2' ? 2 : 1;
    localStorage.setItem(`essay:${id}`, JSON.stringify({ question, answer, step }));
    this.gameState.setFlag(`${id}_done`, true);
    this.sheetSync?.queue({ step, question, answer });
  }
}
