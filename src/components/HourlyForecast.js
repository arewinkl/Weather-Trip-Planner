import WeeklyForecast from "./WeeklyForecast";

export default function HourlyForecast({data, dayKey, hourly}) {


    if (hourly == false) {
      return "Loading...";
    }
    return (
      <div className="hours">
        <h2>{data[dayKey].day}day Hourly Forecast</h2>
        <div className="weather_hour_container">
          {data[dayKey].weather.map((item, index) => {
            console.log(Math.max(...data[dayKey].wind.speed));

            return (
              <div key={index} className="hours_container">
                <h4>
                  {data[dayKey].time[index] > 12
                    ? (data[dayKey].time[index] - 12).toString() + ":00 PM"
                    : data[dayKey].time[index].toString() + ":00 AM"}
                </h4>
                <img
                  alt="pics"
                  src={`https://openweathermap.org/img/w/${data[dayKey].hourIcons[index]}.png`}
                />
                <h5>{data[dayKey].description[index]}</h5>
                <h3>{item.toString() + "\u00B0F"}</h3>
              </div>
            );
          })}
        </div>
        <hr className="divider"></hr>

        <div className="wind_container">
          <h3>Wind</h3>
          <h5>
            Speed:{Math.min(...data[dayKey].wind.speed)}mph -
            {Math.max(...data[dayKey].wind.speed)}mph
          </h5>
          <h5>
            Average gusts:{" "}
            {(
              data[dayKey].wind.gust.reduce((a, b) => a + b) /
              data[dayKey].wind.gust.length
            ).toFixed(2)}{" "}
            mph
          </h5>
        </div>
        <div className="humidity_container">
          <h3>Humidity Level</h3>
          <h1>
            {" "}
            {(
              data[dayKey].humidity.reduce((a, b) => a + b) /
              data[dayKey].humidity.length
            ).toFixed(2)}{" "}
            %
          </h1>
        </div>
      </div>
    );
}
