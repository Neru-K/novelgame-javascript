const textmessage = new TextMessage();
const clayer = document.querySelector("#character-layer");
let index = 0;

let day1 = [
  {
    character: "",
    expression: "",
    text: [
      "うだるような暑さだ。",
      "セミの鳴き声が絶え間なく聞こえてくる。",
      "俺は縁側でシャツをはだけながら、何をするでもなく寝そべっていた。",
      "口に咥えたシャーベットアイスが溶けて垂れそうだ。",
    ],
  },
  { character: "？？", expression: "", text: ["だらしないなぁ。"] },
  { character: "せまゆき", expression: "", text: ["んあ？"] },
  {
    character: "ひかげ",
    expression: "normal",
    text: ["そんなにお腹丸出しにして。お腹こわしても知らないよ。"],
  },
  { character: "せまゆき", expression: "", text: ["なんだ、ひかげか。"] },
  {
    character: "",
    expression: "",
    text: [
      "こいつはひかげ。俺の伯母の娘。つまり俺の従姉妹にあたる。",
      "俺は今、夏休みの暇な時間を利用して田舎のばーちゃんちに帰省していた。",
      "ひかげと会うのも1年ぶりか。",
      "・・・",
      "それにしても・・・",
    ],
  },
  {
    character: "ひかげ",
    expression: "question",
    text: ["？", "どうしたの？　そんなにじっとわたしの顔を見て。"],
  },
  {
    character: "せまゆき",
    expression: "",
    text: ["いや、大きくなったなと思って。"],
  },
  {
    character: "ひかげ",
    expression: "smile",
    text: ["なに言ってるの。", "さすがに身長はもう伸びてないよ。"],
  },
  {
    character: "",
    expression: "",
    text: [
      "そうだったか？",
      "子どもの頃のイメージが強いからか、ずいぶん成長したような気がするが、俺の勘違いだろう。",
    ],
  },
  {
    character: "せまゆき",
    expression: "",
    text: ["顔がでかくなった。"],
  },
  {
    character: "ひかげ",
    expression: "angry",
    text: [
      "うわ、ひっど〜〜い！",
      "そういう意地悪なところ変わってないんだね。",
    ],
  },
  {
    character: "",
    expression: "",
    text: ["ひかげは非難がましい目で俺を見つめながら、頬を膨らませた。"],
  },
];

function handleClick() {
  textmessage.displayText();
}

clayer.addEventListener("click", handleClick);
