import React, { useState } from "react";
import PizzaBox from "./pizzaBox";

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





const PizzaList = () => {
    const [normalPizzas, setNormalPizzas] = useState(normalPizzaArray);
    const [veganPizzas, setVeganPizzas] = useState(veganPizzaArray);
    const [glutenFreePizzas, setGlutenFreePizzas] = useState(glutenFreePizzaArray);
    


    return (
        <>
            <div className="text-center">
                <h2>Normal Pizzas!</h2>
            </div>
            <div className="row align-stretch">
                {normalPizzas.map((p) => (
                    <div className="col-3 p-2 m-5 border border-dark rounded">
                        <PizzaBox id={p.id} pizza={p} />
                        <button className="btn btn-primary d-block" style={{marginBottom: '1em', marginTop: '1em'}}>Customise</button>
                        <button className="btn btn-primary d-block">buy</button>
                    </div>
                
                ))}
            </div>

            <div className="text-center">
                <h2>Vegan Pizzas!</h2>
            </div>
            <div className="row align-stretch">
                {veganPizzas.map((p) => (
                    <div className="col-3 p-2 m-5 border border-dark rounded">
                        <PizzaBox id={p.id} pizza={p} />
                        <button className="btn btn-primary d-block" style={{marginBottom: '1em', marginTop: '1em'}}>Customise</button>
                        <button className="btn btn-primary d-block">buy</button>
                    </div>
                
                ))}
            </div>

            <div className="text-center">
                <h2>Gluten-Free Pizzas!</h2>
            </div>
            <div className="row align-stretch">
                {glutenFreePizzas.map((p) => (
                    <div className="col-3 p-2 m-5 border border-dark rounded">
                        <PizzaBox id={p.id} pizza={p} />
                        <button className="btn btn-primary d-block" style={{marginBottom: '1em', marginTop: '1em'}}>Customise</button>
                        <button className="btn btn-primary d-block">buy</button>
                    </div>
                
                ))}
            </div>
        </>
    );
};

export default PizzaList;