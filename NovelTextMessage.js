class NovelTextMessage {
  constructor({ texts, onComplete }) {
    this.texts = texts;
    this.onComplete = onComplete;
    this.count = 0;
    this.element = null;
  }

  createElement() {
    //Create the element
    this.element = document.createElement("div");
    this.element.classList.add("TextMessage");

    //for (let i = 0; i < this.texts.length; i++) {
    this.element.innerHTML = `
        <p class="TextMessage_p"></p>
        <button class="TextMessage_button">Next</button>
      `;

    //Init the typewriter effect
    /* this.novelRevealingText = new NovelRevealingText({
      element: this.element.querySelector(".TextMessage_p"),
      text: "aaaaaaa",
    }); */
    //}
    this.update();

    this.element.querySelector("button").addEventListener("click", () => {
      //Close the text message
      this.update();
    });

    this.actionListener = new KeyPressListener("Enter", () => {
      this.update();
    });
  }

  done() {
    if (this.novelRevealingText.isDone) {
      this.element.remove();
      this.actionListener.unbind();
      this.onComplete();
    } else {
      this.novelRevealingText.warpToDone();
    }
  }
  update() {
    this.novelRevealingText = new NovelRevealingText({
      element: this.element.querySelector(".TextMessage_p"),
      text: this.texts[this.count],
    });
    this.novelRevealingText.init();
    this.count++;
  }

  init(container) {
    this.createElement();
    container.appendChild(this.element);
    this.novelRevealingText.init();
  }
}
