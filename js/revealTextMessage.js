function initRevealTextMessage(text) {
  let chars = [];
  const text_message_p = document.getElementsByClassName("text_message_p")[0];
  text.split("").forEach((char) => {
    let span = document.createElement("span");
    span.textContent = char;
    text_message_p.appendChild(span);

    chars.push({
      span,
      delayAfter: char === " " ? 0 : 60,
    });
  });

  revealTextMessage(chars);
}

function revealTextMessage(list) {
  const next = list.splice(0, 1)[0];
  console.log(next);
  next.span.classList.add("revealed");

  if (list.length > 0) {
    const timeout = setTimeout(() => {
      revealTextMessage(list);
    }, next.delayAfter);
  } else {
    return true;
  }
}
