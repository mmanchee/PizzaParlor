// Business Logic PizzaParlor
function PizzaParlor() {
  this.pizzas = [];
  this.orderNumber = 0;
}

PizzaParlor.prototype.addPizza = function(pizza) {
  pizza.orderNum = pizzaParlor.orderNumber();
  pizza.price = pizzaParlor.pricing(pizza);
  this.pizzas.push(pizza);
}

PizzaParlor.prototype.orderNumber = function() {
  let order = this.orderNumber;
  this.orderNumber++;
  return order;
}

PizzaParlor.prototype.pricing = function(pizza) {
  let pizzaSize = ["individual", "small", "medium", "large", "xlarge"]
  let pizzaPrice = [4, 5, 7, 10, 12];
  let total = 0;
  for (let i = 0; i < pizzaSize.length; i++) {
    if (pizza.size === pizzaSize[i]) {
      total =  pizzaPrice[i];
    }
  }
  total += (pizza.veggie.length * .5);
  total += (pizza.meat.length * 1.5);
  total += (pizza.veggie.length * 1);

  return total;
}


// Business Logic Pizza
function Pizza(first, last, phone, size, veggie, meat, other) {
  this.firstName = first,
  this.lastName = last,
  this.phoneNum = phone,
  this.size = size,
  this.veggie = veggie,
  this.meat = meat,
  this.other = other
}


let pizzaParlor = new PizzaParlor();

// Interface Logic
$(document).ready(function() {
  $("#order-form").click(function(event) {
    event.preventDefault();
    const first = $("#first-name").val();
    const last = $("#last-name").val();
    const phone = $("#phone-number").val();
    const size = $("#pizza-size").val();
    $("input:checkbox[name=pizza-topping-veggie]:checked").each(function() {
      const veggie.push($(this).val());
    });
    $("input:checkbox[name=pizza-topping-meat]:checked").each(function() {
      const meat.push($(this).val());
    });
    $("input:checkbox[name=pizza-topping-other]:checked").each(function() {
      const other.push($(this).val());
    });

    let pizza = new Pizza(first, last, phone, size, veggie, meat, other);

    pizzaParlor.addPizza(pizza);
    let receipt = 
    $()
  });
});