const axios = require(axios);

function getAllWeather() {
  axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?q=Denver,Colorado&appid=5f06a771d25b62ba916f476b3f89f810"
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
