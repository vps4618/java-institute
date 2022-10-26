"use strict";

function k(event) {
  if (event.which == 13) {
    if (rw == 0) {
      rw = setInterval(run, 100);
      bw = setInterval(b, 100);
    }
  }
  if (event.which == 32) {
    if (jw == 0) {
      clearInterval(rw);
      jw = setInterval(jump, 100);
    }
  }
}

// run animation
var rw = 0;

var r = 1;

function run() {
  var rimg = document.getElementById("boy");
  r = r + 1;
  if (r == 9) {
    r = 1;
  }
  rimg.src = "Run (" + r + ").png";
}

// background  move
var a = 0;
var bw = 0;

function b() {
  a = a - 20;
  document.getElementById("b").style.backgroundPositionX = a + "px";
}

// jump animation
var jw = 0;
var j = 1;
var t = 290;

function jump() {
  var jimg = document.getElementById("boy");

  if (j <= 6) {
    t = t - 30;
  }

  if (j >= 7) {
    t = t + 30;
  }

  jimg.style.marginTop = t + "px";

  j = j + 1;

  if (j == 13) {
    j = 1;
    clearInterval(jw);
    rw = setInterval(run, 100);
    jw = 0;
  }

  jimg.src = "Jump (" + j + ").png";
}
