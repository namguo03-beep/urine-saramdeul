import { BaseDialogueScene } from './BaseDialogueScene.js';

export class M4_Flashback extends BaseDialogueScene {
  constructor() {
    super('M4_Flashback');
  }

  create() {
    this.createDialogueScene({
      title: 'M4 노을빛 마을 회상',
      subtitle: 'canonical sceneId 뼈대',
      backgroundColor: 0x252a30,
      lines: [
        { speaker: '시스템', text: '이 장면은 개발사양서 v7 기준으로 파일만 준비되었습니다.' },
        { speaker: '시스템', text: '상세 대사, 탐색, 퍼즐, 분기는 다음 MVP 단계에서 구현합니다.' }
      ]
    });
  }
}
