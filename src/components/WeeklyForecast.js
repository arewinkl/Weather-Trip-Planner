// import { all } from "axios";
import HourlyForecast from "./HourlyForecast";
import { useState } from "react";

export default function WeeklyForecast({ weekly }) {
  const [hourly, setHourly] = useState(false);
  const [dayKey, setDayKey] = useState("");
  if (weekly.length < 1) {
    return "Loading...";
  }

  const all_temps = weekly.data.list;
  const weeklyDays = [];
  const data = [];
  const city = weekly.data.city.name;
  const country = weekly.data.city.country;
  console.log(data, "dataaaa");

  for (let x = 0, week = []; x < all_temps.length; x++) {
    if (
      !weeklyDays.includes(
        new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3)
      )
    ) {
      weeklyDays.push(
        new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3)
      );
      week.push(
        new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3)
      );
    }
    if (
      !data.some(
        (e) =>
          e.day ===
          new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3)
      )
    ) {
      data.push({
        day: new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3),
        description: [all_temps[x].weather[0].description],
        weather: [Math.round((all_temps[x].main.temp - 273) * (9 / 5) + 32)],
        hourIcons: [all_temps[x].weather[0].icon],
        wind: {
          gust: [all_temps[x].wind.gust],
          speed: [all_temps[x].wind.speed],
          degree: [all_temps[x].wind.deg],
        },
        humidity: [all_temps[x].main.humidity],
        time: [
          Number(new Date(all_temps[x].dt * 1000).toString().substring(16, 18)),
        ],
        icon: all_temps[x].weather[0].icon,
      });
    } else if (
      new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3) ===
      new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3)
    ) {
      let index = week.length - 1;
      data[index].description.push(all_temps[x].weather[0].description);
      data[index].hourIcons.push(all_temps[x].weather[0].icon);
      data[index].weather.push(
        Math.round((all_temps[x].main.temp - 273) * (9 / 5) + 32)
      );
      data[index].time.push(
        Number(new Date(all_temps[x].dt * 1000).toString().substring(16, 18))
      );

      data[index].wind.gust.push(all_temps[x].wind.gust);
      data[index].wind.speed.push(all_temps[x].wind.speed);
      data[index].wind.degree.push(all_temps[x].wind.deg);
      data[index].humidity.push(all_temps[x].main.humidity);
    }
  }

  return (
    <div>
      <div>
        <h3>
          Six Day Forecast For {city}, {country}
        </h3>
        <div className="weather_day_container">
          {data.map((item, key) => {
            const sum =
              Math.round(
                item.weather.reduce((a, b) => a + b, 0) / item.weather.length
              ).toString() + "\u00B0F";
            return (
              <div id={key} key={key} className="day_container">
                {" "}
                <h4>{item.day}</h4>
                <h4>{sum}</h4>
                <img
                  alt={`weather-pic${key}`}
                  src={`https://openweathermap.org/img/w/${item.icon}.png`}
                />
                <h5>{item.description[0]}</h5>
                <button
                  id={`clicked-${key}`}
                  onClick={() => {
                    console.log(key);
                    setHourly(true);
                    setDayKey(key);
                  }}
                >
                  Hourly Forecast
                </button>
              </div>
            );
          })}
        </div>
        <h2>Additional Forecasting</h2>
        <hr className="divider"></hr>

        {hourly === true ? <HourlyForecast data={data} hourly={hourly} dayKey={dayKey}/> : null}
        <div></div>
      </div>
      <hr className="divider"></hr>
    </div>
  );
}