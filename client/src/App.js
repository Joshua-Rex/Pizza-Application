import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img/>
        <h1>The Best Pizza Place Around</h1>
        <nav>Nav goes here</nav>
      </header>
      <div className="normalPizza">
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
        </div>
        <p>
          {!data ? "Loading..." : data}
        </p>
    </div>
  );
}

export default App;
