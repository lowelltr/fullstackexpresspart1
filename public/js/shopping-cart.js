"use strict";
const shoppingCart = {
  template: `
  {{2+2}}
  <section ng-repeat="cart in $ctrl.cartItems">
      <p>id: {{ cart.id }}</p>
      <p>Product: {{ cart.product }}</p>
      <p>Price: {{ cart.price }}</p>
      <p>Quantity: {{ cart.quantity }}</p>
  </section>
  `,

  controller: ["CartService", function(CartService) {
    const vm = this;
    CartService.getAllItems().then((response) => {
      vm.cartItems = response;
    });
}]
};
angular
  .module("App")
  .component("shoppingCart", shoppingCart);