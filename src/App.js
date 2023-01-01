import './App.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import CurrentWeather from './components/CurrentWeather'
import WeeklyForecast from './components/WeeklyForecast'
import WeatherMap from './components/WeatherMap'
import GetAllWeather from "./services/UserServices";
import { isCompositeComponent } from 'react-dom/test-utils'


GetAllWeather()

function App() {

    const API_KEY = process.env.REACT_APP_WEATHER_KEY
    const [current, setCurrent] = useState([])
    const [weekly, setWeekly] = useState([])
    const [map, setMap] = useState([])

  
    useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Denver,Colorado&appid=${API_KEY}`
      )
      .then((res) => res)
      .then((res) => setCurrent(res))
      .catch((err) => {
        console.log(err);
    })}
      , [], 
    );



  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h2>Weather Planner Nav</h2>
      </header>
      <Routes>
        <Route 
          path="/current" 
          element={<CurrentWeather current = {current}/>} 
        />
        <Route
          path="/weekly"
          element={<WeeklyForecast />}
        />
        <Route
          path="/map"
          element={<WeatherMap />}
        />
      </Routes>
    </div>
  )
}

export default App
