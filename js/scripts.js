function CustomerOrder(){
  this.pizzas={};
  this.currentId=0;
  this.orderCost=0;
} 

CustomerOrder.prototype.assignId=function(){
  this.currentId++;
  return this.currentId;
}

CustomerOrder.prototype.addPizza=function(pizza){
  let id = this.assignId();
  this.pizzas[id]=pizza;
  this.orderCost+=pizza.cost;
}

function Pizza(size, toppings){
  this.size=size;
  this.toppings=toppings;
  let cost=0;
  cost+=getCostForSize(this.size);
  cost+=getCostForToppings(this.toppings, this.size);
  this.cost=cost;
}

Pizza.prototype.getCost=function(){
  return this.cost;
}

Pizza.prototype.toString=function(){
  return(`1 ${this.size} pizza with ${this.toppings}`);
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

function formatCostString(cost){
  if((Number.isInteger(cost))||cost===0){
    return cost.toString();
  }
  else if(Number.isFinite(cost)){
    return cost.toFixed(2).toString();
  } else {
    return "Error, please try again";
  }
}

//UI Logic
let customerOrder = new CustomerOrder();   

$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    const pizza=new Pizza($("#size").val(), $("#toppings").val());
    $("#items-ordered").append(`<li>${pizza.toString()}</li>`);
    customerOrder.addPizza(pizza);
    let cost=customerOrder.orderCost;
    cost=formatCostString(cost); 
    $("#cost").text(cost);
    $(".display-after-submit").show();
  });
});
