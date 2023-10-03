import React, { useState } from "react";
const pizzaSize = [
    {
        name: "Small 8\"",
        price: 0
    },
    {
        name: "Medium 12\"",
        price: 2.00
    },
    {
        name: "Large16\"",
        price: 4.00
    },
    {
        name: "Pizzanormous 20\"",
        price: 8.00
    }
];


const PizzaBox = ( {pizza} ) => {
    const [sizes, setSizes] = useState(pizzaSize);
    return (
        <>
            <p>{pizza.name}</p>
            <p>Calories: {pizza.calories}kcal</p>
            <label for="sizes" style={{marginRight: '1em'}}>Choose a size: </label>
            <select>
                {sizes.map((s) => (
                    <option value={s.name}>{s.name} | £{pizza.price + s.price}</option>
                ))}
            </select>
        </>
    );
};

export default PizzaBox;