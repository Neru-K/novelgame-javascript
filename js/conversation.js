function readConv() {
  fetch("/assets/conv/conv.json")
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      console.log(jsondata.patient.greeting2[0].phrase);
    });
}

function talkRandomly(callback) {
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
