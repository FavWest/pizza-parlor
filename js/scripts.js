function Pizza(size, toppings){
  this.size=size;
  this.toppings=toppings;
}

Pizza.prototype.getCost=function(){
  let cost=0;
  if(this.size === "small") {
    cost+=10;
  }
  if(this.toppings === "cheese") {
    cost+=0;
  }
  return cost;
}

//TESTS
let myPizza = new Pizza("small", "cheese");
console.log("You ordered a small cheese pizza");
console.log(`You ordered a ${myPizza.size} ${myPizza.toppings} pizza`);
console.log(10);
console.log(myPizza.getCost());