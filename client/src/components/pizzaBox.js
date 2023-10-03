import React, { useState } from "react";
const pizzaSize = [{name: "Small (8\")", price: 0}, {name: "Medium (12\")", price: 2.00}, {name: "Large(16\")", price: 4.00}, {name: "Pizzanormous (20\")", price: 8.00}];


const PizzaBox = ( {pizza} ) => {
    const [sizes, setSizes] = useState(pizzaSize);
    return (
        <>
            <p>{pizza.name}</p>
            <p>Calories: {pizza.calories}kcal</p>
            <label for="sizes" style={{marginRight: '1em'}}>Choose a size: </label>
            <select>
                <option value={sizes[0]}>{sizes[0]}</option>
                <option value={sizes[1]}>{sizes[1]}</option>
                <option value={sizes[2]}>{sizes[2]}</option>
                <option value={sizes[3]}>{sizes[3]}</option>
            </select>
        </>
    );
};

export default PizzaBox;