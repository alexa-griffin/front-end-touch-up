const header = document.getElementsByTagName("header")[0]
const img = header.getElementsByTagName("img")[0]

header.addEventListener("mousemove", e => {
  const dist = Math.sqrt(( 
    Math.pow((e.clientX) - (header.clientWidth / 2), 2) + 
    Math.pow((e.clientY) - (header.clientHeight / 2), 2) 
  ))

  img.style.animationDuration = dist / header.clientWidth + "s"
})