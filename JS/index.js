// var myIndex = 0;
// carousel();
// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   myIndex++;
//   if (myIndex > x.length) { myIndex = 1 }
//   x[myIndex - 1].style.display = "block";
//   setTimeout(carousel, 2000);
// }

function Order(type, size, crust, topping,) {
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
}

Order.prototype.fullOrder = function() {
  return `${this.type} size ${this.size} and ${this.crust} as crust ${this.topping} as topping`
};

function Total(price, quantity, crust, topping, delivery) {
  this.price = price;
  this.quantity = quantity;
  this.crust = crust;
  this.topping = topping;
  this.delivery = delivery; 
}

Total.prototype.finalTotal = function() {
  return (this.price + this.crust + this.topping)* this.quantity + this.delivery;
};

var sizePrice = [1200, 1000, 800, 550];
var crustPrices = [50, 55, 60, 70, 100];
var toppingPrices = [100, 110, 120, 130, 140, 150, 160];
var deliveryPrices = [0, 300];

function Deliver(name, location) {
  this.name = name;
  this.location = location;
}

Deliver.prototype.finalDeliver = function() {
  return this.name + this.location;
};

$(document).ready(function() {
  $('form#form1').submit(function(event) {
    event.preventDefault();
    var pizzaType = $('#type').val();
    var name = $('#name1').val();
    var location = $('#location').val();
    var pizzaSize = parseInt($('#size').val());
    var pizzaCrust = parseInt($('#crust').val());
    var pizzaTop = parseInt($('#top').val());
    var pizzaQty = parseInt($('#qty').val());
    var pizzaPick = parseInt($('#pick').val());
    var price = sizePrice[pizzaSize - 1];
    var crustCost = crustPrices[pizzaCrust - 1];
    var toppingCost = toppingPrices[pizzaTop - 1];
    var deliveryCost = deliveryPrices[pizzaPick - 1];

    newOrder = new Order(pizzaType, pizzaSize, pizzaCrust, pizzaTop);
    newTotal = new Total(price, pizzaQty, toppingCost, crustCost, deliveryCost);
    newDeliver = new Deliver(name, location);

    if (pizzaPick === 1) {
      alert(`Your order is ${newOrder.fullOrder()}.Your bill is ${newTotal.finalTotal()}.You will receive your pizza in the next few minutes.`);
      document.getElementById("specs").innerHTML =
      `Your order is ${newOrder.fullOrder()}.`
      document.getElementById("status").innerHTML =
      `Your bill is ${newTotal.finalTotal()}.You will receive your pizza in the next few minutes.`
    } else {
      if (pizzaPick === 2) {
        alert(`Your order is ${newOrder.fullOrder()}.Your bill is ${newTotal.finalTotal()}.You pizza will be delivered in the next 30minutes.`);
        prompt(`Your delivery details.`);
        alert(`Your bill is ${newTotal.finalTotal()}.You pizza will be delivered in the next 30minutes.`);
        document.getElementById("specs").innerHTML =
        `Your order has been received and it will be delivered at ksh.300.`
        document.getElementById("status").innerHTML =
        `Your order is ${newOrder.fullOrder()}.`
        document.getElementById("total").innerHTML =
        `Your bill is ${newTotal.finalTotal()}.You pizza will be delivered in the next 30minutes.`
        document.getElementById("loc").innerHTML =
        `Your delivery details.`
      }
    }
  });

  $('form#form2').submit(function(event) {
    event.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#comment').val();
    document.getElementById("thank").innerHTML =
    `Hello ${name}.Thank You for Contacting Us.`
  });
});



