import { BaseDialogueScene } from './BaseDialogueScene.js';

const lines = [
  { speaker: '내레이션', text: '의뢰는 짧았다.' },
  { speaker: '의뢰서', text: '동양그룹. 사보타주. 외부에 알리지 말 것.' },
  { speaker: '내레이션', text: '보수는 후했고, 조건은 단 하나 — 입을 다물 것.' },
  { speaker: '내레이션', text: '나는 그런 일을 한다. 진실을 찾고, 값을 받고, 사라지는 일.' },
  { speaker: '내레이션', text: '…그땐 몰랐다. 이번 진실은, 값을 치르고도 사라지지 못할 종류라는 걸.' }
];

export class PrologueScene extends BaseDialogueScene {
  constructor() {
    super('PrologueScene');
  }

  create() {
    this.createDialogueScene({
      title: '우리네 사람들',
      subtitle: '프롤로그',
      backgroundColor: 0x090b0d,
      lines,
      onComplete: () => this.scene.start('M1_1_MujinOffice')
    });
  }
}
