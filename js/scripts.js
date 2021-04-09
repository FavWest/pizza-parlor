function Pizza(size, toppings){
  this.size=size;
  this.toppings=toppings;
}

//TESTS
let myPizza = new Pizza("small", "cheese");
console.log("You ordered a small cheese pizza");
console.log(`You ordered a ${myPizza.size} ${myPizza.toppings} pizza`);