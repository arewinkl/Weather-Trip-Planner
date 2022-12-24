import './App.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import CurrentWeather from './components/CurrentWeather'
import WeeklyForecast from './components/WeeklyForecast'
import WeatherMap from './components/WeatherMap'
import GetAllWeather from "./services/UserServices";



function App() {

  const [current, setCurrent] = useState([])


  // function getWeather(e){
  //   GetAllWeather(e)
  //   .then(res => {
  //     console.log(res)
  //     setCurrent(res)
  //   })
  // }

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h2>Weather Planner Nav</h2>
      </header>
      <Routes>
        <Route 
          path="/current" 
          element={<CurrentWeather/>} 
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
