//読み込み時に実行される関数
(function () {
  //drawBGImage("/images/background/engawa_day.jpg");
  //drawCharaImage("/images/character/patient/josei_11_a.webp");
  initRevealTextMessage("女の子「いい縁側ですね 気に入りました」");
  window.addEventListener("load", function () {
    const conversation = new StartConversation();
    conversation.init();
  });
})();

//背景の描画
function drawBGImage(src) {
  const canvas = document.querySelector("#background-layer");
  const ctx = canvas.getContext("2d");
  const img = new Image();
  img.src = src;

  img.addEventListener("load", (event) => {
    ctx.drawImage(img, 0, 0);
  });
}

//キャラクターの描画
function drawCharaImage(src) {
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
