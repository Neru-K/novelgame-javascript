class StartConversation {
  constructor() {
    this.talk = new TalkRandomly();
    this.plugin = document.querySelector("grammarly-editor-plugin");
    this.container = document.querySelector(".grammarly-container");
    this.div = document.querySelector(".input-window");
    this.h2 = document.querySelector(".conv-title");
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

    //window.addEventListener("load", function () {
    console.log(this.plugin);
    const shadowroot = this.plugin.shadowRoot;
    const k5 = shadowroot.querySelector(".k5xt8o2");
    k5.style.visibility = "hidden";

    const checkbutton = document.querySelector(".checkbutton");
    checkbutton.addEventListener("click", function (v) {
      k5.style.visibility = "visible";
    });

    this.goNext();
    //});
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
