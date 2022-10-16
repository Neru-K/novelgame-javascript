class ShowResult {
  constructor(cp_phrases, user_phrases) {
    this.background = document.querySelector("#background-layer");
    this.character = document.querySelector("#character-layer");
    this.game = document.querySelector("#game-container");
    this.grammarly = document.querySelector(".grammarly-container");
    this.cp_phrases = cp_phrases;
    this.user_phrases = user_phrases;
    this.element = null;
  }

  showResult() {
    this.background.classList.add("filter");
    this.character.classList.add("filter");
  }
  createElement(cp_phrase, user_phrase) {
    this.element = document.createElement("div");
    this.element.classList.add("result-container");
    this.element.innerHTML = `
      <grammarly-editor-plugin>
        <div class="result-window customScrollbar" contenteditable="true" onpaste="return false;" oncontextmenu="return false;">
          <p>${cp_phrase}</p>
          <p contenteditable="true">${user_phrase}</p>
        </div>
      </grammarly-editor-plugin>
    `;
  }
  init() {
    this.grammarly.classList.remove("show");
    for (let i = 0; i < this.cp_phrases.length; i++) {
      this.createElement(this.cp_phrases[i], this.user_phrases[i]);
      if (i === 0) {
        this.element.classList.add("show");
      }
      this.game.appendChild(this.element);
    }
  }
}
