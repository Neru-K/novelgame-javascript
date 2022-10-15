//読み込み時に実行される関数
(function () {
  initRevealTextMessage("女の子「いい縁側ですね 気に入りました」");
  window.addEventListener("load", function () {
    const conversation = new StartConversation();
    conversation.init();
  });
})();
