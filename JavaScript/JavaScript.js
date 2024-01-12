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

const CheckList = [
  {
    id: 1,
    task: 'Do 10 pushups',
    Completed: true,
  },
  {
    id: 2,
    task: 'Do 10 pullups',
    Completed: true,
  },
  {
    id: 3,
    task: 'Do 10 squats',
    Completed: false,
  },
]

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

const loopCompleted = CheckList.filter(function (loop) {
  return loop.Completed === false
}).map(function (loop) {
  return loop.task
})

console.log(loopCompleted)
