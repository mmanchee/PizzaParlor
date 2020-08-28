// Business Logic PizzaParlor
function PizzaParlor() {
  this.pizzas = [];
  this.orderNumber = 0;
}

PizzaParlor.prototype.addPizza = function(pizza) {
  pizza.orderNum = pizzaParlor.orderNumber();
  this.pizzas.push(pizza);
}

PizzaParlor.prototype.orderNumber = function() {
  let order = this.orderNumber;
  this.orderNumber++;
  return order;
}


// Business Logic Pizza
function Pizza(first, last, phone, size, topping) {
  this.firstName = first,
  this.lastName = last,
  this.phoneNum = phone,
  this.size = size,
  this.topping = topping
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
    $("input:checkbox[name=pizza-topping]:checked").each(function() {
      const topping.push($(this).val());
    });

    let pizza = new Pizza(first, last, phone, size, topping);

    pizzaParlor.addPizza(pizza);
  });
});