// ## Array Cardio Day 2
// Some data we can work with

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// 1. Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some((person) => {
    const currentYear = new Date().getFullYear();
    return currentYear - person.year > 19;
    0;
});
console.log('Task 1: ', isAdult);

//2. Array.prototype.every() // is everyone 19 or older?
const isEveryAdult = people.every(
    (person) => new Date().getFullYear() - person.year > 19,
);
console.log('Task 2: ', isEveryAdult);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// 3. find the comment with the ID of 823423
const comment = comments.find((comment) => comment.id === 823423);
console.log('Task 3: ', comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// 4. delete the comment with the ID of 823423
const index = comments.findIndex((comment) => comment.id === 823423);
const newCommentsArr = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1),
];
console.log('Task 4: ');
console.table(newCommentsArr);
