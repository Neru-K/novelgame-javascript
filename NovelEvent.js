class NovelEvent {
  constructor({ text }) {
    this.text = text;
  }

  textMessage(text) {
    const message = new NovelTextMessage({
      text: this.text,
      onComplete: () => resolve(),
    });
    message.init(document.querySelector(".game-container"));
  }

  /* addStoryFlag(resolve) {
    window.playerState.storyFlags[this.event.flag] = true;
    resolve();
  } */

  init() {
    return new Promise((resolve) => {
      this[this.event.type](resolve);
    });
  }
}
