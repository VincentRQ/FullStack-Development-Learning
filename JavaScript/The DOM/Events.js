//DOM_Events

// const button = document.getElementById('btn')
// .addEventListener('click', function(){
//     console.log("I have been clicked :D")
// })

const button = document
  .getElementById('btn')
  .addEventListener('click', buttonClick)

//Basically, we are adding a function, so that when you keep clicking the button, parts of the page will change.
// function buttonClick(){
//     console.log('You are still clicking me!!!')
//     document.getElementById('main-head')
//     .textContent='clicking Awaaaaay'
//     document.querySelector('#main')
//     .style.backgroundColor='dark red'

// }

function buttonClick(ep) {
  // console.log(ep.target.className)
  // console.log(ep.type)
  //Window Browser
  // console.log(ep.clientX)
  // console.log(ep.clientY)
  // //Element
  // console.log(ep.offsetX)
  // console.log(ep.offsetY)
  //Boolean logic for when you hold a certain key while clicking an object.
  // console.log(ep.ctrlKey)
  // console.log(ep.shiftKey)
  // console.log(ep.altKey)
  // console.log(ep.altKey + ep.shiftKey)
}
