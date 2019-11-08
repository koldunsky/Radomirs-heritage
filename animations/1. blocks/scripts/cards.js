function toggle_cards() {
  var cards = document.getElementsByClassName("card");

  for (i = 0; i < cards.length; i++) {
    wrapper(i, cards[i]);
  }
}

function wrapper(position, card) {
  setTimeout(function() {
    reveal(card);
  }, position*25);
}

function reveal(card) {
  card.classList.toggle("show");
  card.classList.toggle("hidden");
  card.classList.toggle("hide");
}
