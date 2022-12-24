import API_KEY from "../App";
import axios from "axios";
function getAllWeather() {
  const API_KEY = process.env.REACT_APP_WEATHER_KEY
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
export default getAllWeather;
