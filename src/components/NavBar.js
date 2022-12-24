import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Current from './CurrentWeather'
import Weekly from './WeeklyForecast'
import Map from './WeatherMap'

function navBar() {
  return (
    <div className="App">
      <h1>weather stuff</h1>
      <div>
      <div>
          <Route exact path="/"></Route>
          <BrowserRouter>
            <Routes>
              <Route>
              <Route exact path="/current">
                <Current />
              </Route>
              <Route exact path="/weekly">
                <Weekly />
              </Route>
              <Route exact path="/map" element ={<Map/>}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default navBar;
