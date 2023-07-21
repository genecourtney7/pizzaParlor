//First create pizza object.

//Then create separate toppings (pepperoni, sausage, canadianBacon, mushrooms).

//Create functions to place toppings on pizza.

//Present pizza with all the toppings on it.

//Place order.



//Business Logic

class Pizza {
  constructor(toppings, size) {
      this.toppings = toppings;
      this.size = size;
  }
  price() {
      let cost = 0;
      if (this.size == "small") {
          cost += 5;
      }
      else if (this.size == "medium") {
          cost += 7;
      }
      else {
          cost += 10;
      }
      cost += .25 * this.toppings.length;
      return cost;
  }

}
  
 
//UI Logic
window.onload = function () {
  const orderButton = document.getElementById("order");
  orderButton.addEventListener("click", function (event) {
    event.preventDefault();
    const toppings = [];
    const toppingsCheckboxes = document.querySelectorAll("input[type=checkbox]");
    for (let i = 0; i < toppingsCheckboxes.length; i++) {
      if (toppingsCheckboxes[i].checked) {
        toppings.push(toppingsCheckboxes[i].id);
      }
    }
    const sizeSelect = document.getElementById("size");
    const size = sizeSelect.options[sizeSelect.selectedIndex].value;
    const pizza = new Pizza(toppings, size);
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `Your pizza costs $${pizza.price()}`;
  });
};