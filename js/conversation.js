readConv();

function readConv() {
  fetch("/assets/conv/conv.json")
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      console.log(jsondata.patient.greeting2[0].phrase);
    });
}
