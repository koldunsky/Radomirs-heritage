var global_top = 0;
var global_center = 1;

function onLoad() {
  get_content();
}

function get_content(custom) {
  fetch("scripts/content.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(content) {
      populate(content, custom);
    });
}

function populate(content, custom) {
  var feed = document.getElementById("feed");

  for (i = 0; i < content.length; i++) {

    var theme_str = content[i].theme;
    var ru_str = content[i].ru;

    var picture = "<div class='thumb' style='background-image:url(images\/theme_covers\/" + theme_str + "-0.jpg)'></div>";
    var theme = "<div class='theme_wrap'><div class='theme'>" + ru_str + "</div></div>";

    if (custom === "top") {
      layout = theme + picture;
    } else {
      layout = picture + theme;
    }

    var snippet = "<div class='snippet'>" + layout + "</div>";
    feed.innerHTML = snippet + feed.innerHTML;
  };
}

function switch_layout(trigger) {
  var style = trigger.htmlFor.split("-");
  if (feed.classList.contains("leftie") == true) {
    feed.classList = "leftie";
  } else {
    feed.classList = "";
  }
  feed.classList.add("feed");
  feed.classList.add(style[0], style[1]);
}

function theme_top() {
  var feed = document.getElementById("feed");
  feed.innerHTML = "";

  if (global_top === 0) {
    console.log(123);
    get_content("top");
  } else {
    get_content();
  }

  global_top = 1 - global_top;
}

function theme_center() {
  feed.classList.toggle("leftie");
}
