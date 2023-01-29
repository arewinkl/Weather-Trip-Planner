export default function WeeklyForecast({ weekly }) {
  if (weekly.length < 1) {
    return "Loading...";
  }

  const all_temps = weekly.data.list;

  const monday_temps = [];

  console.log(all_temps);
  const weeklyData = [];
  const dayOneWeather = [];
  for (let x = 0, dateTemp = []; x < all_temps.length; x++) {
    if (
      !weeklyData.includes(
        new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3)
      )
    ) {
      weeklyData.push(
        new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3)
      );

      //TODO All thus dateTemp code can probably be deleted, it just shows day of week and temperature in an array.
      dateTemp.push(
        new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3),
        all_temps[x].main.temp
      );
    } else {
      dateTemp.push(
        new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3),
        all_temps[x].main.temp
      );
    }
    // if (
    //   new Date(all_temps[x + 1].dt * 1000).toDateString().substring(0, 3) ===
    //   new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3)
    // ) {
    //   monday_temps.push(all_temps[x].main.temp);
    // }
    if (
      new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3) === "Mon"
    ) {
      monday_temps.push(all_temps[x].main.temp);
    }

    // cow.push(
    //   new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3),
    //   all_temps[x].main.temp
    // );
    // if (
    //   new Date(all_temps[x].dt).toDateString().substring(0, 3) ===
    //   new Date(all_temps[x + 1].dt * 1000).toDateString().substring(0, 3)
    // ) {
    //   dayOneWeather.push(
    //     all_temps[x].main.temp,
    //     new Date(all_temps[x].dt).toDateString().substring(0, 3)
    //   );
    // }

    //   let cat = cow.sort();
    //   dayOneWeather.push(cat);
    //   console.log("this is a cat", cat);
    //   if (!dayOneWeather.includes(cat[0])) dayOneWeather.push(cat[0]);
  }
  //   console.log(dayOneWeather);

  console.log(weeklyData);
  console.log(monday_temps.sort(), "Monday");
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
