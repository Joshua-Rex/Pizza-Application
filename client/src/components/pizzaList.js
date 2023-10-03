import React, { useEffect, useState } from "react";
import PizzaBox from "./pizzaBox";

const normalPizzaArray = [
    {
        id: 1,
        name: "The Cheesinator",
        calories: 2171,
        price: 18.99,
    },
    {
        id: 2,
        name: "The Tomatinator",
        calories: 2172,
        price: 18.99,
    },
    {
        id: 3,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.99,
    },
    {
        id: 4,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.99,
    },
    {
        id: 5,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.99,
    },
    {
        id: 6,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.99,
    },
    {
        id: 7,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.99,
    },
    {
        id: 8,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.99,
    },
    {
        id: 9,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.99,
    },
    {
        id: 10,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.99,
    },
    {
        id: 11,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.99,
    },
    {
        id: 12,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.99,
    },
    {
        id: 13,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.99,
    },
    {
        id: 14,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.99,
    },
    {
        id: 15,
        name: "The Mighty Meatinator",
        calories: 2471,
        price: 18.99,
    },
];
const veganPizzaArray = [
    {
        id: 1,
        name: "The Vegan Meatinator",
        calories: 1189,
        price: 18.99,
    },
    {
        id: 2,
        name: "The Vegan Meatinator",
        calories: 1189,
        price: 18.99,
    },
    {
        id: 3,
        name: "The Vegan Meatinator",
        calories: 1189,
        price: 18.99,
    },
    {
        id: 4,
        name: "The Vegan Meatinator",
        calories: 1189,
        price: 18.99,
    },
    {
        id: 5,
        name: "The Vegan Meatinator",
        calories: 1189,
        price: 18.99,
    },
];
const glutenFreePizzaArray = [
    {
        id: 1,
        name: "The Perrinator",
        calories: 677,
        price: 18.99,
    },
    {
        id: 2,
        name: "The Gluten-Free Meatinator",
        calories: 677,
        price: 18.99,
    },
]

const PizzaList = () => {
    const [normalPizzas, setNormalPizzas] = useState(null);
    const [veganPizzas, setVeganPizzas] = useState(veganPizzaArray);
    const [glutenFreePizzas, setGlutenFreePizzas] = useState(glutenFreePizzaArray);
    
    const fetchPizzas = () => {
        fetch("/normal")
        .then((res) => res.json())
        .then((normal) => setNormalPizzas(normal));

        fetch("/vegan")
        .then((res) => res.json())
        .then((vegan) => setVeganPizzas(vegan));

        fetch("/glutenFree")
        .then((res) => res.json())
        .then((glutenFree) => setGlutenFreePizzas(glutenFree));
    }

    useEffect(() => {
        fetch("/normal")
          .then((res) => setNormalPizzas(res));
      });

    return (
        <>
            <div className="text-center">
                <h2>Normal Pizzas!</h2>
            </div>
            <div className="row align-stretch">
                {!normalPizzas ? "Loading..." : normalPizzas.map((p) => (
                    <div className="col-3 p-2 m-5 border border-dark rounded">
                        <PizzaBox id={p.id} pizza={p} />
                        <button className="btn btn-primary d-block" style={{marginBottom: '1em', marginTop: '1em'}}>Customise</button>
                        <button className="btn btn-primary d-block">buy</button>
                    </div>
                
                ))
                }
                
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