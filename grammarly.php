<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="/style/reset.css" type="text/css" rel="stylesheet" />
  <link href="/style/novel.css" type="text/css" rel="stylesheet" />
  <link href="/style/text_message.css" type="text/css" rel="stylesheet" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  <title>ノベルゲーム</title>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@400;500&display=swap");
  </style>
  <style>
    .k5xt8o2 {
      visibility: hidden !important;
    }
  </style>
  <style>
    .grammarly-container {
      position: relative;
      width: 800px;
      height: 350px;
      margin: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid;
      resize: both;
      padding: 8px 12px;
      background-color: #4e82d5b8;
      color: #fff;
    }

    .grammarly-container h2 {
      margin-bottom: 20px;
    }

    [contenteditable] {
      font: inherit;
      line-height: 1.5;
      overflow: scroll;
      height: 230px;
      z-index: 10;
      font-family: "Noto Sans Mono", monospace;
    }

    [contenteditable]:focus-visible {
      outline: none;
    }

    [contenteditable] p {
      font-size: 25px;
      font-weight: 500;
    }

    .checkbutton {
      font-size: 35px;
      transition: opacity .15s;
      cursor: pointer;
      caret-color: transparent;
    }

    .checkbutton:hover {
      opacity: .6;
    }

    .grammarly-bottom {
      display: flex;
      flex-wrap: nowrap;
      position: absolute;
      bottom: 0;
      width: calc(100% - 35px);
    }

    /* progress */

    .progress-container {
      margin: 0 auto;
      width: 99%;
      text-align: center;
      position: relative;
      margin: 10px 15px 20px 0;
    }

    .progress2 {
      border-radius: 30px;
      background-color: #fff;
    }

    .progress-bar2 {
      height: 18px;
      border-radius: 30px;
      transition: 0.4s linear;
      transition-property: width, background-color;
    }

    .progress-moved .progress-bar2 {
      background-color: #f3c623;
      animation: progress 15s forwards;
    }

    @keyframes progress {
      100% {
        width: 0%;
        background: #f9bcca;
      }

      0% {
        width: 100%;
        background: #f3c623;
        box-shadow: 0 0 40px #f3c623;
      }
    }
  </style>
</head>

<body>
  <div id="game-container">
    <canvas id="background-layer" width="1920" height="1080"></canvas>
    <canvas id="character-layer" width="1920" height="1080"></canvas>
    <!-- <div class="grammarly-container"> -->

    <grammarly-editor-plugin>
      <div class="grammarly-container">
        <h2>The basics</h2>
        <div contenteditable="true" onpaste="return false;" oncontextmenu="return false;">
          <p>
            Mispellings and grammatical errors can effect your credibility.
            The same goes for misused commas, and other types of punctuation .
            Not only will Grammarly underline these issues in red, it will
            also showed you how to correctly write the sentence.
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
  <script src="/js/keyboardlistener.js"></script>
  <script src="/js/revealTextMessage.js"></script>
  <script src="https://unpkg.com/@grammarly/editor-sdk?client_8R9ajQZq6iuwo3D3Qdpk7T"></script>
  <script>
    document
      .querySelectorAll("grammarly-editor-plugin")
      .forEach((grammarlyEditor) => {
        grammarlyEditor.config = {
          autocomplete: "off",
          documentDialect: "american",
          // toneDetector: "on",
          documentDomain: "casual",
        };
      });

    window.addEventListener("load", function() {
      const created = document.querySelector("grammarly-editor-plugin");
      const shadowroot = created.shadowRoot;
      console.log(shadowroot);
      console.log(shadowroot.querySelectorAll("div"));
      const k5 = shadowroot.querySelector(".k5xt8o2");
      k5.style.visibility = "hidden";

      const checkbutton = document.querySelector('.checkbutton');
      checkbutton.addEventListener('click', function(v) {
        k5.style.visibility = "visible";
      });

      const div = document.querySelector("grammarly-editor-plugin > div");
      multiKeyListener(div, "Enter", "ctrl", function() {
        k5.style.visibility = "visible";
      })
    });
  </script>
  <script src="/js/conversation.js">
    readConv();
  </script>
  <script src="/js/main.js"></script>
</body>

</html>

<!-- $client_id = $_ENV['CLIENT_ID']; -->