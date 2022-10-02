class KeyboardListener {
  constructor(object = {}) {
    this.object = object;
  }

  keydown(callback) {
    const object = this.object;
    document.addEventListener("keydown", (event) => {
      callback(event);
    });
  }
}
