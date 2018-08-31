    "use strict";
    const express = require("express");
    const cart = express.Router();
    const pool= require("../pg-connection-pool.js");
    
   

        cart.get("/cart-items",(req,res)=>{
        pool.query("Select * From ShoppingCart").then((result)=>{
        res.send(result.rows);
     });
    });
        cart.post("/cart-items",(req,res)=>{
            pool.query("Insert Into ShoppingCart(product, price, quantity) Values($1::text, $2::int,$3::int)", [req.body.product, req.body.price,req.body.quantity]).then(() => {
                pool.query("Select * From ShoppingCart").then((results) => {
                  console.log(results.rows);
                  res.send(results.rows);
                });
              }); 
            });
    
            cart.put("/cart-items/:id", (req, res) => {
            pool.query("Update ShoppingCart Set product=$1::text, price=$2::int, quantity=$3::int where id = $4::int", [req.body.product,req.body.price,req.body.quantity,(req.params.id)]).then(()=> { pool.query("Select * From ShoppingCart").then ((results) => {
                console.log(results.rows);
                  res.send(results.rows);
            });
            });
        });
        

    cart.delete("/cart-items/:id", (req, res) => {
    pool.query("Delete  From ShoppingCart Where id=$1::int",[parseInt(req.params.id)]).then(()=>{
        pool.query("Select * From ShoppingCart Order by id").then((results) => {
            console.log(results.rows);
            res.send(results.rows);
          });
        });
    });


    module.exports = cart;