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
    this.balloon = document.querySelector(".balloon3-right-btm");
    this.balloon_icon = this.balloon.querySelectorAll(
      ".material-symbols-outlined"
    );
    this.button;
    this.is_visible = false;
    this.is_finished_counting = false;
    this.start;
    this.timer = 0;
    this.statusTimer = 0;
  }

  init() {
    this.plugin.config = {
      autocomplete: "off",
      documentDialect: "american",
      // toneDetector: "on",
      documentDomain: "casual",
    };
    this.container.classList.add("show");
    const keyboardListener = new KeyboardListener();
    keyboardListener.keydown(this.next.bind(this));
  }
  next() {
    //リファクタリングの必要あり。フレーズ出力と、スコアチェックでメソッドを分けた方がよさそう。
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
        this.countScores();
      }
    }
  }
  /* checkStatus(){
    const status = this.button.getAttribute("data-grammarly-status");
    if(status === 'ok'){
      return true;
    }else{
      return false;
    }

    ・is_visible
    ・is_finished_counting
  } */
  timeCount() {
    this.start = 5000;
    //誤動作で無限ループしないように（キー連打でsetTimerの際に複数の値が入る可能性）
    if (this.timer === 0) {
      this.timer = setInterval(this.gameOver.bind(this), 100);
    }
  }
  gameOver() {
    let is_over = false;
    this.start -= 10;
    this.bar.style.width = this.start / 50 + "%";

    if (this.start < 0) {
      alert("game was over!");
      clearInterval(this.timer);
      this.timer = 0;
    }
  }

  finishConversation() {}
  countScores() {
    this.button = this.shadowroot.querySelector("button");
    //ローディングをつける
    if (this.statusTimer === 0) {
      this.statusTimer = setInterval(this.updateStatus.bind(this), 100);
    }
  }
  updateStatus() {
    const count = parseInt(this.button.getAttribute("data-grammarly-count"));
    const status = this.button.getAttribute("data-grammarly-status");
    this.balloon.classList.remove("active");
    if (status == "ok") {
      this.balloon_icon.forEach(function (element) {
        element.classList.remove("active");
      });
      if (count === 0) {
        this.balloon_icon[0].classList.add("active");
        this.balloon.classList.add("active");
      } else if (count < 3) {
        this.balloon_icon[1].classList.add("active");
        this.balloon.classList.add("active");
      } else {
        this.balloon_icon[2].classList.add("active");
        this.balloon.classList.add("active");
      }
      this.clearStatusTimer(this.statusTimer);
    }
  }

  clearStatusTimer(timer) {
    clearInterval(timer);
    this.statusTimer = 0; //誤動作で無限ループしないように（キー連打でsetTimerの際に複数の値が入る可能性）
  }
}
