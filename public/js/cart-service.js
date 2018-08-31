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
    vm.addItem = (newItem) => {
    return $http({
      url: "/cart-items",
      method: "Post",
    }).then((response) => {
      vm.cart = response.data;
      return vm.cart;
    });
  };
    vm.removeItem = (id) => {
    return $http({
      url: "/cart-items/"+id,
      method: "Delete",
    }).then((response) => {
      vm.cart = response.data;
      return vm.cart;
    });


  };
    vm.updateItem = (cart, id) => {
    return $http({
      url: "/cart-items/"+ id,
      method: "Put",
      data: cart
    }).then((response) => {
      vm.cart = response.data;
      return vm.cart;
    });
  };
}

  angular
  .module("App")
  .service("CartService", CartService);