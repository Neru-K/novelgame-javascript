class TalkRandomly {
  constructor() {
    this.phrases = [];
    this.level = 0;
  }
  #getDividedPhrases(callback) {
    fetch("/assets/conv/topics.json")
      .then((response) => {
        return response.json();
      })
      .then((jsondata) => {
        return jsondata.phrase[0];
      })
      .then((phrases) => {
        const num = Math.ceil(phrases.length / 10);
        let outer_array = [];

        for (let i = 0; i < 10; i++) {
          let inner_array = [];
          for (let j = i * num; j < (i + 1) * num; j++) {
            if (phrases[j] == undefined) {
              continue;
            }
            inner_array.push(phrases[j]);
          }
          outer_array.push(inner_array);
        }
        this.phrases = outer_array;
        callback(this.phrases);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  talkRandomly(callback) {
    this.#getDividedPhrases((phrases) => {
      const part_of_phrases = phrases[this.level];
      const phrase =
        part_of_phrases[Math.floor(Math.random() * part_of_phrases.length)];
      callback(phrase);
      this.level++;
    });
  }

  sample() {
    this.#getDividedPhrases(function (phrases) {
      console.log(phrases);
    });
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
