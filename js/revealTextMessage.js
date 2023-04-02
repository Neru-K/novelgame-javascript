// function displayText(textArea, text) {
//   let index = 0;

//   function type() {
//     textArea.value += text[index];
//     index++;

//     if (index >= text.length) {
//       clearInterval(intervalId);
//     }
//   }

//   const intervalId = setInterval(type, 100);
// }

// displayText(textArea, text);

class TextMessage {
  constructor() {
    this.textArea = document.getElementById("message_box");
    this.textArea.value = "";
    this.text = "ノベルゲームのようなイメージです。";
  }

  displayText() {
    let index = 0;
    const intervalId = setInterval(() => {
      this.textArea.value += this.text[index];
      index++;
      if (index >= this.text.length) {
        clearInterval(intervalId);
      }
    }, 100);
  }
}
