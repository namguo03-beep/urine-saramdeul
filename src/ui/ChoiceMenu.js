export class ChoiceMenu {
  constructor(scene, choices, onSelect) {
    this.scene = scene;
    this.container = scene.add.container(0, 0);
    choices.forEach((choice, index) => {
      const y = 300 + index * 56;
      const button = scene.add.rectangle(640, y, 620, 44, 0x22282d, 0.96)
        .setStrokeStyle(1, 0xd1b36a)
        .setInteractive({ useHandCursor: true });
      const label = scene.add.text(640, y, choice.label, {
        fontFamily: 'Malgun Gothic, Arial',
        fontSize: '22px',
        color: '#f3efe5'
      }).setOrigin(0.5);
      button.on('pointerdown', () => onSelect(choice));
      this.container.add([button, label]);
    });
  }

  destroy() {
    this.container.destroy(true);
  }
}
