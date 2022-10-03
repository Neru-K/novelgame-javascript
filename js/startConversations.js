class StartConversation {
  constructor() {
    this.talk = new TalkRandomly();
    this.plugin = document.querySelector("grammarly-editor-plugin");
    this.container = document.querySelector(".grammarly-container");
    this.div = document.querySelector(".input-window");
    this.h2 = document.querySelector(".conv-title");
    this.shadowroot = this.plugin.shadowRoot;
    this.k5 = this.shadowroot.querySelector(".k5xt8o2");
    this.bar = document.querySelector(".progress-bar2");
    this.is_visible = false;
    this.start;
    this.timer;
  }

  init() {
    this.plugin.config = {
      autocomplete: "off",
      documentDialect: "american",
      // toneDetector: "on",
      documentDomain: "casual",
    };
    this.container.classList.add("show");

    const object = {
      div: this.div,
      h2: this.h2,
      k5: this.k5,
      is_visible: this.is_visible,
      talk: this.talk,
      timeCount: this.timeCount,
    };
    const keyboardListener = new KeyboardListener(object);

    keyboardListener.keydown(this.judgeResult.bind(this));
  }
  judgeResult() {
    if (event.code === "Enter" && (event.ctrlKey || event.metaKey)) {
      if (this.is_visible) {
        this.timeCount();
        this.div.innerHTML = "";
        this.k5.style.visibility = "hidden";
        this.talk.talkRandomly((phrase) => {
          this.h2.innerHTML = '"' + phrase + '"';
        });
        this.is_visible = false;
      } else {
        this.k5.style.visibility = "visible";
        this.is_visible = true;
      }
    }
  }

  timeCount() {
    this.start = 5000;

    this.timer = setInterval(this.gameOver.bind(this), 100);
  }
  gameOver() {
    this.start -= 100;
    // this.start = this.start - this.start * 0.09;
    this.bar.style.width = this.start / 50 + "%";

    if (this.start < 1) {
      clearInterval(this.timer);
      alert("game was over!");
      return;
    }
  }
}
