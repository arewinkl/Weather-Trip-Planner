import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import { Routes, Route, Link } from "react-router-dom";
import CurrentWeather from "./components/CurrentWeather";
import WeeklyForecast from "./components/WeeklyForecast";
import WeatherMap from "./components/WeatherMap";
import GetAllWeather from "./services/UserServices";
import { isCompositeComponent } from "react-dom/test-utils";

GetAllWeather();

function App() {
  const API_KEY = process.env.REACT_APP_WEATHER_KEY;
  const NEWS_API_KEY = process.env.REACT_APP_NEWS_KEY;
  const [current, setCurrent] = useState([]);
  const [weekly, setWeekly] = useState([]);
  const [news, setNews] = useState([])
  const [map, setMap] = useState([]);

  useEffect(() => {
    const data = window.localStorage.getItem("current_weather_data");
    if (data !== null) setCurrent(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "current_weather_data",
      JSON.stringify(current)
    );
    if (current.length < 1) {
    }
  }, [current]);

  useEffect(() => {
    const data = window.localStorage.getItem("weekly_weather_data");
    if (data !== null) setWeekly(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("weekly_weather_data", JSON.stringify(weekly));
    if (weekly.length < 1) {
    }
  }, [weekly]);

  async function currentSearch(a, b) {
    const currentWeather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${a},${b}&appid=${API_KEY}`
    );
    setCurrent(currentWeather);
  }

  async function weeklySearch(a, b) {
    const weeklyWeather = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${a},${b}&appid=${API_KEY}`
    );
    setWeekly(weeklyWeather);
  }

  async function newsSearch() {
    const newsLink = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${NEWS_API_KEY}`
    );
    setNews(newsLink)
  }

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${NEWS_API_KEY}`)
    .then(res => res.json())
    .then((data) => setNews(data))
  }, []);


console.log(news)
  return (
    <div className="App">
      <NavBar currentSearch={currentSearch} weeklySearch={weeklySearch} />
      <header className="App-header"></header>
      <Routes>
        <Route path="/current" element={<CurrentWeather current={current} />} />
        <Route path="/weekly" element={<WeeklyForecast weekly={weekly} />} />
        <Route path="/map" element={<WeatherMap />} />
      </Routes>
    </div>
  );
}

export default App;
