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
* 
## License
MIT
Copyright (c) 2021 Victoria West
## Contact Information
Victoria West email@email.com

## Specs
#### Describe: Pizza()
Test: "It should construct a Pizza type object with size and toppings properties.
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
