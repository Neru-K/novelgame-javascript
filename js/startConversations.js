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
    this.k5.style.visibility = "hidden";

    const checkbutton = document.querySelector(".checkbutton");
    checkbutton.addEventListener("click", function (v) {
      this.k5.style.visibility = "visible";
    });

    //キー操作
    /* multiKeyListener(this.div, "Enter", "ctrl", function () {
      if (this.is_visible) {
        this.div.innerHTML = "";
        this.k5.style.visibility = "hidden";
        this.is_visible = false;
        talk.talkRandomly((phrase) => {
          h2.innerHTML = '"' + phrase + '"';
        });
      } else {
        k5.style.visibility = "visible";

        this.is_visible = true;
      }
    }); */
    const object = { div: this.div, k5: this.k5, is_visible: this.is_visible };

    keyboardListener(object, function (event) {
      if (event.code === "Enter" && (event.ctrlKey || event.metaKey)) {
        if (object.is_visible) {
          object.div.innerHTML = "";
          object.k5.style.visibility = "hidden";
          object.is_visible = false;
          this.talk.talkRandomly((phrase) => {
            h2.innerHTML = '"' + phrase + '"';
          });
        } else {
          object.k5.style.visibility = "visible";

          object.is_visible = true;
        }
      }
    });
  }

  goNext() {
    multiKeyListener(this.div, "Enter", "ctrl", function () {
      if (this.is_visible) {
        this.div.innerHTML = "";
        this.k5.style.visibility = "hidden";
        this.is_visible = false;
        talk.talkRandomly((phrase) => {
          h2.innerHTML = '"' + phrase + '"';
        });
      } else {
        k5.style.visibility = "visible";

        this.is_visible = true;
      }
    });
  }

  judgingResult() {}
}
