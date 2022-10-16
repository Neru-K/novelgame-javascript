class TalkRandomly {
  constructor() {
    this.phrases = [];
    this.level = 0;
    this.cp_phrases = [];
    this.user_phrases = [];
  }
  #getDividedPhrases(callback) {
    fetch("/assets/conv/topics.json")
      .then((response) => {
        return response.json();
      })
      .then((jsondata) => {
        return jsondata.phrase[1];
      })
      .then((phrases) => {
        const num = Math.ceil(phrases.length / 10);
        let outer_array = [];

        //フレーズをレベル別に二次元配列に分ける
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
      if (this.level < phrases.length) {
        const part_of_phrases = phrases[this.level];
        const phrase =
          part_of_phrases[Math.floor(Math.random() * part_of_phrases.length)];
        callback(phrase);
        this.level++;
      } else {
        this.showResult = new ShowResult(this.cp_phrases, this.user_phrases);
        this.showResult.showResult();
        this.showResult.init();
      }
    });
  }
}
