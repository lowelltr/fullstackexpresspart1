"use strict";
const express = require("express");
const app = express();
const cart = require("./routes/route")


app.use(express.json());
app.use(express.static("./public"));
app.use("/",cart);

const port = 3000;

app.listen(port,()=>{
    console.log(`Server is running on Port: ${port}`)
});
