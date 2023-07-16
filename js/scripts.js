//First create pizza object.

//Then create separate toppings (pepperoni, sausage, canadianBacon, peppers, mushrooms).

//Create functions to place toppings on pizza.

//Present pizza with all the toppings on it.

//Place order.

//Create new order.


//Business Logic
function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
  }
  
  Pizza.prototype.calculateCost = function() {
    let cost = 0;
  
    // Calculate cost based on toppings
    for (let i = 0; i < this.toppings.length; i++) {
      cost += 1.5;
    }
  
    // Calculate cost based on size
    if (this.size === 'small') {
      cost += 10;
    } else if (this.size === 'medium') {
      cost += 15;
    } else if (this.size === 'large') {
      cost += 20;
    }
  
    return cost;
  };
  
  const form = document.querySelector('#pizza-form');
  const cheese = document.querySelector('#cheese');
  const pepperoni = document.querySelector('#pepperoni');
  const artichoke = document.querySelector('#artichoke');
  const anchovy = document.querySelector('#anchovy');
  const size = document.querySelector('#size');
  const pizzaCost = document.querySelector('#pizza-cost');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const toppings = [];
  
    if (cheese.checked) {
      toppings.push('cheese');
    }
  
    if (pepperoni.checked) {
      toppings.push('pepperoni');
    }
  
    if (artichoke.checked) {
      toppings.push('artichoke');
    }
  
    if (anchovy.checked) {
      toppings.push('anchovy');
    }
  
    const pizza = new Pizza(toppings, size.value);
    const cost = pizza.calculateCost();
  
    // Display total cost
    pizzaCost.textContent = `Total Cost: $${cost.toFixed(2)}`;
  });
  
 
//UI Logic