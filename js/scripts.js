// Business Logic PizzaParlor
function PizzaParlor() {
  this.pizzas = [];
  this.orderNum = 0;
}

PizzaParlor.prototype.addPizza = function(pizza) {
  pizza.orderNum = this.orderNumber();
  pizza.price = this.pricing(pizza);
  this.pizzas.push(pizza);
}

PizzaParlor.prototype.orderNumber = function() {
  let order = this.orderNum;
  this.orderNum++;
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

function receiptHTML(orderNum) {
  isNaN(orderNum) ? orderNum = (pizzaParlor.orderNum - 1) : true;
  let pizza = pizzaParlor.pizzas[orderNum];
  let receipt = "Order: " + orderNum + "<br>For: " + pizza.firstName + "<br><br>" + pizza.size + " pizza";
  let total = pizza.price;
  pizza.veggie.forEach(function(veggie) {
    receipt += "<br>" + veggie;
  });
  pizza.meat.forEach(function(meat) {
    receipt += "<br>" + meat;
  });
  pizza.other.forEach(function(other) {
    receipt += "<br>" + other;
  });
  total = total.toFixed(2);
  total = total.toString();
  receipt += "<br><br> Total $ " + total;
  return receipt;
}


let pizzaParlor = new PizzaParlor();

// Interface Logic
$(document).ready(function() {
  $("#order-form").submit(function(event) {
    event.preventDefault();
    const first = $("#first-name").val();
    const last = $("#last-name").val();
    const phone = $("#phone-number").val();
    const size = $("#pizza-size").val();
    let veggie = [];
    let meat = [];
    let other = [];
    $("input:checkbox[name=pizza-topping-veggie]:checked").each(function() {
      veggie.push($(this).val());
    });
    $("input:checkbox[name=pizza-topping-meat]:checked").each(function() {
      meat.push($(this).val());
    });
    $("input:checkbox[name=pizza-topping-other]:checked").each(function() {
      other.push($(this).val());
    });
    
    let pizza = new Pizza(first, last, phone, size, veggie, meat, other);
    pizzaParlor.addPizza(pizza);
    let receipt = receiptHTML();

    $("#receipt").html(receipt);
  });
  // order confirmation / delivery
  // order more
  // adjust prices for sizes
  // UI
});