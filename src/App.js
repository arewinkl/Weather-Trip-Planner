import "./App.css";
import React from "react";
import axios from "axios";
// import getAllWeather from "./services/UserServices";

const API_KEY = process.env.REACT_APP_WEATHER_KEY;
console.log(API_KEY);

function getAllWeather() {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=Denver,Colorado&appid=${API_KEY}`
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
getAllWeather();
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
