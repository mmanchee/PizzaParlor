// Business Logic PizzaParlor
function PizzaParlor() {
  this.pizzas = [];
  this.orderNum = 0;
}

PizzaParlor.prototype.addPizza = function(pizza) {
  pizza.orderNum = this.orderNumber();
  pizza.price = this.pricing(pizza);
  this.pizzas.push(pizza);
  return pizza.orderNum;
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
function totalPrice(orderNum) {
  let total = pizzaParlor.pizzas[orderNum].price
  total = (total * 1.1)
  total = total.toFixed(2);
  total = total.toString();
  return total;
}
function cardMojo(cardName, cardNum, cardExp, cardPin) {
  let paid = "Payment Confirmed <br>Card: XXXX-XXXX-XXXX-1254"
  return paid;
}
function receiptHTML(orderNum, paid, address, recOption) {
  let receive = "";
  console.log(orderNum);
  let pizza = pizzaParlor.pizzas[orderNum];
  let receipt = "Order: " + orderNum + "<br>For: " + pizza.firstName + "<br><br>" + pizza.size + " pizza";
  pizza.veggie.forEach(function(veggie) {
    receipt += "<br>" + veggie;
  });
  pizza.meat.forEach(function(meat) {
    receipt += "<br>" + meat;
  });
  pizza.other.forEach(function(other) {
    receipt += "<br>" + other;
  });
  let total = totalPrice(orderNum);
  receipt += "<br><br> <strong>Total $ " + total + "</strong>";
  receipt += "<br>" + paid;
  
  if (recOption === "delivery") {
    receive = "Delivery will be with 30 min.<br> To: " + address; 
  } else if (recOption === "takeout") {
    receive = "Your order will be ready for pick in 20 min."
  }
  receipt += "<br><br>" + receive;

  receipt += "<br><br> <strong>Thank you for your order. <br> See you next time.</strong>"
  
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
    let number = pizzaParlor.addPizza(pizza);
    $("#confirmation").val(number);

    let total = totalPrice(number);
    $("#total-order").text(total);

    $("#order-form").hide();
    $("#confirm-order").show();
  });
  // order confirmation / delivery
  $("#confirmation").click(function(event) {
    event.preventDefault();
    let number = $("#confirmation").val();
    console.log(number);
    let recOption = $("#rec-option").val();
    let address = 0;
    if (recOption === "delivery") {
      let street = $("#street").val();
      let city = $("#city").val();
      let zip = $("#zip").val();
      address = street + "<br>" + city + ", " + zip;
    }
    let cardName = $("#ccname").val();
    let cardNum = $("#ccnum").val();
    let cardExp = $("#ccexp").val();
    let cardPin = $("#ccpin").val();

    let paid = cardMojo(cardName, cardNum, cardExp, cardPin);

    let receipt = receiptHTML(number, paid, address, recOption);
    
    $("#receipt").html(receipt);
    $("#confirm-order").hide();
    $("#receipt").show();
  })
  // adjust prices for sizes
  // UI
});