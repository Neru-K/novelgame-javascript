//https://codepen.io/Podgro/pen/GoRyZV

class novelMainLoop {
  constructor(config) {
    this.element = config.element;
    this.bgcanvas = this.element.querySelector(".background-layer");
    this.charcanvas = this.element.querySelector(".character-layer");
    this.bgctx = this.bgcanvas.getContext("2d");
    this.charctx = this.charcanvas.getContext("2d");
  }

  loadBackgroundImage() {
    const img = new Image();

    img.addEventListener("load", (event) => {
      this.bgctx.drawImage(img, 0, 0);
    });

    img.src = "/images/novel/background/田舎の家の縁側（日中）.jpg";
  }

  loadCharacterImage() {
    const img = new Image();

    img.addEventListener("load", (event) => {
      const posX = (this.bgcanvas.width - img.width) / 2;
      this.charctx.drawImage(img, posX, 100);
    });

    img.src = "/images/novel/character/patient/josei_11_a.png";
    //img.src = "/images/novel/character/patient/josei_11_gray.png";
  }

  createMessageBox() {
    this.canvas.innerHTML(`
      <div class="message_box">
      </div>
    `);
  }

  init() {
    this.loadBackgroundImage();
    this.loadCharacterImage();
  }
}

(function () {
  window.addEventListener("load", (event) => {
    const novel = new novelMainLoop({
      element: document.querySelector(".game-container"),
    });
    novel.init();
    const message = new NovelTextMessage({
      texts: [
        "女性「サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト」",
        "サンプルテキスト2サンプルテキスト2サンプルテキスト2サンプルテキスト2サンプルテキスト2",
      ],
      onComplete: () => resolve(),
    });
    message.init(document.querySelector(".game-container"));
  });
})();
