// start with strings, numbers and booleans
console.groupCollapsed(`${'Task-1: strings, numbers and booleans'}`);
console.groupCollapsed(`${'Task-1.1: strings'}`);
let name1 = 'Elena';
let name2 = name1;
console.log('name1:', name1, 'name2:', name2);
name1 = 'Lena';
console.log('name1 was changed');
console.log('Updated name1:', name1, 'Not affected name2:', name2);
console.groupEnd();

console.groupCollapsed(`${'Task-1.2: numbers'}`);
let num1 = 20;
let num2 = num1;
console.log('num1:', num1, 'num2:', num2);
num1 = 30;
console.log('num1 was changed');
console.log('Updated num1:', num1, 'Not affected num2:', num2);
console.groupEnd();

console.groupCollapsed(`${'Task-1.3: booleans'}`);
let boolean1 = 20;
let boolean2 = boolean1;
console.log('boolean1:', boolean1, 'boolean2:', boolean2);
boolean1 = 30;
console.log('boolean1 was changed');
console.log('Updated boolean1:', boolean1, 'Not affected boolean2:', boolean2);
console.groupEnd();
console.groupEnd();

//-----------------------------------



// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80,
};

// and think we make a copy:

// how do we take a copy instead?

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects.
//lodash has a cloneDeep method, but you should think twice before using it.
