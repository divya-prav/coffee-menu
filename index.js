const coffeeMenu = require("./coffee-menu");

// Print an array of all the drinks on the menu.
  const printDrinks = coffeeMenu.map(coffee => {return [coffee.name,coffee.price,coffee.seasonal]});

  console.log(printDrinks);


// Print an array of drinks that cost 5 and under.

 const drinkCostLessThan5 = coffeeMenu.filter(coffee => coffee.price <= 5);

 console.log(drinkCostLessThan5);



// Print an array of drinks that are priced at an even number.
 const printDrinksWithEvenPrice = coffeeMenu.filter(coffee => coffee.price % 2 === 0);

 console.log(printDrinksWithEvenPrice);



//Print the total if you were to order one of every drink.

const  totalPrice = coffeeMenu.reduce((total,coffee) => total+coffee.price,0);

console.log(totalPrice);



// Print an array with all the drinks that are seasonal.
const seasonalArray = coffeeMenu.filter(coffee => coffee.seasonal === true);

console.log(seasonalArray);


// Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

const seasonalDrinkWithWords = coffeeMenu.map(coffee => coffee.name+" with imported beans");

console.log(seasonalDrinkWithWords);