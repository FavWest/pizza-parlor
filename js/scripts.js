function Pizza(size, toppings){
  this.size=size;
  this.toppings=toppings;
}

Pizza.prototype.getCost=function(){
  let cost=0;
  cost+=getCostForSize(this.size);
  cost+=getCostForToppings(this.toppings, this.size);
  return cost;
}

function getCostForSize(size){
  let cost=0;
  switch(size) {
    case ("small"):
      cost+=10;
      break;
    case ("medium"):
      cost+=15;
      break;
    case ("large"):
      cost+=20;
      break;
    default:
      cost="Error: cannot calculate cost; invalid response received for pizza size. Please try again."
  }
  return cost;
}

function getCostForToppings(toppings, size){
  let toppingCost=0;
  let multiplier=1;
  switch(size) {
    case ("small"):
      multiplier=1;
      break;
    case ("medium"):
      multiplier=1.5;
      break;
    case ("large"):
      multiplier=2;
      break;
    default:
      multiplier=1;
  }
  switch(toppings) {
    case ("cheese"):
      toppingCost+=0;
      break;
    case ("mushroom"):
      toppingCost+=0.5;
      break;
    default:
      toppingCost="Error, cannot calculate cost; invalid response received for pizza toppings. Please try again."
  }
  return toppingCost*multiplier;
}

//TESTS
let myPizza = new Pizza("small", "cheese");
console.log("You ordered a small cheese pizza");
console.log(`You ordered a ${myPizza.size} ${myPizza.toppings} pizza`);
console.log(10);
console.log(myPizza.getCost());
myPizza = new Pizza("large", "cheese");
console.log(20)
console.log(myPizza.getCost());
myPizza = new Pizza("small", "mushroom");
console.log(10.5);
console.log(myPizza.getCost());
myPizza = new Pizza("large", "mushroom");
console.log(21);
console.log(myPizza.getCost());
