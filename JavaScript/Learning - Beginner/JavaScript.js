// Object Literals - are key value

// const user = {
//   firstName: 'Vincent',
//   lastName: 'Quimby',
//   age: 21,
//   skills: ['Photography', 'Coding', 'Fitness'],
//   address: {
//     street: '38th Street Circle W',
//     city: 'Naples',
//     zipcode: '34209',
//   },
// }

// console.log(user.address.street, user.skills[1])

//Destructuring

// const { firstName, lastName } = user
// console.log(lastName)

// const {
//     firstName,
//     lastName,
//     age,
//     address: { street },
// } = user;

// //Adding Properties

// user.email = 'user@mail.com';

// console.log(user);

//-------------------------------------------------
// Array of Objects

// const CheckList = [
//   {
//     id: 1,
//     task: 'Do 10 pushups',
//     Completed: true,
//   },
//   {
//     id: 2,
//     task: 'Do 10 pullups',
//     Completed: true,
//   },
//   {
//     id: 3,
//     task: 'Do 10 squats',
//     Completed: false,
//   },
// ]

// console.log(CheckList[1].Completed)

//-----------------------------------------------
// Loops

// For Loop

// for ([initialization]; [condition]; [final-expression])
/// statement

// as long as the condition is true, the statement is executed

//for(let i=0; i < 5; i++) console.log(i);

// let m = 0
// for (; m < 10; m++) console.log(m)

// let m = 0
// for (; m < 10; m++) console.log('For loop nr. ${m}')

//While Loop

// let n = 0
// while (n <= 15) {
//   console.log('While loop nr. ${n}')
//   n++
// }

//Array Loop

// const CheckList = [
//   {
//     id: 1,
//     task: 'Do 10 pushups',
//     Completed: true,
//   },
//   {
//     id: 2,
//     task: 'Do 10 pullups',
//     Completed: true,
//   },
//   {
//     id: 3,
//     task: 'Do 10 squats',
//     Completed: false,
//   },
// ]

// for (j = 0; j < CheckList.length; j++) {
//   console.log(CheckList[j].task)
// }

// For of Loop

// for (let loop of CheckList) {
//   console.log(loop.id, loop.task, loop.Completed)
// }

//Hi order Array Methods

//ForEach

// CheckList.forEach(function (loopName) {
//   console.log(loopName)
// })

// Map

// const loopId = CheckList.map(function (loopName) {
//   return loopName.id
// })

// const loopTask = CheckList.map(function (loopName) {
//   return loopName.task
// })

// const loopComp = CheckList.map(function (loopName) {
//   return loopName.completed
// })
// console.log(loopId, loopTask, loopComp)

//Filter

// const loopCompleted = CheckList.filter(function (loop) {
//   return loop.Completed === false
// })

// console.log(loopCompleted)

//Combining Loops

// Filter Loop With Map Loop

// const loopCompleted = CheckList.filter(function (loop) {
//   return loop.Completed === false
// }).map(function (loop) {
//   return loop.task
// })

// console.log(loopCompleted)

// // Array (remember, they start with 0) (You can have different data types in array)

// const cars = ['Audi', 'BMW', 20, true]
// // cars[4] = 'Ford'
// cars.push('Toyota')
// cars.unshift('Toyota')
// //Removes from array
// cars.shift()
// cars.pop()

// // console.log(cars)
// // console.log(Array.isArray(cars))
// console.log(cars.indexOf('BMW'))

// //Arrays cannot be reassigned

//-----------------------------------------------------------
//Functions
//cole log, alerts, prommpts

//How to create functions
// function (argument) (code)
// console.log('Hi', 'Norbert')

// function myFunction() {
//   console.log(
//     'This is my Function',
//     'There are many functions like this',
//     'But this one is mind!'
//   )
// }

// myFunction()

//Function Expression (Anonymous Function)

// const mySecondFunction=function() {
//   console.log('Function the II');

// }
// mySecondFunction

//Function Efficiency

// function code(){
//   console.log('eat')
//   console.log('sleep')
//   console.log('code')
//   console.log('repeat')
// }

// code()

// function efficientFunction(NoRepeat){
//   console.log(NoRepeat)
// }
// efficientFunction('sleep')

// function Nums(num1, num2) {
//   return num1 + num2
// }
// console.log(Nums(5, 10))

//Arrow Functions

// const Nums = (num1, num2) => num1 / num2
// console.log(Nums(100, 10))

//------------------------------------------------------------------------------
//Object Oriented Programming
//OOP helps us construct objects using constructor functions
//Two ways of doing this: prototypes & ES6 classes
//Constructor functions begin with a capital letter

//Constructor Function

// function User(firstName, lastName, Email, DoB) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.Email = Email
//   this.DoB = new Date(DoB)
//   // add a New Method/Function
//   this.getBirthYear = function () {
//     return this.DoB.getFullYear()
//   }
//   this.getFullName = function () {
//     return '${this.firstName}'
//   }
// }

// //We create a variable, then said that the user should be assigned to a variable, with a specific string of arguments
// const user1 = new User('Norbert', 'Menyhart', 'noEmail@mail.com', '02/19/2004')
// const user2 = new User('Quintin', 'Menyhart', 'no2Email@mail.com', '09/09/2004')
// console.log(user1.DoB.getFullYear)
// console.log(user2.getBirthYear())

//Prototypes

// function User(firstName, lastName, Email, DoB) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.Email = Email
//   this.DoB = new Date(DoB)
//   // add a New Method/Function
// }
// user.prototype.getBirthYear = function () {
//   return this.DoB.getFullYear()
// }
// user.prototype.getFullName = function () {
//   return '${this.firstName} ${this.lastName}'
// }
// const user1 = new User('Norbert', 'Menyhart', 'noEmail@mail.com', '02/19/2004')
// const user2 = new User('Quintin', 'Menyhart', 'no2Email@mail.com', '09/09/2004')

// console.log(user1getFullName())

//ES6 Classes - Optimal as opposed to the prior two

// class User {
//   constructor(firstName, lastName, Email, DoB) {
//     this.firstName = firstName
//     this.lastName=lastName
//     this.Email=Email
//     this.DoB = DoB
//   }
//   getBirthYear(){
//     return this.DoB.getFullYear()
//   }
//   getFullname(){
//     return ${this.firstName} ${this.lastName}
//   }
// }

// const user1 = new User('Norbert', 'Menyhart', 'noEmail@mail.com', '02/19/2004')
// const user2 = new User('Quintin', 'Menyhart', 'no2Email@mail.com', '09/09/2004')

// console.log(user1.getBirthYear())
// console.log(user1getFullName())
