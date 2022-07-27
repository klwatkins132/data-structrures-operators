'use strict';
///////////////////////////////////////
// Maps: Iteration

console.log('*****MAPS PT1*****');
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!'],
]);
console.log(question);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

const dayS = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

const openHours = {
    [dayS[3]]: {
        open: 12,
        close: 22,
    },
    [dayS[4]]: {
        open: 11,
        close: 23,
    },
    [dayS[5]]: {
        open: 0,
        close: 24,
    },
};

// Convert object to map
console.log(Object.entries(openHours));
const hoursMap = new Map(Object.entries(openHours));
console.log(hoursMap);



/////////////////////////////////////////
//// Maps: Fundamentals

console.log('*****MAPS PT2*****');
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const someArr = [1, 2];
rest.set(someArr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(someArr));



///////////////////////////////////////
// Sets

console.log('*****SETS*****');
const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
]);
console.log(ordersSet);  // Will print Set(3) {'Pasta', 'Pizza', 'Risotto'} -- no duplicates
console.log(new Set('Kelsy'));  // willprint Set(5) {'K', 'e', 'l', 's', 'y'}
console.log(ordersSet.size);  // prints size of set not including duplicates
console.log(ordersSet.has('Pizza'));  // has is a method, prints true
console.log(ordersSet.has('Bread'));  // has is a method, prints false
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');  // will only add once becuase the Set has to be unique
console.log(ordersSet); // prints Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example for finding positions at a resturant
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffSet = new Set(staff);
console.log(staffSet); // will print Set(3) {'Waiter', 'Chef', 'Manager'}

// convert Set to an array, use spread operator and create new array with the positions
const staffUnique = [...new Set(staff)];
console.log(staffUnique);  // will print (3) ['Waiter', 'Chef', 'Manager']

console.log(
    new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size //// prints 3
);

console.log(new Set('kelsywatkins').size); // prints 10 -- There are 10 unique values
