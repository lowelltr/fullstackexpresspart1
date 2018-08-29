"use strict";
const express = require("express");
const cart = express.Router();
const cartItems=[
    {
        id:1,
        product:"Fish",
        price:100,
        quantity:50,
    },
    {
        id:2,
        product:"Steaks",
        price:5000,
        quantity:50,
    },
    {
        id:3,
        product:"Chicken",
        price:500,
        quantity:50,
}];

cart.get("/cart-items"),(req,res)=>{
    console.log("GET");
    res.send(cartItems);
}

module.exports = cartItems;