//answer

var answerButton = document.getElementById("answer");
var optionView = document.getElementsByClassName("1");
$(answerButton).click(function (e) {
  e.preventDefault();
  $(optionView).each(function () {
    $(this).toggle("display");
  });
});

//Timer
//varaibles
let status = "stop";
let second = 0;
let minute = 0;
let hour = 0;
let displayTime = 0;

function timeCounter() {
  second++;
  if (second / 60 === 1) {
    second = 0;
    minute++;
  }
  if (minute / 60 === 1) {
    minute = 0;
    hour++;
  }
  var time = (document.getElementById("time").innerHTML =
    hour + ":" + minute + ":" + second);

  if (displayTime < 10) {
    document.getElementById("time").innerHTML =
      "0" + hour + ":" + "0" + minute + ":" + "0" + second;
  }
}
function startStop() {
  if (status === "stop") {
    interval = window.setInterval(timeCounter, 1000);
    document.querySelector(".startButton").innerHTML = "start";
    status = "start";
  } else {
    window.clearInterval(interval);
    document.querySelector(".startButton").innerHTML = "stop";
    status = "stop";
  }
}

// Slide View
const nextButton = document.getElementById("next");
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("question-head");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
    alert(slides.length);
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
nextButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (slideIndex != "5") {
    plusSlides(1);
  } else {
    window.location.href = "./thanks.html";
  }

  console.log(slideIndex);
  if (slideIndex == "5") {
    nextButton.innerHTML = "submit";
  }
});

// Note:  unable to save Json (javascript Object notation) file because  this application is not running in node server, it just simple web page
// unbale to access file server
// Code below

let fileStore = require("fs");
const Element = (e) => ({
  toJSON: () => ({
    tagName: e.tagName,
    textContent: e.textCon,
    timeConsumed: e.time,
  }),
});
const html2json = (e) => JSON.stringify(Element(e), null, "  ");
alert(html2json(document.querySelector(".question-head")));
fileStore.writeFile("./sample.json", html2json, function (err) {
  if (err) {
    console.log(err);
  }
});
