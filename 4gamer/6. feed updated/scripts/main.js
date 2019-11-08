var all_themes = document.getElementsByClassName("theme");

function onLoad() {
  get_content();
}

function get_content() {
  fetch("scripts/content.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(content) {
      populate(content);
    });
}

function populate(content) {
  var feed = document.getElementById("feed");


  for (i = 0; i < content.length; i++) {

    var type_str = content[i].type;
    var title_str = content[i].title;
    var lead_str = content[i].lead;
    var picture_url = content[i].picture;
    var featured = content[i].featured;
    var themes = content[i].themes;
    var theme_list = [];
    var phat = "<div class='theme phat'>Жир</div>";

    for (n = 0; n < themes.length; n++) {
      theme_list[n] = "<div class='theme'>" + themes[n].theme + "</div>";
    };

    if (featured === true) {
      theme_list.unshift(phat);
    };

    var picture = "<div class='thumb' style='background-image: url(" + picture_url + ")'></div>";
    var type = "<div class='type'>" + type_str + " <span style='font-style:italic'>IIII</span></div>";
    var title = "<div class='title'>" + title_str + "</div>";
    var lead = "<div class='lead'>" + lead_str + "</div>";
    var tags = "<div class='themes'>" + theme_list.join("") + "</div>";

    var snippet = "<div class='snippet'>" + picture + type + title + lead + tags + "</div>";
    feed.innerHTML = snippet + feed.innerHTML;
  };

}

function switch_tags(preset) {
  fetch("scripts/config.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(config) {
      togalala(config, preset.htmlFor);
    });
}

function togalala(config, character) {

  for (i = 0; i < all_themes.length; i++) {
    all_themes[i].classList.remove("showtime");
  }

  for (i = 0; i < config.length; i++) {
    if (config[i].type == character) {
      var themes_preset = config[i].themes;
    }
  }

  for (i = 0; i < themes_preset.length; i++) {
    console.log(themes_preset[i]);
    for (n = 0; n < all_themes.length; n++) {
      if (all_themes[n].innerHTML == themes_preset[i]) {
        all_themes[n].classList.add("showtime");
      }
    }
  }

}

function turn_all_tags_on() {
  for (i = 0; i < all_themes.length; i++) {
    all_themes[i].classList.add("showtime");
  }
}
