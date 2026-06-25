export const ESSAY_QUESTIONS = {
  essay1: {
    id: 'essay1',
    step: 1,
    question: '황찬일의 말에 뭐라고 답하겠는가? 자신의 생각을 써보자.'
  },
  essay2: {
    id: 'essay2',
    step: 2,
    question: '선택한 이유를 자신의 생각으로 써보자.'
  }
};

export function getEssay2Question(choice) {
  return choice === 'block'
    ? '당신은 단심을 막아섰다. 단심을 막아선 이유가 무엇인지, 자신의 생각을 써보자.'
    : '당신은 단심을 놔줬다. 단심을 놔준 이유가 무엇인지, 자신의 생각을 써보자.';
}
