// JSON Introduction

// DATA TYPES
// NUMBERS: No difference between integer and floats
// STRING: String of Unicode characters. Use double quotes
// Boolean: True or False
// Array: Ordered list of 0 or more values
// OBJECT: Unordered collection of key/value pairs
// Null:Empty value

// JSON  Syntax Rules:
// - Uses key/value pairs -{"name":"Norbert"}
// - Uses double quotes around  KEY and Value
// - Must use the specified data type
// - File type is .json
// - Mime type is "Application/json"

// let user = {
//   name: 'Anthony',
//   age: 33,
//   address: {
//     street: 'turtle street',
//     city: 'Vivec',
//   },
//   friends: ['Dagoth', 'Dragonborn'],
// }
// console.log(user.name, user.age)

//We have to use stringify in order to switch data to JSON

// user = JSON.parse(user)
// user = JSON.stringify(user)
// console.log(user)

// let users = [
//   {
//     name: 'Dan',
//     age: 40,
//   },
//   {
//     name: 'Nate',
//     age: 40,
//   },
//   {
//     name: 'Gio',
//     age: 41,
//   },
//   {
//     name: 'Vic',
//     age: 47,
//   },
// ]

// users = JSON.stringify(users)
// users = JSON.parse(users)
// console.log(users)
// output = ''
// for (let i = 0; i < users.length; i++) {
//   output += '<li>' + users[i].name + '<li>'
// }

// document.getElementById('users').innerHTML = output


let http = new XMLHttpRequest();
xhttp.onreadystatechange=function({
    if(this.readyState==4 && this.status==200){
        const response = JSON.parse(http.responseText);

        const users = response.users;
        let output = '';
        for(let i = 0; i<users.length; i++){
            output += '<li>' + users[i].name + '<li>'}
            document.getElementById('users').innterHTML = output;


    }
})


http.open('GET', 'users,json',true)
http