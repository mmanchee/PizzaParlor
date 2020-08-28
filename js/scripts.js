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
    const first = $("#first-name").val();
    const last = $("#last-name").val();
    const phone = $("#phone-number").val();
    const size = $("#pizza-size").val();
    $("input:checkbox[name=pizza-topping]:checked").each(function() {
      const topping.push($(this).val());
    })

    (first, last, phone, size, topping);
  });
});