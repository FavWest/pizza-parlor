# Pizza Parlor

#### Brief Description
Choose your pizza size and toppings, and receive your pizza and bill. Independent assignment for Epicodus Intermediate JavaScript.

#### By _**Victoria West**_

## Technologies Used
* HTML
* CSS
* JQuery
* JavaScript

## Description
_Fill in an order form that specifies pizza size and toppings. Receive a response that describes your pizza and includes a price determined by the size and toppings you selected._

## Setup/Installation Requirements
### Run Locally
* **Requirements:** ability to view HTML in a web browser, internet access, Git
#### Using GitHub Desktop
* **Requires GitHub Desktop**
* Go to https://github.com/FavWest/pizza-parlor
* Click green CODE button and select "Open with GitHub Desktop" from the dropdown menu
* Open the repository in your editor and run "index.html" OR open the repository in your file manager and double-click "index.html" to open it in a browser
#### Using command line with Git
* Clone code using `git clone https://github.com/FavWest/pizza-parlor.git`
* Open Portfolio folder in Explorer or Finder
* Double-click "index.html" to open in a browser
## Known Bugs
* Returns an error for non-integer cost totals over 100 FIXED 4-9-2021
* Returns three decimal places for non-integer cost totals under 10 FIXED 4-9-2021
## License
MIT
Copyright (c) 2021 Victoria West
## Contact Information
Victoria West email@email.com

## Specs
#### Describe: Pizza()
Test: "It should construct a Pizza type object with size and toppings properties."  
Code:  
let myPizza = new Pizza("small", "cheese");  
console.log(`You ordered a ${myPizza.size} ${myPizza.toppings} pizza`);  
Expected Result: "You ordered a small cheese pizza"  

#### Describe: Pizza.prototype.getCost()  
Test: "It should return a cost based on the Pizza's size and toppings"  
Code: let myPizza = new Pizza("small", "cheese");  
console.log(myPizza.getCost());  
Expected Result: 10  

Test: "It should increase the cost for a larger Pizza"  
Code: let myPizza = new Pizza("large", "cheese");  
console.log(myPizza.getCost());  
Expected Result: 20  

Test: "It should increase the cost for a more expensive topping"  
Code: let myPizza = new Pizza("small", "mushroom");  
console.log(myPizza.getCost());  
Expected Result: 10.5  

Test: "It should scale the cost increase of the topping based on the size of the pizza"  
Code: let myPizza = new Pizza("large", "mushroom");  
console.log(myPizza.getCost());  
Expected Result: 21  

#### Describe: Pizza.prototype.toString()  
Test: "It should return a string describing the pizza"  
Code: let myPizza = new Pizza("large", "cheese");
console.log(myPizza.toString();)
Expected Result: "1 large pizza with cheese"

#### Describe: formatCostString()  
Test: "It should return an integer as a string"  
Code: formatCostString(15);  
Expected Result: "15"  

Test: "It should return a float or double as a string rounded to two decimal places"  
Code: formatCostString(15.3333);    
Expected Results: "15.33"  

Test: "It should still return a float or double as a string rounded to two decimal places when the second decimal place contains a zero."  
Code: formatCostString(15.5);  
Expected Results: "15.50"  

Test: "It should still return a float or double as a string rounded to two decimal places when the value is less than 10"  
Code: formatCostString(3.14444);  
Expected Results: "3.14"  

Test: "It should still return a float or double as a string rounded to two decimal places when the value is less greater than 100"  
Code: formatCostString(455.9022)  
Expected Results: "455.90"  

#### Describe: CustomerOrder()  
Test: "It should construct a CustomerOrder object"  
Code:   
let customerOrder = new CustomerOrder();  
console.log(customerOrder.pizzas, customerOrder.currentId);  
Expected Result: {} 0   

Test: "It should construct a CustomerOrder that includes a orderCost property that starts at value 0"  
let customerOrder = new CustomerOrder();  
console.log(customerOrder.orderCost);
Expected Result: 0

#### Describe: CustomerOrder.prototype.assignId()  
Test: "Take the currentId and increment it by 1; return result"  
Code:   
let customerOrder = new CustomerOrder();  
console.log(customerOrder.assignId(), customerOrder.currentId);  
Expected Result: 1 1  

#### Describe: CustomerOrder.prototype.addPizza()  
Test: "It should add a Pizza to the CustomerOrder's pizza collection, using a unique ID as the Pizza's key."  
Code:  
let customerOrder = new CustomerOrder();  
let myPizza = new Pizza("small", "mushroom");  
customerOrder.addPizza(myPizza);  
console.log(customerOrder.pizzas);  
Expected Result: {1:{size: "small", toppings: "mushroom"}}  

Test: "It should work multiple times, incrementing Id each time"    
Code:   
let customerOrder = new CustomerOrder();   
let myPizza = new Pizza("small", "mushroom");  
let morePizza = new Pizza("large", "cheese");  
customerOrder.addPizza(myPizza);  
customerOrder.addPizza(morePizza);  
console.log(customerOrder.pizzas);  
Expected Result: {1:{size: "small", toppings: "mushroom"}, 2:{size: "large", toppings: "cheese"}}  