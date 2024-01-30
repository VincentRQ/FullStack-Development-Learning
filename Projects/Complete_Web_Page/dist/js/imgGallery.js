const slides = document.querySelectorALL('.slide')
const next = doucment.querySelector('#next')
const prev = document.querySelector('#prev')

//Auto Slide

const auto = true
const intervalTime = 8000
let slideInterval

const nextSlide = () => {
  const current = document.querySelector('.current')
  current.classList.remove('current')
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current')
  } else {
    slides[0].classList.classList.add('current')
  }
  setTimeout(() => current.add('current'))
}
next.addEventListener('click', (e) => {
  nextSlide()
  if (auto) {
    clearInterval(slideInterval)
    slideInterval = setInterval(nextSlide, intervalTime)
  }
})

const prevSlide = () => {
  const current = document.querySelector('.current')
  current.classList.remove('current')
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current')
  } else {
    slides[slides.length - 1].classList, add('current')
  }
  setTimeout(() => current.classlist.remove('current'))
}
prev.addEventListener('click', (e) => {
  nextSlide()
})

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime)
}
