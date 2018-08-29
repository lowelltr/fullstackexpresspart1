"use strict";
const shoppingCart = {
  template: `
  
  <section ng-repeat="cart in $ctrl.cartItem">
      <p>id: {{ cart.id }}</p>
      <p>Product: {{ cart.product }}</p>
      <p>Price: {{ cart.price }}</p>
      <p>Quantity: {{ cart.quantity }}</p>
  </section>

  `,
  controller: ["CartService", function(CartService) {
    const vm = this;
    CartService.getAllCart().then((response) => {
      vm.cartItems = response;
    });
}]
};
angular
  .module("App")
  .component("shoppingCart", shoppingCart);