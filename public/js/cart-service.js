"use strict";
function CartService($http) {
  const vm = this;
  vm.get = () => {
    return $http({
      url: "/cart-items",
      method: "GET"
    }).then((response) => {
      vm.cartItems = response.data;
      return vm.cartItems;
    });
  };
}
  angular
  .module("App")
  .service("CartService", CartService);