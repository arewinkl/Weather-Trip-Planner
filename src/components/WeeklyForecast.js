// import { all } from "axios";
import HourlyForecast from "./HourlyForecast";
import { useState } from "react";

export default function WeeklyForecast({ weekly }) {
  const [Hourly, setHourly] = useState(false);
  if (weekly.length < 1) {
    return "Loading...";
  }

  const all_temps = weekly.data.list;
  const weeklyDays = [];
  const data = [];
  const city = weekly.data.city.name;
  const country = weekly.data.city.country;

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
        description: all_temps[x].weather[0].description,
        weather: [Math.round((all_temps[x].main.temp - 273) * (9 / 5) + 32)],
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

      data[index].weather.push(
        Math.round((all_temps[x].main.temp - 273) * (9 / 5) + 32)
      );
      data[index].time.push(
        Number(new Date(all_temps[x].dt * 1000).toString().substring(16, 18))
      );
    }
  }
  console.log(data);

  // console.log(Hourly, "sffdsfdsfd");
  // const clicked = (key) => {
  //   console.log("yep", key);
  //   // console.log(data[key]);
  //   setHourly(true);
  //   // Hourt(key);
  // };
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
                  alt="weather-pic"
                  src={`https://openweathermap.org/img/w/${item.icon}.png`}
                />
                <h5>{item.description}</h5>
                <button
                  id={`clicked-${key}`}
                  onClick={() => {
                    Hourt(key);
                    // console.log(key, "sssdddddd");

                    setHourly(true);
                  }}
                >
                  Hourly Forecast
                </button>
              </div>
            );
          })}
        </div>
        <div>Other Information</div>
        {Hourly === true ? <HourlyForecast /> : null}

        <div></div>
        <Hourt />
      </div>
    </div>
  );

  function Hourt(key) {
    // console.log(key, "this is a key");

    if (Hourly == false) {
      return "Loading...";
    }

    console.log(key);
    return (
      <div>
        <h2>{data[0].day}</h2>
        <h4>{data[0].weather[0].toString() + "\u00B0F"}</h4>
        <h4>
          {data[0].time[0] > 12
            ? (data[0].time[0] - 12).toString() + ":00 PM"
            : data[0].time[0].toString() + ":00 AM"}
        </h4>

        <div></div>
      </div>
    );
  }
}
