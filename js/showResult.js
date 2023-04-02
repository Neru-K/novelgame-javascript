class ShowResult {
  constructor(cp_phrases, user_phrases) {
    this.background = document.querySelector("#background-layer");
    this.character = document.querySelector("#character-layer");
    this.div = document.querySelector(".input-window");
    this.h2 = document.querySelector(".conv-title");
    this.cp_phrases = cp_phrases;
    this.user_phrases = user_phrases;
    this.element = null;
  }

  showResult() {
    this.background.classList.add("filter");
    this.character.classList.add("filter");
  }
  createElement(cp_phrase, user_phrase) {
    const element = document.createElement("grammarly-editor-plugin");
/*     this.h2.innerHTML = cp_phrase;
    this.div.innerHTML = user_phrase; */
    element.innerHTML
  }
  init() {
    this.createElement(this.cp_phrases[0], this.user_phrases[1]);
  }
}
