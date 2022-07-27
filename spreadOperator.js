'use strict';
///////////////////////////////////////
// The Spread Operator (...)


console.log('*****THE SPREAD OPERATOR PT1*****');
const array = [7, 8, 9];
const badNewArr = [1, 2, array[0], array[1], array[2]];
console.log(badNewArr);

// Note: spread operator takes all values out of array and write them indivigually
const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);
console.log(...goodNewArr); // same as writing : console.log(1, 2, 7, 8, 9);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Kelsy';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Watkins`); // // templete literals don't expect multiple values seperated by a comma, will not work here


console.log('*****THE SPREAD OPERATOR PT2*****');
const restaurantObj = {
    Rname: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
    }
};

//builds new array, creates a shallow copy
//spread operator takes all the elements from array, doesn't create new variables
const newMenu = [...restaurantObj.mainMenu, 'Gnocci'];  // adds gnocci to end of array, this creates new array but doesnt affect origional array
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurantObj.mainMenu];

// Join 2 arrays
const myMenu = [...restaurantObj.starterMenu, ...restaurantObj.mainMenu];
console.log(myMenu);

// Real-world example
const ingredients = [
    prompt("Let's make pasta! Ingredient 1?"),
    prompt('Ingredient 2?'),
    prompt('Ingredient 3'),
];
console.log(ingredients);

// Yields the exact same result
restaurantObj.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurantObj.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurantObj, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurantObj };
restaurantCopy.Rname = 'Ristorante Roma';
console.log(restaurantCopy.Rname);
console.log(restaurantObj.Rname);