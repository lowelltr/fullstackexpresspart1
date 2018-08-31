"use strict";
const shoppingCart = {
  template: `
    <h1>Grocery Cart</h1>

  <form ng-submit="$ctrl.addItem($ctrl.newItem);">

  <input type="text" placeholder="Product" ng-model="$ctrl.newItem.product">

  <input type="text" placeholder="Price" ng-model="$ctrl.newItem.price">

  <input type="text" placeholder="Quantity" ng-model="$ctrl.newItem.quantity">

  <button>Submit</button>
  </form>
  <div>
  <section ng-repeat="cart in $ctrl.cartItems">
              <p>Product: {{ cart.product }}</p>
              <p>Price: {{ cart.price }}</p>
              <p>Quantity: {{ cart.quantity }}</p>
              <button ng-click="$ctrl.removeItem(cart.id);">X</button>
              <button ng-click="$ctrl.updateItem($ctrl.newItem, cart.id);">Edit</button>
  </section>
   </div>
       
   
  `,

  controller: ["CartService", function(CartService) {
    const vm = this;

    CartService.getAllItems().then((response) => {
      vm.cartItems = response;
    });
    vm.addItem=(newItem)=>{
      CartService.addItem(newItem).then((response)=>{
        vm.cartItems=response
        console.log(response);
      });
    };
    vm.removeItem=(id)=>{
      CartService.removeItem(id).then((response)=>{
        console.log(id);
        vm.cartItems=response;
      });
    };
    vm.updateItem=(cart, id)=>{
      CartService.updateItem(cart, id).then((response)=>{
        console.log(cart);
        vm.cartItems=response;
      });
    };
  }]
};
angular
  .module("App")
  .component("shoppingCart", shoppingCart);