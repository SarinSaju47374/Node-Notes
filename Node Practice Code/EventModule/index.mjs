import PizzaShop from "./PizzaShop.mjs"; //Checkout this file cuz it inherit EventEmitter.

const pizzaShop = new PizzaShop();

//This is a method responding to the event emitted. This object has access on method that responds to events created
// cuz PizzaShop class, extends / inherits EventEmitter
pizzaShop.on("order-pizza",(size,toppings)=>{
    console.log(`Order recieved! Baking your ${size} pizza with ${toppings} topping`)
})

//This is a class method being called
pizzaShop.order("large","Mushroom")