"use strict";
function CartService($http) {
  const vm = this;
  vm.getAllItems = () => {
    return $http({
      url: "/cart-items",
      method: "GET"
    }).then((response) => {
      vm.cart = response.data;
      return vm.cart;
    });
  };
}
  angular
  .module("App")
  .service("CartService", CartService);