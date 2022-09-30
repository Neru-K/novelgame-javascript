class TalkRandomly {
  constructor() {
    this.phrases = this.getDividedPhrases();
    this.level = 0;
  }
  getDividedPhrases() {
    fetch("/assets/conv/phrases.json")
      .then((response) => {
        return response.json();
      })
      .then((jsondata) => {
        return jsondata.phrase[0];
      })
      .then((phrases) => {
        const num = Math.floor(phrases.length / 10);
        let outer_array = [];

        for (let i = 0; i < phrases.length; i = i + num) {
          let inner_array = [];
          for (let j = i; j < i + 10; j++) {
            inner_array.push(phrases[j]);
          }
          outer_array.push([inner_array]);
        }
        return outer_array;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  talkRandomly(callback) {
    const block_of_phrases = this.phrases[this.level];
    const phrase =
      block_of_phrases[Math.floor(Math.random() * block_of_phrases.length)];
    callback(phrase);
    this.level++;
  }

  /* function talkRandomly(callback) {
  fetch("/assets/conv/phrases.json")
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      const phrases = jsondata.phrase;
      const phrase = phrases[Math.floor(Math.random() * phrases.length)].phrase;
      callback(phrase);
    })
    .catch((e) => {
      console.log(e);
    });
} */
}
