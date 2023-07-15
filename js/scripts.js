//First create pizza object.

//Then create separate toppings (pepperoni, sausage, canadianBacon, peppers, mushrooms).

//Create functions to place toppings on pizza.

//Present pizza with all the toppings on it.

//Place order.

//Create new order.


//Business Logic
function pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
}

pizza.prototype.getPrice = function() {
    let price = 0;
    if (this.size === "Small") {
        price += 5.99;
    } else if (this.size === "Medium") {
        price += 7.99;
    } else if (this.size === "Large") {
        price += 9.99;
    }

    for (let i = 0; i < this.toppings.length; i++) {
        if (this.toppings[i] === "Pepperoni" || this.toppings[i] === "Sausage") {
            price += 1.99;
        } else if (this.topping[i] === "Mushrooms" || this.topping[i] === "Onions") {
            price += 0.99;
        }
    }

    return price.toFixed(2)
}


//UI Logic

let form = document.querySelector("form");
let size = form.elements["size"].value;
let toppings = [];
for (let i = 0; i < form.elements["toppings"].length; i++) {
  if (form.elements["toppings"][i].checked) {
    toppings.push(form.elements["toppings"][i].value);
  }
}
console.log(size); 
console.log(toppings); 
