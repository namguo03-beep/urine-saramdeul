import Phaser from 'phaser';
import { COLORS, GAME_HEIGHT, GAME_WIDTH } from '../config.js';
import { DialogueEngine } from '../systems/DialogueEngine.js';
import { gameState } from '../systems/GameState.js';
import { AssetLoader } from '../systems/AssetLoader.js';
import { NotebookSystem } from '../systems/NotebookSystem.js';
import { DialogueBox } from '../ui/DialogueBox.js';
import { NotebookUI } from '../ui/NotebookUI.js';
import { ToastMessage } from '../ui/ToastMessage.js';

export class BaseDialogueScene extends Phaser.Scene {
  constructor(key) {
    super(key);
    this.sceneKey = key;
  }

  createDialogueScene({ title, subtitle, backgroundColor = 0x20262c, lines, onLine, onComplete }) {
    new AssetLoader(this).ensureFallbacks();
    this.add.rectangle(GAME_WIDTH / 2, GAME_HEIGHT / 2, GAME_WIDTH, GAME_HEIGHT, backgroundColor);
    this.add.rectangle(640, 248, 980, 310, 0x22282d, 0.82).setStrokeStyle(2, COLORS.accent);
    this.add.text(640, 180, title, {
      fontFamily: 'Malgun Gothic, Arial',
      fontSize: '42px',
      color: '#f3efe5',
      fontStyle: 'bold'
    }).setOrigin(0.5);
    this.add.text(640, 238, subtitle, {
      fontFamily: 'Malgun Gothic, Arial',
      fontSize: '22px',
      color: '#a9b0b8'
    }).setOrigin(0.5);

    this.toast = new ToastMessage(this);
    this.dialogueBox = new DialogueBox(this);
    this.notebook = new NotebookUI(this, new NotebookSystem(gameState));
    this.engine = new DialogueEngine(this, this.dialogueBox, lines, { onLine, onComplete });

    this.input.keyboard.on('keydown-SPACE', () => this.engine.advance());
    this.input.keyboard.on('keydown-ENTER', () => this.engine.advance());
    this.input.keyboard.on('keydown-N', () => this.notebook.toggle());
    this.input.on('pointerdown', () => this.engine.advance());

    this.engine.start();
  }
}
