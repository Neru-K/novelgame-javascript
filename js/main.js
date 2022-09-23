(function () {
  displayBGImage("/images/background/田舎の家の縁側（日中）.jpg");
  displayCharaImage("/images/character/patient/josei_11_gray.png");
  initRevealTextMessage(
    "女性「サンプルテキストサンプル テキストサンプルテキスト」"
  );
})();

function displayBGImage(src) {
  const canvas = document.querySelector("#background-layer");
  const ctx = canvas.getContext("2d");
  const img = new Image();
  img.src = src;

  img.addEventListener("load", (event) => {
    ctx.drawImage(img, 0, 0);
  });
}

function displayCharaImage(src) {
  const canvas = document.querySelector("#character-layer");
  const bgcanvas = document.querySelector("#background-layer");
  const ctx = canvas.getContext("2d");
  const img = new Image();
  img.src = src;

  img.addEventListener("load", (event) => {
    const posX = (bgcanvas.width - img.width) / 2;
    ctx.drawImage(img, posX, 100);
  });
}
