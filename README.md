# 우리네 사람들 MVP

역사 체험형 탐정 RPG `우리네 사람들`의 1차 MVP 뼈대입니다. Vite와 Phaser 3로 구성되어 있으며, 현재는 프롤로그부터 M1-2 황찬일 집무실 1차 대화까지 실행됩니다.

## 실행 방법

```bash
npm install
npm run dev
npm run build
```

개발 서버가 뜨면 브라우저에서 표시된 로컬 주소를 엽니다.

## 현재 구현 범위

- Vite + Phaser 기본 프로젝트 구조
- 개발사양서 v7 기준 canonical sceneId 13개 Scene 파일
- `PrologueScene -> M1_1_MujinOffice -> M1_2_ChanilOffice(state='1st')` 진행
- Space, Enter, 또는 클릭으로 대화 진행
- GameState, DialogueEngine, NotebookSystem, QuestSystem 등 기본 시스템 뼈대
- Asset Manifest 기반 placeholder SVG 데이터 생성 구조
- 이미지 파일이 없어도 Phaser Graphics fallback으로 화면 표시

## 아직 구현하지 않은 범위

- M2 이후 전체 탐색, 조사, 퍼즐, 엔딩 분기
- 작성 입력의 실제 수업 제출 연동
- 실제 Google Sheets 전송 URL
- 고품질 이미지와 사운드 에셋
