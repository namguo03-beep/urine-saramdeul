export class EssayInput {
  constructor() {
    this.enabled = false;
  }

  open() {
    this.enabled = true;
  }

  close() {
    this.enabled = false;
  }
}
