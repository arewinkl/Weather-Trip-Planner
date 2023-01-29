export default function WeeklyForecast({ weekly }) {
  if (weekly.length < 1) {
    return "Loading...";
  }

  const all_temps = weekly.data.list;

  const day_one_temps = [];
  const day_two_temps = [];
  const day_three_temps = [];
  const day_four_temps = [];
  const day_five_temps = [];
  const day_six_temps = [];
  const day_seven_temps = [];
  //   console.log(all_temps);
  const weeklyData = [];

  for (let x = 0, week = []; x < all_temps.length; x++) {
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

    //TODO Below is the if statements that match the day from the week variable that is set in the for loop and pushes the weather out for each day. All data needs to be sorted and then printed to the page.
    if (
      new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3) ===
      week[0]
    ) {
      day_one_temps.push(all_temps[x].main.temp);
    }
    if (
      new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3) ===
      week[1]
    ) {
      day_two_temps.push(all_temps[x].main.temp);
    }
    if (
      new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3) ===
      week[2]
    ) {
      day_three_temps.push(all_temps[x].main.temp);
    }
    if (
      new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3) ===
      week[3]
    ) {
      day_four_temps.push(all_temps[x].main.temp);
    }
    if (
      new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3) ===
      week[4]
    ) {
      day_five_temps.push(all_temps[x].main.temp);
    }
    if (
      new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3) ===
      week[5]
    ) {
      day_six_temps.push(all_temps[x].main.temp);
    }
    if (
      new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3) ===
      week[6]
    ) {
      day_seven_temps.push(all_temps[x].main.temp);
    }
  }

  console.log(weeklyData);
  console.log(
    day_one_temps.sort(),
    "day 1",
    day_two_temps.sort(),
    "day 2",
    day_three_temps.sort(),
    "day 3",
    day_four_temps.sort(),
    "day 4",
    day_six_temps.sort(),
    "day 6",
    day_seven_temps.sort(),
    "day 7"
  );

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
