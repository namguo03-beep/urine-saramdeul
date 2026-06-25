export class DialogueEngine {
  constructor(scene, dialogueBox, lines, { onLine, onComplete } = {}) {
    this.scene = scene;
    this.dialogueBox = dialogueBox;
    this.lines = lines;
    this.onLine = onLine;
    this.onComplete = onComplete;
    this.index = -1;
    this.isComplete = false;
  }

  start() {
    this.advance();
  }

  advance() {
    if (this.isComplete) return;
    this.index += 1;

    if (this.index >= this.lines.length) {
      this.isComplete = true;
      this.dialogueBox.setPrompt('다음 장면으로 이동합니다.');
      this.onComplete?.();
      return;
    }

    const line = this.lines[this.index];
    this.dialogueBox.show(line);
    this.onLine?.(line, this.index);
  }
}
