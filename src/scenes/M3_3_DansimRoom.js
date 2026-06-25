import { BaseDialogueScene } from './BaseDialogueScene.js';

export class M3_3_DansimRoom extends BaseDialogueScene {
  constructor() {
    super('M3_3_DansimRoom');
  }

  create() {
    this.createDialogueScene({
      title: 'M3-3 황단심의 방',
      subtitle: 'canonical sceneId 뼈대',
      backgroundColor: 0x252a30,
      lines: [
        { speaker: '시스템', text: '이 장면은 개발사양서 v7 기준으로 파일만 준비되었습니다.' },
        { speaker: '시스템', text: '상세 대사, 탐색, 퍼즐, 분기는 다음 MVP 단계에서 구현합니다.' }
      ]
    });
  }
}
