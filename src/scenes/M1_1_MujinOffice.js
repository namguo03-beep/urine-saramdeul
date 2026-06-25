import { BaseDialogueScene } from './BaseDialogueScene.js';
import { gameState } from '../systems/GameState.js';

const lines = [
  { speaker: '황무진', text: '와 주셔서 고맙습니다. 멀리서 오셨죠. 앉으세요.' },
  { speaker: '황무진', text: "본론부터 말하죠. 우리 'AI 복합센터' 건설 현장이 공격받고 있습니다. 한 번이 아니에요." },
  { speaker: '내레이션', text: '그는 웃고 있었지만, 손끝이 책상을 두드리고 있었다.' },
  { speaker: '황무진', text: '이건 바깥 사람의 솜씨가 아닙니다. 우리 안의 누군가예요. 그래서 외부인인 당신을 부른 겁니다.' },
  { speaker: '황무진', text: '형님은…… 황찬일 형 말입니다. 곧 그룹을 물려받겠죠. 저보다 한참 앞서 있으니까.' },
  { speaker: '황단심', text: '부르셨어요? 아, 이분이 그 탐정님이시구나! 반가워요, 제가 돕기로 했어요.' },
  { speaker: '황무진', text: '단심이가 안내할 겁니다. ……아, 그리고 형님이 전언을 남겼더군요. "오기 전에 한번 들르라"고.' }
];

export class M1_1_MujinOffice extends BaseDialogueScene {
  constructor() {
    super('M1_1_MujinOffice');
  }

  create() {
    gameState.setFlag('met_mujin', true);
    gameState.addPerson('mujin');
    gameState.addPerson('dansim');

    this.createDialogueScene({
      title: 'M1-1 본사 집무실',
      subtitle: '무진의 의뢰',
      backgroundColor: 0x24323a,
      lines,
      onComplete: () => this.scene.start('M1_2_ChanilOffice', { state: '1st' })
    });
  }
}
