//Accessing the entire document
console.dir(document)

console.log(document.URL)
console.log(document.domain)
console.log(document.title)
console.log(document.body)
document.title = 'The Title'
console.log(document.doctype)

console.log(document.all)
console.log(document.all[`14`])

// Selecting Methods

// getElementbyID

// console.log(document.getElementByID('header'))
//Here, we are basically grabbing the document's element ID, then changing the actual content of it.

// const headerTitle = document.getElementById('header')

// console.log(headerTitle)

// headerTitle.textContent = 'Andrew  Yung'
// headerTitle.innerText = 'Norbert'

// headerTitle.innerHTML = '<h2>Title</h2>'

// // changing the Style

// headerTitle.style.border = 'solid 5px red'

// //You can also do this not just with an element ID, but also with a class as well!
// //This is particularly useful for making interactive pages
// headerTitle.style.textAlign = 'right'

// getelementsByClassName

const items = document.getElementsByClassName('list-group-item')
// console.log(items[0])
// items[1].textContent = 'this is the second item'
// items[3].style.color = 'red'

// console.log(items)
// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = 'red'
// }

// QuerySelector

// const header = document.querySelector('#main-head')
// header.style.border = 'solid 5px red'

// const input = document.querySelector('input')
// input.value = 'Please Type Here'

// const submit = document.querySelector('input[type="submit"]')
// submit.value = 'send'

// const item = document.querySelector('.list-group-item')
// item.style.color = 'red'

// const lastItem = document.querySelector('.list-group-item:last-child')
// nthItem.style.color = 'blue'

// const nthItem = document.querySelector('.list-group-item:nth-child(2)')
// nthItem.style.color = 'yellow'

// nthItem.style.font = 'yellow'

// nthItem.style.fontDize = '2rem'

//QuerySelectorAll

// const titles = document.querySelectorAll('.title')

// console.log(titles)

// titles[0].textContent = 'Norbert'

const odd = document.querySelectorAll('li:nth-child(odd)')

const even = document.querySelectorAll('li:nth-child(even)')

for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = 'blue'
  even[i].style.backgroundColor = 'orange'
}

//Traversing the DOM - Parent, Child, and Siblings

//ParentDOM
// let userList = document.querySelector('#users')

// //Parent Node
// // console.log(userList.parentNode);
// // userList.parentNode.style.backgroundColor='yellow'
// // console.log(userList.parentNode.parentNode)
// // console.log(userList.parentNode.parentNode.parentNode)

// //Parent Element

// userList.parentElement.style.backgroundColor = 'yellow'
// console.log(userList.parentElement)
// console.log(userList.parentElement.parentElement)

// //------------------

// //Child Node

// console.log(userList.firstChild);

// console.log(userList.firstElementChild);

// userList.firstElementChild.textContent = 'I am the first Child, Dagoth Ur'

// // Last Child

// console.log(userList.lastChild);

// console.log(userList.lastElementChild.style.color = 'blue')

//Siblings

// console.log(userList.nextSibling)
// console.log(userList.nextElementSibling)
// console.log(userList.previousElementSibling)
// console.log(userList.parentElement)

//Dom Elements Creation and Insertion

//Create Elements

//Create a <div>

const newDiv = document.creaseElement('div')

newDiv.id = 'div-Id'
newDiv.className = 'new-div-class'

newDiv.serAttribute('attr-title', 'div-attribute')

let newDivText = document.createTextNode('Herro Friend')

newDiv.appendChild(newDivText)

const container = document.querySelector('header container')

const h1 = document.querySelector('header h1')
console.log(newDiv)

container.insertBefore()
