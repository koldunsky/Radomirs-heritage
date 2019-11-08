function toggle_content() {
  for (i = 0; i < content.length; i++) {
    reveal(content[i]);
  }
}

function content_interaction() {

  var card_wrapper = document.getElementById("toggable");
  var card = card_wrapper.childNodes[1];

  setTimeout(function() {
    reveal(card_wrapper);
  }, interaction*150);

  setTimeout(function() {
    reveal(card);
  }, (1 - interaction)*150);

  interaction = 1 - interaction;
}

function reveal(card) {
  card.classList.toggle("show");
  card.classList.toggle("hidden");
  card.classList.toggle("hide");
}
