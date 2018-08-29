"use strict";
const express = require("express");
const app = express();
const cartItems = require("./router/routes")


app.use(express.json());
app.use(express.static("./public"));
app.use("/",cartItems);

const port = 3000;

app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`)
});
