'use strict';
///////////////////////////////////////
// Short Circuiting (&& and ||)

// OR OPERATOR SHORT CIRCUTS WHEN FIRST VALUE IS TRUTHY -- WILL RETURN FIRST TRUTHY VALUE -- OR RETURN LAST VALUE IF ALL ARE FALSEY
console.log('*****SHORT CIRCUTING*****');
console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Kelsy'); // returns three which is a truthy value, will not even look at 'Kelsy'
console.log('' || 'Kelsy'); // prints 'Kelsy'
console.log(true || 0); // prints true
console.log(undefined || null); // prints null, if both values falsey it will print last value

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // prints hello as its the first truthy value it finds, short circuts and doesnt look at the rest

const aRestaurant = {
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

aRestaurant.numGuests = 0;
const guests1 = aRestaurant.numGuests ? aRestaurant.numGuests : 10;  // does resturants.numGuests exist? if not default it to 10
console.log(guests1);

const guests2 = aRestaurant.numGuests || 10;  // value will be 10 as numGuests is undefined
console.log(guests2);

// AND OPERATOR SHORT CIRCUTS WHEN FIRST VALUE IS FALSEY -- WILL RETURN FIRST FALSEY VALUE -- OR RETURN LAST VALUE IF ALL ARE TRUTHY
console.log('---- AND ----');
console.log(0 && 'Kelsy');  // prints 0
console.log(7 && 'Kelsy');  // prints 'Kelsy'
console.log('Hello' && 23 && null && 'Kelsy');  // prints null

// Practical example
if (aRestaurant.orderPizza) {
    aRestaurant.orderPizza('mushrooms', 'spinach');
}

//same as above if block, && operator checks to see if first statement is falsey, if it is it will short circut
// so does .orderPizza exist? if yes then call function
aRestaurant.orderPizza && aRestaurant.orderPizza('mushrooms', 'spinach');