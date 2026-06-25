export class SheetSync {
  constructor() {
    this.queueKey = 'urine-saramdeul:sheetQueue';
    this.endpoint = null;
  }

  queue(payload) {
    const queued = JSON.parse(localStorage.getItem(this.queueKey) ?? '[]');
    queued.push({ ...payload, createdAt: new Date().toISOString() });
    localStorage.setItem(this.queueKey, JSON.stringify(queued));
  }

  async flush() {
    if (!this.endpoint) {
      return { ok: false, reason: 'Google Sheets endpoint is not configured.' };
    }
    return { ok: false, reason: 'Network sync is not implemented in this MVP.' };
  }
}
