'use strict';
///////////////////////////////////////
// Optional Chaining

console.log('*****OPTIONAL CHAINING*****');
const weekDays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
const openinghours = {
    [weekDays[3]]: {
        open: 12,
        close: 22,
    },
    [weekDays[4]]: {
        open: 11,
        close: 23,
    },
    [weekDays[5]]: {
        open: 0,
        close: 24,
    },
};

const someRestaurant = {
    Rname: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openinghours,

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

// without optional chaining
if (someRestaurant.openinghours && someRestaurant.openinghours.mon)
    console.log(someRestaurant.openinghours.mon.open);
else {
    console.log('Not open on monday');
}

// WITH optional chaining
console.log(someRestaurant.openinghours.mon?.open);
console.log(someRestaurant.openinghours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
    const open = someRestaurant.openinghours[day]?.open ?? '**CLOSED';
    console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(someRestaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(someRestaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Kelsy', email: 'hello@Kelsy.io' }];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');

// Same as above but less efficient
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');