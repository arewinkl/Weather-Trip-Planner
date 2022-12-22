import "./App.css";
import React from "react";

const API_KEY = process.env.REACT_APP_WEATHER_KEY;
console.log(API_KEY);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Weather Planner</h2>
      </header>
      <body>
        <div>
          <p>Take some time to check the weather for your upcoming location!</p>
          <input type="search"></input>
          <button>Search</button>
        </div>
      </body>
    </div>
  );
}

export default App;
