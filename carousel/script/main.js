var slides = document.getElementsByClassName("slide")

var leftNav = document.getElementById("left-nav")
var rightNav = document.getElementById("right-nav")

var activeSlide = 0

function updateSlides() {
  console.log(activeSlide)
}

leftNav.addEventListener("click", function(e) {
  activeSlide = activeSlide - 1 < 0 ? slides.length - 1 : activeSlide - 1
  updateSlides()
})

rightNav.addEventListener("click", function(e) {
  activeSlide = slides.length - 1 < activeSlide + 1 ? 0 : activeSlide + 1
  updateSlides()
})