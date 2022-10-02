class KeyboardListener {
  constructor(object = {}) {
    this.object = object;
  }

  keydown(callback) {
    const object = this.object;
    document.addEventListener("keydown", function (event) {
      callback(event);
    });
  }
}
