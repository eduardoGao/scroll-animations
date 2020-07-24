const images = document.querySelectorAll('.show')
const scroll = window.requestAnimationFrame


function isInViewport(element) {
  let rectangule = element.getBoundingClientRect()
  // console.log(document.documentElement)
  return rectangule.top <= (window.innerHeight || document.documentElement.clientHeight)
}

function handleVisibility() {
  images.forEach(function(image) {
    if(isInViewport(image)) {
      image.classList.add("visible")
    } else {
      image.classList.remove("visible")
    }
  })
  scroll(handleVisibility)
}

handleVisibility()