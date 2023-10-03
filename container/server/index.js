// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const normalPizzaArray = [
    {
        id: 1,
        name: "The Cheesinator",
        calories: 2171,
        price: 18.00,
    },
    {
        id: 2,
        name: "The Tomatinator",
        calories: 2172,
        price: 18.00,
    },
    {
        id: 3,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.00,
    },
    {
        id: 4,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.00,
    },
    {
        id: 5,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.00,
    },
    {
        id: 6,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.00,
    },
    {
        id: 7,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.00,
    },
    {
        id: 8,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.00,
    },
    {
        id: 9,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.00,
    },
    {
        id: 10,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.00,
    },
    {
        id: 11,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.00,
    },
    {
        id: 12,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.00,
    },
    {
        id: 13,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.00,
    },
    {
        id: 14,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.00,
    },
    {
        id: 15,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.00,
    },
];
const veganPizzaArray = [
    {
        id: 1,
        name: "The Vegan Meatinator",
        calories: 1189,
        price: 18.00,
    },
    {
        id: 2,
        name: "The Vegan Meatinator",
        calories: 1189,
        price: 18.00,
    },
    {
        id: 3,
        name: "The Vegan Meatinator",
        calories: 1189,
        price: 18.00,
    },
    {
        id: 4,
        name: "The Vegan Meatinator",
        calories: 1189,
        price: 18.00,
    },
    {
        id: 5,
        name: "The Vegan Meatinator",
        calories: 1189,
        price: 18.00,
    },
];
const glutenFreePizzaArray = [
    {
        id: 1,
        name: "The Perrinator",
        calories: 677,
        price: 18.00,
    },
    {
        id: 2,
        name: "The Gluten-Free Meatinator",
        calories: 677,
        price: 18.00,
    },
]

const crusts = [{name: "Thin Italian", price: 0 }, {name: "Stone Crust", price: 1.00}, {name: "Cheese Stuffed Crust", price: 3.00}, {name: "Vegan", price: 0}, { name: "Gluten-Free", price: 0}];
const sizes = [{name: "Small (8\")", price: 0}, {name: "Medium (12\")", price: 2.00}, {name: "Large(16\")", price: 4.00}, {name: "Pizzanormous (20\")", price: 8.00}];
const sides = [{name: "Salad", price: 1.00}, {name: "Garlic Bread", price: 2.00}, {name: "Cheesy Garlic Bread", price: 3.00}, {name: "Colesaw", price: 1.00}, {name: "Chicken Wings", price: 5.00}];
const drinks = [{name: "Pepsi", price: 4.00}, {name: "Pepsi Max", price: 3.00}, {name: "Dr Pepper", price: 4.00}, {name: "7-UP", price: 2.00}, {name: "Tango", price: 3.00}];

app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"});
});

app.get("/pizzaBox", (req, res) => {
    res.send(pizzaBox);
})

app.listen(PORT, () =>  {
    console.log('Server listening on ' + PORT);
});
