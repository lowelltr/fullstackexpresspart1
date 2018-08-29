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
    let idCount = cartItems.length;

        cart.get("/cart-items",(req,res)=>{
        console.log("GET");
        res.send(cartItems);
    });
    cart.post("/cart-items",(req,res)=>{
            cartItems.push({
                id: req.body,
                product: req.body,
                price: req.body,
                quantity: req.body,
                id: idCount++
    });
            res.send(cartItems);
});
    
        cart.put("/cart-items/:id", (req, res) => {
        let count = 0;
        console.log(req.params.id);
        console.log(req.body);
        for (let cart of cartItems) {
            if (cart.id == req.params.id) {
                let updatedCartItems = {
                    id: req.body,
                    product: req.body,
                    price: req.body,
                    quantity: req.body,
                    id: Number(req.params.id)
                }
                cartItems.splice(count, 1, updatedCartItems);
            }
            count++;
        }
        res.send(cartItems);
    });

    cart.delete("/cart-items/:id", (req, res) => {
        
        let count = 0;
        for (let cart of cartItems) {
            if (cartItems.id == req.params.id) {
                cartItems.splice(count, 1);
            }
            count++;
        }
        res.send(cartItems);
    });

    module.exports = cart;