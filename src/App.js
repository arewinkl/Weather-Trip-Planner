import "./App.css";
import React from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import Current from "./components/CurrentWeather";
import Weekly from "./components/WeeklyForecast";
import Map from "./components/WeatherMap";

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
      <NavBar />
      <header className="App-header">
        <h2>Weather Planner</h2>
      </header>
      <main>
        <div>
          {/* <Route exact path="/"></Route> */}
          <Route exact path="/current">
            <Current />
          </Route>
          <Route exact path="/weekly">
            <Weekly />
          </Route>
          <Route exact path="/map">
            <Map />
          </Route>
        </div>
      </main>
    </div>
  );
}

export default App;
