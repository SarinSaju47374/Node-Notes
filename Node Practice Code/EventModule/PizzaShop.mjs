import EventEmitter from "node:events";

class PizzaShop extends EventEmitter{
    constructor(){
        super();
        this.orderNumber=0;
    }
    order(size,toppings){
        this.orderNumber++;
        this.emit("order-pizza",size,toppings);
    }
    displayOrderNumber(){
        console.log(`Current order number :- ${this.orderNumber}`)
    }
}

export default PizzaShop;