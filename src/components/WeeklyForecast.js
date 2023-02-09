// import { all } from "axios";

export default function WeeklyForecast({ weekly }) {
  if (weekly.length < 1) {
    return "Loading...";
  }

  const all_temps = weekly.data.list;
  const weeklyDays = [];
  const data = [];
  const city = weekly.data.city.name;
  const country = weekly.data.city.country;
  console.log(weekly.data);
  console.log(all_temps, "stats");
  for (let x = 0, week = []; x < all_temps.length; x++) {
    //TODO this gets the days of the week for the weekly forecast.
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

  return (
    <div>
      <div>
        <h3>
          Six Day Forecast For {city}, {country}
        </h3>
        <div className="weather_day_container">
          {data.map((item, k) => {
            const sum =
              Math.round(
                item.weather.reduce((a, b) => a + b, 0) / item.weather.length
              ).toString() + "\u00B0F";
            function clicked() {
              console.log("clicked", k);
              let cow = Number(
                new Date(all_temps[k].dt * 1000).toString().substring(16, 18)
              );
              cow > 12 ? console.log(cow - 12, "PM") : console.log(cow, "AM");
            }
            return (
              <div
                onClick={clicked}
                // onClick={console.log("clicky")}
                id={k}
                key={k}
                className="day_container"
              >
                {" "}
                <h4>{item.day}</h4>
                <h4>{sum}</h4>
                <img
                  alt="weather-pic"
                  src={`https://openweathermap.org/img/w/${item.icon}.png`}
                />
                <h5>{item.description}</h5>
                <button>Hourly.</button>
              </div>
            );
          })}
        </div>
        <div>Other Information</div>
      </div>
    </div>
  );
}
