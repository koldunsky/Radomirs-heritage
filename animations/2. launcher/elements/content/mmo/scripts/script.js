function openiframe() {
  var content = parent.document.getElementById("content").classList;

  content.add("reloading");
  content.add("show");

  setTimeout(reload, 500);
}

function reload() {
  var content = parent.document.getElementById("content").classList;
  parent.document.getElementById("iframe").src = "../2.%20launcher/elements/content/games/kuf";
  content.remove("reloading");
  content.remove("show");
}
