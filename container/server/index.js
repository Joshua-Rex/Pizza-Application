// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const pizzaBox = (
<div className="pizzaBox">
    <img className="pizzaImg" />
    <h2 className="pizzaName">Demo Pizza 1</h2>
    <p className="pizzaCal">2202</p>
    <select className="pizzaSizes">
        <option className="smallSize">Small</option>
        <option className="mediumSize">Medium</option>
        <option className="bigSize">Big</option>
        <option className="superBigSize">Pizza Big</option>
    </select>
    <button className="customiseButton">Customise</button>
</div>
);

app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"});
});

app.get("/pizzaBox", (req, res) => {
    res.send(pizzaBox);
})

app.listen(PORT, () =>  {
    console.log('Server listening on ' + PORT);
});
