import API_KEY from "../App";
import axios from "axios";
import App from "../App";
import {useEffect, useState} from 'react'
function GetAllWeather() {
  const API_KEY = process.env.REACT_APP_WEATHER_KEY
  // const [data, setData] = useState([])

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=Denver,Colorado&appid=${API_KEY}`
    )
    .then((res) => {
      console.log(res.data);
      return res.data
    })
    // .then((data) => setData(data))
    .catch((err) => {
      console.log(err);
    });
}
export default GetAllWeather;
