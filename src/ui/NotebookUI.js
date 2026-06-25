export class NotebookUI {
  constructor(scene, notebookSystem) {
    this.scene = scene;
    this.notebookSystem = notebookSystem;
    this.container = scene.add.container(0, 0).setVisible(false);
    this.backdrop = scene.add.rectangle(640, 320, 760, 430, 0x171b20, 0.97)
      .setStrokeStyle(2, 0xd1b36a);
    this.text = scene.add.text(300, 140, '', {
      fontFamily: 'Malgun Gothic, Arial',
      fontSize: '20px',
      color: '#f3efe5',
      wordWrap: { width: 680 },
      lineSpacing: 8
    });
    this.container.add([this.backdrop, this.text]);
  }

  toggle() {
    const visible = !this.container.visible;
    this.container.setVisible(visible);
    if (visible) this.refresh();
  }

  refresh() {
    const snapshot = this.notebookSystem.getSnapshot();
    const people = snapshot.people.map((person) => `- ${person.name}`).join('\n') || '- 없음';
    const clues = snapshot.clues.map((clue) => `- ${clue.text}`).join('\n') || '- 없음';
    this.text.setText(`탐정 수첩\n\n임무\n${snapshot.quest ?? '없음'}\n\n인물\n${people}\n\n단서\n${clues}\n\nN 키로 닫기`);
  }
}
