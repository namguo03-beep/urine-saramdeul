import { COLORS } from '../config.js';

export class DialogueBox {
  constructor(scene) {
    this.scene = scene;
    this.panel = scene.add.rectangle(640, 594, 1120, 188, COLORS.panel, 0.92)
      .setStrokeStyle(2, COLORS.panelBorder);
    this.speaker = scene.add.text(110, 520, '', {
      fontFamily: 'Malgun Gothic, Arial',
      fontSize: '26px',
      color: '#d1b36a',
      fontStyle: 'bold'
    });
    this.body = scene.add.text(110, 558, '', {
      fontFamily: 'Malgun Gothic, Arial',
      fontSize: '25px',
      color: '#f3efe5',
      lineSpacing: 8,
      wordWrap: { width: 1040 }
    });
    this.prompt = scene.add.text(1110, 660, 'Space / Enter / 클릭', {
      fontFamily: 'Malgun Gothic, Arial',
      fontSize: '16px',
      color: '#a9b0b8'
    }).setOrigin(1, 0.5);
  }

  show(line) {
    this.speaker.setText(line.speaker ?? '');
    this.body.setText(line.text ?? '');
  }

  setPrompt(text) {
    this.prompt.setText(text);
  }
}
