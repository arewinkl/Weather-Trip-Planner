import { all } from "axios";

export default function WeeklyForecast({ weekly }) {
  if (weekly.length < 1) {
    return "Loading...";
  }

  const all_temps = weekly.data.list;
  const data = [];
  console.log(all_temps, "data");
  const day_one_temps = [];
  const day_two_temps = [];
  const day_three_temps = [];
  const day_four_temps = [];
  const day_five_temps = [];
  const day_six_temps = [];

  const weeklyData = [];
  const weeklyIcons = [];

  for (let x = 0, week = []; x < all_temps.length; x++) {
    //TODO this gets the days of the week for the weekly forecast.
    if (
      !weeklyData.includes(
        new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3)
      )
    ) {
      weeklyData.push(
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
        icon: all_temps[x].weather[0].description,
        weather: [
          Math.round((all_temps[x].main.temp - 273) * (9 / 5) + 32).toString() +
            "\u00B0F",
        ],
      });
    } else if (
      new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3) ===
      new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3)
    ) {
      let index = week.length - 1;

      data[index].weather.push(
        Math.round((all_temps[x].main.temp - 273) * (9 / 5) + 32).toString() +
          "\u00B0F"
      );
    }
    // console.log(all_temps[x].weather[0].description);
  }
  console.log(data);

  return (
    <div>
      {/* display the highest and lowest for each day of the week */}
      {/* grab the day of the week (5th number in date), sort the temp values, grab the highest and lowest */}
      <div>
        <h3> Day of the Week</h3>

        <div></div>
      </div>
    </div>
  );
}

// data =[]

// data.push ({day: xfdgfdh, })
//TODO push all of the weather to a variable array inside of the for loop, then once all temps are gathered for each day, go ahead and push day:{mon},temps:{344.33},icon:{'sunny'}
