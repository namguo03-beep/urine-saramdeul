import { BaseDialogueScene } from './BaseDialogueScene.js';
import { gameState } from '../systems/GameState.js';

const firstVisitLines = [
  { speaker: '황찬일', text: '당신이 무진이가 부른 사람이군요. 앉으세요. 오래 안 걸립니다.' },
  { speaker: '황찬일', text: '솔직히 말하죠. 테러범을 찾아주시는 건 고맙습니다. 다만 — 너무 열심히 하지 않으셔도 됩니다.' },
  { speaker: '황찬일', text: '미래를 보지 못하는 사람들이 있어요. 세상이 나아가는 게 두려운 거죠. 그래서 돌을 던지는 겁니다.' },
  { speaker: '황찬일', text: '우리 아버지께서 맨손으로 세운 이 그룹을, 나는 한 단계 더 올려놓을 겁니다.' },
  { speaker: '황단심', text: '……' },
  { speaker: '황찬일', text: '이 센터가 그 증명이 될 거예요. 누가 돌을 던지든.' },
  { speaker: '황찬일', text: '잡으시면 알려만 주세요. 처리는 우리가 합니다. ……그럼, 수고하시고.' },
  { speaker: 'PC', text: 'AI 복합센터 내부회선 접속 프로그램. AI 방화벽에 직접 연결할 수 있습니다. (최고권한자 전용)' },
  { speaker: '황단심', text: '역시 오빠는 최고권한자 자격이 있나 보네요. 이런 정보들을 하나하나 모아야 할 것 같아요.' },
  { speaker: '탐정', text: '탐정에게는 탐정 수첩이 있습니다.' },
  { speaker: '내레이션', text: '이제 탐정 수첩을 이용할 수 있습니다. N 키로 수첩을 열고 닫을 수 있습니다.' }
];

export class M1_2_ChanilOffice extends BaseDialogueScene {
  constructor() {
    super('M1_2_ChanilOffice');
  }

  init(data) {
    this.visitState = data.state ?? '1st';
  }

  create() {
    if (this.visitState !== '1st') {
      this.createDialogueScene({
        title: 'M1-2 황찬일 집무실',
        subtitle: `state='${this.visitState}' 뼈대`,
        backgroundColor: 0x2d3035,
        lines: [{ speaker: '시스템', text: '이 상태의 상세 구현은 다음 작업 범위입니다.' }]
      });
      return;
    }

    this.createDialogueScene({
      title: 'M1-2 황찬일 집무실',
      subtitle: "state='1st' — 부드러운 경고",
      backgroundColor: 0x30333a,
      lines: firstVisitLines,
      onLine: (line) => {
        if (line.speaker === '황단심') {
          this.toast.show('단심이 잠시 침묵했다.');
        }
      },
      onComplete: () => {
        gameState.setFlag('chanil_1st_done', true);
        gameState.setFlag('notebook_unlocked', true);
        gameState.addPerson('chanil');
        gameState.addClue('clue_firewall_access');
        gameState.updateQuest('q_go_site');
        this.notebook.refresh();
        this.toast.show('수첩에 단서가 추가되었습니다.');
      }
    });
  }
}
