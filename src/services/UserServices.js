import API_KEY from "../App";
import React from "react";
import axios from "axios";
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
