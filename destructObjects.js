'use strict';
///////////////////////////////////////
// Destructuring Objects


console.log('*****DESTRUCTURING OBJECTS*****');
const myRestaurant = {
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
    }
};

myRestaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

myRestaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
});

const { Rname, openingHours, categories } = myRestaurant;
console.log(Rname, openingHours, categories);

const {
    Rname: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = myRestaurant;
console.log(menu, starters);

// Mutating variables
let n = 111;
let m = 999;
const obj = { n: 23, m: 7, p: 14 };
({ n, m } = obj);
console.log(n, m);

// Nested objects
const {
    fri: { open: op, close: cl },
} = openingHours;
console.log(op, cl);