class StartConversation {
  constructor() {
    this.talk = new TalkRandomly();
    this.plugin = document.querySelector("grammarly-editor-plugin");
    this.container = document.querySelector(".grammarly-container");
    this.div = document.querySelector(".input-window");
    this.h2 = document.querySelector(".conv-title");
    this.shadowroot = this.plugin.shadowRoot;
    this.k5 = this.shadowroot.querySelector(".k5xt8o2");
    this.is_visible = false;
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
    keyboardListener.keydown(function (event) {
      if (event.code === "Enter" && (event.ctrlKey || event.metaKey)) {
        if (object.is_visible) {
          object.div.innerHTML = "";
          object.k5.style.visibility = "hidden";
          object.talk.talkRandomly((phrase) => {
            object.h2.innerHTML = '"' + phrase + '"';
          });
          object.is_visible = false;
        } else {
          object.k5.style.visibility = "visible";
          object.is_visible = true;
        }
      }
    });
  }

  timeCount() {
    const start = new Date(); // 開始時間を覚える

    const timer = setInterval(function () {
      // 開始からの経過時間は？
      const timePassed = new Date() - start;

      if (timePassed >= 5000) {
        clearInterval(timer); // 2秒後にアニメーションが終了
        this.gameOver();
        return;
      }
    }, 100);
  }
  gameClear() {}
  gameOver() {
    alert("game was over!");
  }
}
