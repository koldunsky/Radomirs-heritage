var chance = 3; //вероятность загорания звезды в %
var interval = 500; // интервал ролла


const startStarAnimation = (node, chance, interval) => {
  if (node.classList.contains("animated") == true) {
    // если уже анимируется — не трогаем звезду
    return
  } else {
    setInterval(() => {
        if (roll(chance) == true) {
          // если положительный ролл — начинаем анимацию
          node.classList.add("animated");
          setTimeout(function () {
            node.classList.remove("animated")
          }, 3000);
          // и через три секунды сбрасываем класс, чтоб можно было заанимировать снова
        }
      }, interval);
    }
};

function onLoad() {
  get_content();
}

function get_content() {
  // фетчим звёзды из джейсона и заполняем баннер
  fetch("stars.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(content) {
      populate(content);
    });
}

function populate(content) {
  var feed = document.getElementById("banner");

  for (i = 0; i < content.length; i++) {

    // распологаем звёзды на баннере
    var star = "<div class='object "+ content[i].type +"' style='left: " + content[i].x + "; top: " + content[i].y + ";'></div>";
    feed.innerHTML = feed.innerHTML + star;
  };

  var nodes = document.getElementsByClassName('object');


  // запускаем анимационный процесс
  Array.from(nodes).forEach(node => {
    startStarAnimation(node, chance, interval);
  });
}



function roll(chance) {
  // ролл от 1 до 100 и чек на вероятность
  var roll = Math.floor(Math.random() * (100 / chance)) + 1;

  if (roll == 1) {
    return true
  } else {
    return false
  }

}
