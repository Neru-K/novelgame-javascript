<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="/style/reset.css" type="text/css" rel="stylesheet" />
  <link href="/style/novel.css" type="text/css" rel="stylesheet" />
  <link href="/style/text_message.css" type="text/css" rel="stylesheet" />
  <link href="/style/grammarly.css" type="text/css" rel="stylesheet" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  <title>ノベルゲーム</title>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@400;500&display=swap");
  </style>
</head>

<body>
  <div id="game-container">
    <canvas id="background-layer" width="1920" height="1080"></canvas>
    <canvas id="character-layer" width="1920" height="1080"></canvas>
    <!-- <div class="grammarly-container"> -->

    <grammarly-editor-plugin>
      <div class="grammarly-container">
        <h2 class="conv-title"></h2>
        <div class="input-window" contenteditable="true" onpaste="return false;" oncontextmenu="return false;">
          <p>
          </p>
        </div>
        <div class="grammarly-bottom">
          <div class="progress-container">
            <div class="progress2 progress-moved">
              <div class="progress-bar2"></div>
            </div>
          </div>
          <span class="checkbutton material-symbols-outlined">
            check_circle
          </span>
        </div>
      </div>
    </grammarly-editor-plugin>
    <!-- </div> -->

    <div class="message_box">
      <p class="text_message_p"></p>
    </div>
  </div>
  <script src="/js/talkRandomly.js"></script>
  <script src="/js/keyboardlistener.js"></script>
  <script src="/js/revealTextMessage.js"></script>
  <script src="https://unpkg.com/@grammarly/editor-sdk?clientId=client_8R9ajQZq6iuwo3D3Qdpk7T"></script>
  <script src="js/startConversations.js">

  </script>

  <script src="/js/main.js"></script>
</body>

</html>