class KeyboardListener {
  keydown(callback) {
    document.addEventListener("keydown", (event) => {
      callback(event);
    });
  }
}
