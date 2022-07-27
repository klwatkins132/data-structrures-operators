'use strict';
///////////////////////////////////////
// The Nullish Coalescing Operator


console.log('*****NULLISH COALESCING OPERATOR*****');
const restauranT = {
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

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order recieved: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
    },

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};
restauranT.numGuests = 0;
const guests = restauranT.numGuests || 10; // restauranT.numGuests is falsey because 0 is falsey value
console.log(guests);

// nullish values are null and undefined(NOT INCLUDE 0 or '')
// only nullish values will short circut the evulation
const guestCorrect = restaurant.numGuests ?? 10; // restauranT.numGuests is 0 because the nullish coalescing operator works with nullish values instead of falsey values
console.log(guestCorrect);