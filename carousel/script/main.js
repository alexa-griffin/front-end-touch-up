var slideConainer = document.getElementsByClassName("slides")[0]
var slides = document.getElementsByClassName("slide")

var leftNav = document.getElementById("left-nav")
var rightNav = document.getElementById("right-nav")

var activeSlide = 0

var scalars = {
  title: 0.1,
  img: 0.3,
  card: 0.2,
}

slideConainer.addEventListener("scroll", function(e) {
  for(var i = 0; i < slides.length; i++) {
    var slide = slides[i].childNodes[1] // container child node
    var scalar = e.currentTarget.scrollLeft - slides[i].offsetLeft
    for(var j = 0; j < slide.childNodes.length; j++) {
      var el = slide.childNodes[j]
      if(el.nodeType !== 3) {
        el.style.transform = "translateX(" + (scalar * scalars[el.classList[0]]) + "px)"
      }
    }
  }
})

function updateSlides() {
  console.log(activeSlide)
  slideConainer.scrollTo({
    left: slides[activeSlide].offsetLeft,
    behavior: 'smooth' 
  })
}

leftNav.addEventListener("click", function(e) {
  activeSlide = activeSlide - 1 < 0 ? slides.length - 1 : activeSlide - 1
  updateSlides()
})

rightNav.addEventListener("click", function(e) {
  activeSlide = slides.length - 1 < activeSlide + 1 ? 0 : activeSlide + 1
  updateSlides()
})