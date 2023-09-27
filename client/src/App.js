import React from "react";
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);
  const [pizzaBox, setPizzaBox] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));

    // fetch("/api")
    //   .then((res) => res.json())
    //   .then((data) => setData(data.testNum));
  }, []);
  
  React.useEffect(() => {
    fetch("/pizzaBox")
      .then((res) => res.text())
      .then((pizzaBox) => setPizzaBox(pizzaBox));

      const root = ReactDOM.createRoot(document.getElementById('normalPizza'));
      root.render(pizzaBox);
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img/>
        <h1>The Best Pizza Place Around</h1>
        <nav>Nav goes here</nav>
      </header>
      {/* <div className="normalPizza">
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
        </div> */}
        <div id="normalPizza">
          {/*!pizzaBox ? <p>"Page Loading!"</p> : pizzaBox*/}
        </div>
        <p>
          {!data ? "Loading..." : data}
        </p>
    </div>
  );
}

export default App;
