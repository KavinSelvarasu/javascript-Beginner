var slideIndex = 1;
var Prev = document.getElementById("prev");
var next = document.getElementById("next");

function slideShow(n) {
  var i;
  var slides = document.getElementsByClassName("img");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
slideShow(slideIndex);
function NextSlide(n) {
  slideShow((slideIndex += n));
}
next.addEventListener("click", (e) => {
  NextSlide(1);
});
Prev.addEventListener("click", () => {
  NextSlide(-1);
});
