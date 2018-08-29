"use strict";
const shoppingCart = {
  template: `
  
  <section ng-repeat="cart in $ctrl.cart-items">
      <p>id: {{ cart-items.id }}</p>
      <p>Product: {{ cart-items.product }}</p>
      <p>Price: {{ cart-items.price }}</p>
      <p>Quantity: {{ cart-items.quantity }}</p>
  </section>

  `,
  controller: ["CartService", function(CartService) {
    const vm = this;
    CartService.getAllCart().then((response) => {
      console.log(vm.cartItems)
      vm.cart = response;
    });
}]
};
angular
  .module("App")
  .component("shoppingCart", shoppingCart);