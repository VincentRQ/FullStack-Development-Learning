// Object Literals - are key value

const user = {
  firstName: 'Vincent',
  lastName: 'Quimby',
  age: 21,
  skills: ['Photography', 'Coding', 'Fitness'],
  address: {
    street: '38th Street Circle W',
    city: 'Naples',
    zipcode: '34209',
  },
}

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

console.log(CheckList[1])
