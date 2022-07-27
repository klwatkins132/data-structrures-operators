'use strict';
///////////////////////////////////////
// Rest Pattern and Parameters


console.log('*****REST PATTERN AND PARAMETERS*****');
// looks like spread operator but does the exact opposite -- pack elements into an array
// 1) Destructuring

// SPREAD, because on RIGHT side of =
const anArr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [v, w, ...others] = [1, 2, 3, 4, 5];
console.log(v, w, others);

const anotherRestaurant = {
    Rname: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

// the rest operator does not include skipped elements
const [pizza, , risotto, ...otherFood] = [
    ...anotherRestaurant.mainMenu,
    ...anotherRestaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = anotherRestaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const g = [23, 5, 7];
add(...g);

anotherRestaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
anotherRestaurant.orderPizza('mushrooms'); // produces an empty array