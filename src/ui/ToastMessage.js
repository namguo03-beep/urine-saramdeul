export class ToastMessage {
  constructor(scene) {
    this.scene = scene;
    this.text = scene.add.text(640, 92, '', {
      fontFamily: 'Malgun Gothic, Arial',
      fontSize: '20px',
      color: '#111315',
      backgroundColor: '#d1b36a',
      padding: { x: 18, y: 10 }
    }).setOrigin(0.5).setVisible(false);
  }

  show(message) {
    this.text.setText(message).setVisible(true).setAlpha(1);
    this.scene.tweens.add({
      targets: this.text,
      alpha: 0,
      delay: 1300,
      duration: 500,
      onComplete: () => this.text.setVisible(false)
    });
  }
}
