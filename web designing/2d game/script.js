"use strict";

// main function
function key(event) {
  if (event.which == 13) {
    if (rw == 0) {
      fid = f();
      rw = setInterval(run, 100);
      runSound.play();

      bw = setInterval(bg, 100);
      sw = setInterval(updateScore, 100);
      fw = setInterval(move, 100);
    }
  }

  if (event.which == 32) {
    if (jw == 0) {
      clearInterval(rw);
      runSound.pause();

      jw = setInterval(jump, 100);
      jumpSound.play();
    }
  }
}

// sounds
var runSound = new Audio("run.mp3");
runSound.loop = true;

var jumpSound = new Audio("jump.mp3");

var deadSound = new Audio("dead.mp3");

// obstacles creation
var fid = 0;

var t = 600;

function f() {
  for (var y = 0; y < 10; y++) {
    var a = document.createElement("img");

    a.src = "flame.gif";

    a.className = "f";

    a.style.marginLeft = t + "px";

    if (y <= 5) {
      t = t + 700;
    }

    if (y >= 6) {
      t = t + 500;
    }

    a.id = "d" + y;

    document.getElementById("b").appendChild(a);
  }
}

// Run function
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

// background move in -x direction
var b = 0;

var bw = 0;

function bg() {
  b = b - 20;
  document.getElementById("b").style.backgroundPositionX = b + "px";
}

// score change
var sw = 0;

var s = 0;

function updateScore() {
  s = s + 10;

  document.getElementById("score").innerHTML = s;
}

// jump animation

var jw = 0;

var j = 1;

var jd = 290;

function jump() {
  var jimg = document.getElementById("boy");

  if (j <= 6) {
    jd = jd - 30;
  }

  if (j >= 7) {
    jd = jd + 30;
  }

  jimg.style.marginTop = jd + "px";

  j = j + 1;

  if (j == 13) {
    j = 1;

    clearInterval(jw);

    jw = 0;

    rw = setInterval(run, 100);
    runSound.play();

    if (fid == 0) {
      fid = f();
    }

    if (bw == 0) {
      bw = setInterval(bg, 100);
    }

    if (sw == 0) {
      sw = setInterval(updateScore, 100);
    }

    if (fw == 0) {
      fw = setInterval(move, 100);
    }
  }

  jimg.src = "Jump (" + j + ").png";
}

// move function

var fw = 0;

function move() {
  for (var y = 0; y < 10; y++) {
    var z = getComputedStyle(document.getElementById("d" + y));

    var p = parseInt(z.marginLeft);

    p = p - 20;

    document.getElementById("d" + y).style.marginLeft = p + "px";

    if (p >= 80 && p <= 140) {
      if (jd > 180) {
        clearInterval(rw);

        runSound.pause();

        clearInterval(jw);

        jw = -1;

        clearInterval(sw);

        clearInterval(bw);

        clearInterval(fw);

        deadWorker = setInterval(dead, 100);
        deadSound.play();
      }
    }
  }
}

// dead animation

var deadWorker = 0;

var deadImageNo = 1;

function dead() {
  var deadImg = document.getElementById("boy");

  deadImageNo = deadImageNo + 1;

  if (deadImageNo == 11) {
    deadImageNo = 10;
    
    document.getElementById("boy").style.marginTop = "290px";

    document.getElementById("end").style.visibility = "visible";
    
    document.getElementById("endScore").innerHTML = s;
  }

  deadImg.src = "Dead (" + deadImageNo + ").png";
}

function re(){
  location.reload();
}