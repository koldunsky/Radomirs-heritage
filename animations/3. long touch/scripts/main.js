function onLoad() {

  var items = document.getElementsByClassName("filling");

  for (i = 0; i < items.length; i++) {
    items[i].addEventListener("mousedown", handleStart, false);
    items[i].addEventListener("mouseup", handleEnd, false);
  }

}

function handleStart(event) {
  var abcd = event.target;
  console.log(abcd + " on");
}

function handleEnd(event) {
  var abcd = event.target;
  console.log(abcd + " off");
}
