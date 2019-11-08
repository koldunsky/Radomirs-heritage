function toggle_profile() {
  var profile = document.getElementById("profile").classList;
  var content = document.getElementById("content").classList;
  var paranja = document.getElementById("paranja").classList;


      content.toggle("zoomed");
      content.toggle("hide");
      content.toggle("show");

      profile.toggle("profile_popped");
      profile.toggle("show");
      profile.toggle("hide");

      paranja.toggle("enabled");
      paranja.toggle("hide");
      paranja.toggle("show");
}

function toggle_overlay() {
  var content = document.getElementById("content").classList;
  var overlay_button = document.getElementById("overlay_button").classList;
  var overlay = document.getElementById("overlay").classList;

  content.toggle("zoomed");
  content.toggle("hide");
  content.toggle("show");

  overlay.toggle("hidden");
  overlay.toggle("show");
  overlay.toggle("hide");

  overlay_button.toggle("hidden");
  overlay_button.toggle("show");
  overlay_button.toggle("hide");
}

function toggle_toast() {
  var toast = document.getElementById("toast").classList;

  toast.toggle("hidden");
  toast.toggle("show");
  toast.toggle("hide");
}
