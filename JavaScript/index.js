// "use strict";
// let message = 'Hello World!';
// console.log(message);
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
    street: '1st',
    city: 'Tirupur',
    state: 'Tamil Nadu'
};

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

let message = 'This is my first message.';
console.log(message);

console.log(first.toString());
console.log(first.join('+'));

const a1 = [['1', '2'], ['3', '4', '5',['6', ['6.1', '6.2', '6.3']], '7']];
console.log(a1.flat(1));
console.log(a1.flat(2));
console.log(a1.flat(3));

first.splice(1, 0, 1.1, 1.2, 1.3);
console.log(first);

first.splice(1, 3);
console.log(first);

const sum = first.reduce((accumulator, currentValue) => accumulator += currentValue);
console.log(sum);

console.log(message.slice(6, 10));
console.log(message.slice(10, 6));  //Returns empty string.

console.log(message.substring(6, 10));
console.log(message.substring(10, 6));  //Same as the previous code.

let numerics = [1, 2, 3, 4, 5];
function addnums(num1, num2, num3){
    return num1+num2+num3;
}
console.log(addnums(...numerics));

let m = moment('2025-12-17T15:00:00.000'); //using ISO 8601 string

m = moment('17/12/2025 2:38PM', 'DD/MM/YYY h:mmA'); //using format

m = moment(600000); //using millisec since epoch

m = moment.unix(600000); //using sec since epoch

m = moment.utc(); //using utc
console.log(m);
console.log(m.toString());
console.log(m.toISOString());

m = moment()

//Getter
console.log(m.hours());  
console.log(m.get('hours')); 
console.log(m.year());
console.log(m.week());

//Setter
m.minutes(50);
m.hours(17);
m.days(9);
console.log(m.toString());

const diffMoment = moment('2025-05-22');
console.log(moment.min(moment(), diffMoment));
console.log(moment.max(moment(), diffMoment));

m = moment();

// m.add({
//     'hours': 7,
//     'minutes': 10
// });

// m.subtract({
//     'hours': 7,
//     'minutes': 10
// });

// m.startOf('hour');

// m.endOf('year'); 

// m.utc();
// m.local();

// m.utcOffset('+06:00');

console.log(m.toString());

m.locale('en-in');
console.log(m.format('L'));

console.log(moment([2027, 0, 29]).fromNow());

const isOdd = num => num%2 === 1;
// console.log(isOdd(3));

const atLeastTwo = (arr, callback) => arr.filter(callback).length >=2;

console.log(atLeastTwo([2, 4, 5, 6], isOdd));

const input = [
  {
    name: "John",
    yearOfBirth: 1988,
    placeOfBirth: "New York",
  },
  {
    name: "Nancy",
    yearOfBirth: 1963,
    placeOfBirth: "New York",
  },
  {
    name: "John",
    yearOfBirth: 1980,
    placeOfBirth: "Toronto",
  },
];

const groupBy = (array, callback) => {
    return array.reduce((accumulator, currentValue) => {
        let key = callback(currentValue);

        if(accumulator[key]){
            accumulator[key].push(currentValue);
        }
        else{
            accumulator[key] = [currentValue];
        }
        return accumulator;
    }, {});
};


console.log(groupBy(input, (t) => t.name));
console.log(groupBy(input, (t) => isOdd(t.yearOfBirth)));
console.log(groupBy(input, (t) => !isOdd(t.yearOfBirth)));

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Resolved after 2 seconds.")
//     }, 2000);
// });

// myPromise.then( message => console.log(message));

function clean(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let cleaned = true;

            if(cleaned){
                resolve("House is clean.");
            }
            else{
                reject("House is not clean.")
            }
        }, 2000)
    })
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let trashed = true;

            if(trashed){
                resolve("Took out the trash.");
            }
            else{
                reject("Did not take out the trash.");
            }
        },2000)
    })
}

// clean().then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log("Finished all the chores.")}).catch(error => console.error(error));

async function doChores(){

    try{
        const cleanResult = await clean();
        console.log(cleanResult);
    
        const trashResult = await takeOutTrash();
        console.log(trashResult);
    
        console.log("Finished all the chores.");
    }

    catch(error){
        console.error(error);
    }
}

// doChores();

let person1 = {
    firstName: 'Divya',
    lastName: 'Pranav',
}
function printFullName(){
    console.log(`${this.firstName} ${this.lastName} is from ${city}, ${state}`);
}

printFullName.call(person1, 'Tiruppur', 'Tamil Nadu');

let person2 = {
    firstName: 'Brandon',
    lastName: 'Oswel',
}

printFullName.apply(person2, ['Tiruppur', 'Tamil Nadu']);

const printDetails = printFullName.bind(person1, 'Tiruppur', 'Tamil Nadu');


console.log(printDetails);