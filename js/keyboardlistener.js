keyboardListener();
function keyboardListener() {
  /* document.addEventListener("keypress", function (event) {
    const name = event.key;
    const code = event.code;
    const metakye = event.metaKey;
    alert(`Key pressed ${name} \r\n Key code value: ${code} ${metakye}`);
  }); */
  document.addEventListener("keydown", function (event) {
    if (event.key === "j" && (event.ctrlKey || event.metaKey)) {
      alert("command+j");
    }
  });
}
