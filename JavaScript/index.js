"use strict";
let message = 'Hello World!';
console.log(message);
console.log(2+2);
let person = {
    name: 'maya',
    age: 1,
    walk(){
        console.log(this);
    }
};

console.log(person.name);
person.name = 'Maya';
console.log('Name: ',person['name'], ' Age: ',person.age);

let selected = 'name';
person[selected] = 'Maya A';
console.log('Name: ',person.name, ' Age: ',person.age);

let numbers = [1, 2, 3, 4, 5, 'six', 7]
console.log(numbers);
for(let i=0;i<numbers.length;i++){
    if(numbers[i] === 'six'){
        numbers[i] = 6;
    }
}
console.log(numbers);

for(let num of numbers){
    console.log(num);
}

let man = {
    Name: "Mani",
    Age: 7,
}
// const userName = prompt();
// console.log(userName);

// const values = [];
// for(let i=0;i<10;i++){
//     values[i] = prompt();
// }
// console.log(values);

// x = 3.14;
// console.log(x);
// let x;

// person.walk();
// const walk = person.walk.bind(man);
// walk();

// const square = function(number){
//     return number*number;
// }
const square = number => number*number; // Equivalent to the commented square method.

console.log(square(5));

const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false},
    {id: 4, isActive: true}
];

const activeJobs = jobs.filter(function(jobs){ return jobs.isActive; });
console.log(activeJobs);

const colors = ['red', 'green', 'blue', 'orange', 'white'];

// const items = colors.map( color => "<li>" + color + "</li>");
const items = colors.map( color => `<li>${color}</li>`); //Equivalent to the previous commented code.

console.log(items);

const address = {
    street: '',
    city: '',
    state: ''
}

// const street = address.street;
// const city = address.city;
// const state = address.state;

const {street, city, state} = address; //Tihs is equivalent to above initialisations.

let first = [1, 2, 3];
let clone = [...first];
console.log(first);
console.log(clone);

clone[2] = 4;
console.log(first);
console.log(clone);

let clonePerson = {...person};
console.log(clonePerson);

let people = {...man, ...person};
console.log(people);

// price = 275;
// let price;
// console.log(price);