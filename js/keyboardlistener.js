function singleKeyListener(element, key, callback) {
  element.addEventListener("keydown", function (event) {
    if (event.code === key) {
      callback();
    }
  });
}
function multiKeyListener(element, key, mode, callback) {
  let winkey, mackey;

  element.addEventListener("keydown", function (event) {
    if (mode == "ctrl") {
      winkey = event.ctrlKey;
      mackey = event.metaKey;
    } else if (mode == "alt") {
      winkey = event.altKey;
      mackey = event.altKey;
    }
    if (event.code === key && (winkey || mackey)) {
      callback();
    }
  });
}
