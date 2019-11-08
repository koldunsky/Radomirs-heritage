function tab_underscore(tab) {
  /* check if Element or just id */
  if (tab instanceof Element) {

  } else {
    var tab = document.getElementById("tab" + tab + "_caption");
  }

  console.log(tab);

  var underscore = document.getElementById("tab_underscore_" + tab.getAttribute("for").match(/\d/g));
  var position = tab.offsetLeft;
  var width = getComputedStyle(tab).getPropertyValue("width");

  console.log(tab.getAttribute("for").match(/\d/g));
  underscore.style.width = width;
  underscore.style.left = position;
}
