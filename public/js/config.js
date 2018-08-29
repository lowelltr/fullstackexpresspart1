"use strict";
angular
  .module("App")
  .config(($routeProvider) => {
    $routeProvider
      .when("/cart",{
          template:`<shopping-cart></shopping-cart>`
      });
    });
