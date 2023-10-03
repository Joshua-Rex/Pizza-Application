import React from "react";
import './App.css';
import Banner from "./components/banner";
import PizzaList from "./components/pizzaList"

function App() {
  {/*
  const [data, setData] = React.useState(null);
  const [pizzaBox, setPizzaBox] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
*/}
  return (
    
    <div className="App">

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
      <link rel="stylesheet" href="css/globals.css" />
      <header className="App-header">
        <Banner>
          <div>The Best Pizza Place Around</div>
        </Banner>
      </header>
        <div id="normalPizza">
          {/*!pizzaBox ? <p>"Page Loading!"</p> : pizzaBox*/}
          <PizzaList/>
        </div>
        <p>
          {/*!data ? "Loading..." : data*/ "Loading..."}
        </p>
    </div>
  );
}

export default App;
