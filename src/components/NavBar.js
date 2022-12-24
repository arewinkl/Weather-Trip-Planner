import { Routes, Route } from 'react-router-dom'
import Current from './CurrentWeather'
import Weekly from './WeeklyForecast'
import Map from './WeatherMap'

export default function NavBar() {
  return (
    <div className= 'navbar'>
      <div className='search-bar'>
          <input
          type='search'
          >
          </input>
          <input
          type='button'
          value='submit'
          >
          </input>

      </div>
    <div className="pages">
      <ul className="page-links">
        <li className="li-link">
          <a href="/" className="a-link">
            Home
          </a>
        </li>
        <li className="li-link">
          <a href="/current" className="a-link">
            Current Weather
          </a>
        </li>
        <li className="li-link">
          <a href="/weekly" className="a-link">
            Weekly Forecast
          </a>
        </li>
        <li className="li-link">
          <a href="/map" className="a-link">
            Weather Map
          </a>
        </li>
      </ul>
    </div>
    </div>
  )
}
