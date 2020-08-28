// Business Logic PizzaParlor
function PizzaParlor() {
  this.pizzas = [];
}




// Business Logic Pizza

let pizzaParlor = new PizzaParlor();

// Interface Logic
$(document).ready(function() {
  $("#order-form").click(function(event) {
    event.preventDefault();

  });
});