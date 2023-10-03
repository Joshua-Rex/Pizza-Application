// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const crusts = ["Thin Italian", "Stone Crust", "Cheese Stuffed Crust", "Vegan", "Gluten-Free"];
const sizes = ["Small (8\")", "Medium (12\")", "Large(16\")", "Pizzanormous (20\")"];
const sides = ["Salad", "Garlic Bread", "Cheesy Garlic Bread", "Colesaw", "Chicken Wings"];
const drinks = ["Pepsi", "Pepsi Max", "Dr Pepper", "7-UP", "Tango"];

app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"});
});

app.get("/pizzaBox", (req, res) => {
    res.send(pizzaBox);
})

app.listen(PORT, () =>  {
    console.log('Server listening on ' + PORT);
});
