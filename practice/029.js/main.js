
// ==== Number
// 1;
// 2.1;
// 1e3;
// NaN;

// ==== String
// "Yo"
// 'Yo'
// `
// asfdasdf
// asdfasfd
// asfd
// `

// ==== Array
var arr = [1, 2, 3];
arr = ['a', 'b', 'c'];

// console.log(arr);

var list = [
  '王花花',
  '李拴蛋',
  '刘备备',
  '王花花',
  '李拴蛋',
  '刘备备',
];

var person1 = list[1];
var person2 = list[2];
var len = list.length;

// console.log( person1, person2, len );

// Object

var person = {
  name: 'whh',
  age: 18,
  wife: {
    name: 'lbb',
    age: 20,
  },
  pet: {
    name: 'muhaha',
    type: 'cat'
  }
}

console.log(person);
console.log(person.name);
console.log(person.wife.name);
console.log(person.pet.name);