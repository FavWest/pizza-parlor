function Pizza(size, toppings){
  this.size=size;
  this.toppings=toppings;
}

Pizza.prototype.getCost=function(){
  let cost=0;
  switch(this.size) {
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
  switch(this.toppings) {
    case ("cheese"):
      cost+=0;
      break;
    case ("mushroom"):
      cost+=0.5;
      break;
    default:
      cost="Error, cannot calculate cost; invalid response received for pizza toppings. Please try again."
  }
  return cost;
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
