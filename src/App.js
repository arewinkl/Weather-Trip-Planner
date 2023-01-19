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
    // const [longitude, setLongitude] = useState('')
    // const [latitude, setLatitude] = useState('')


async function currentSearch(a, b){
  const currentWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${a},${b}&appid=${API_KEY}`)
  setCurrent(currentWeather)
  // setLongitude(current.data.coord.lon)
  // setLatitude(current.data.coord.lat)
} 


  async function weeklySearch(a, b){
    const weeklyWeather = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${a},${b}&appid=${API_KEY}`)
    setWeekly(weeklyWeather)
    console.log(weeklyWeather)
  }


// async function weeklySearch(a, b){
//   const weeklyWeather = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${a}&lon=${b}&appid=${API_KEY}`)
//   setWeekly(weeklyWeather)
//   console.log(weeklyWeather)
// }

  return (
    <div className="App">
      <NavBar currentSearch={currentSearch} weeklySearch={weeklySearch}/>
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
