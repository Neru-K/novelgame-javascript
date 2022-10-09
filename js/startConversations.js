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

    const keyboardListener = new KeyboardListener(/* object */);

    keyboardListener.keydown(this.next.bind(this));
  }
  next() {
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
      this.reflectingResults();
    }
  }

  timeCount() {
    this.start = 5000;

    this.timer = setInterval(this.gameOver.bind(this), 100);
  }
  gameOver() {
    let is_over = false;
    this.start -= 10;
    // this.start = this.start - this.start * 0.09;
    this.bar.style.width = this.start / 50 + "%";

    if (this.start < 0) {
      alert("game was over!");
      clearInterval(this.timer);
      this.start = 5000;
      return;
    }
  }

  finishConversation() {}
  reflectingResults() {
    const button = this.shadowroot.querySelector("button");
    let isStatusOk = false;
    let status = "loading";
    const count = parseInt(button.getAttribute("data-grammarly-count"));

    console.log(count);
    const statusTimer = setInterval(function () {
      if (status === "ok") {
        updateStatus();
      }
      status = button.getAttribute("data-grammarly-status");
    }, 100);

    function updateStatus() {
      clearInterval(statusTimer);
      if (count === 0) {
        alert("Exellent");
      } else if (count < 3) {
        alert("good");
      } else {
        alert("bad");
      }

      return true;
    }
  }
}
