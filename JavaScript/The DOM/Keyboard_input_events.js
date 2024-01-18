// Keyboard and Input Events

let itemInput = document.querySelector('input[type="text"]')
let form = document.querySelector('form')
//Here we are calling the variable we just created.
itemInput.addEventListener('keydown', keyEvents)

function keyEvents(ep) {
  console.log('Event Type:' + ep.type)
  //   console.log(ep.target.value)
  document.getElementById('circle').innerHTML = '<p style>'
}
