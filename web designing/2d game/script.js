"use strict";
function key(event) {
  if (event.which == 13) {
    f();
  }

  if (event.which == 32) {
    alert("Space");
  }
}

var t = 600;

function f() {
  for (var y = 0; y < 10; y++) {
    var a = document.createElement("img");

    a.src = "flame.gif";

    a.className = "f";

    a.style.marginLeft = t + "px";

    t = t + 600;
    document.getElementById("b").appendChild(a);
  }
}
