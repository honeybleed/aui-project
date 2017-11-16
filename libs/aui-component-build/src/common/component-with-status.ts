export class ComponentWithStatus {
  status: {[key: string]: boolean};
  isDisabled = false;
  constructor(s: string[]) {
    this.status = {};
    for (const i of s) {
      this.status[i] = false;
    }
  }
  setStatus (keys: string[]) {
    for (const i of keys) {
      if (this.status.hasOwnProperty(i)) {
        this.status[i] = true;
      }
    }
  }
  unsetStatus (keys: string[]) {
    for (const i of keys) {
      if (this.status.hasOwnProperty(i)) {
        this.status[i] = false;
      }
    }
  }
  dumpStatus (): string {
    const ret = [];
    if (this.isDisabled) {
      ret.push('disable');
      return ret.join(' ');
    }
    for (const s of Object.getOwnPropertyNames(this.status)) {
      if ( this.status.hasOwnProperty(s) && this.status[s]) {
        ret.push(s);
      }
    }
    return ret.join(' ');
  }
}
