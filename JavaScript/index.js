let message = 'Hello World!';
console.log(message);
console.log(2+2);
let person = {
    name: 'maya',
    age: 1
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

for(num of numbers){
    console.log(num);
}

const userName = prompt();
console.log(userName);

const values = [];
for(let i=0;i<10;i++){
    values[i] = prompt();
}
console.log(values);