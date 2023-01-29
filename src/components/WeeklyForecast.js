import { all } from "axios";

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

  const weeklyData = [];
  console.log(all_temps);
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

    //TODO Below is the if statements that match the day from the week variable that is set in the for loop and pushes the weather out for each day. All data needs to be sorted and then printed to the page.
    if (
      new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3) ===
      week[0]
    ) {
      day_one_temps.push(all_temps[x].main.temp);
    } else if (
      new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3) ===
      week[1]
    ) {
      day_two_temps.push(all_temps[x].main.temp);
    } else if (
      new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3) ===
      week[2]
    ) {
      day_three_temps.push(all_temps[x].main.temp);
    } else if (
      new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3) ===
      week[3]
    ) {
      day_four_temps.push(all_temps[x].main.temp);
    } else if (
      new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3) ===
      week[4]
    ) {
      day_five_temps.push(all_temps[x].main.temp);
    } else if (
      new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3) ===
      week[5]
    ) {
      day_six_temps.push(all_temps[x].main.temp);
    }
  }

  console.log(weeklyData);
  console.log(
    "Day 1 temps:",
    Math.floor((day_one_temps.sort()[0] - 273.15) * (9 / 5) + 32).toString() +
      "\u00B0F",
    Math.ceil(
      (day_one_temps.sort()[day_one_temps.length - 1] - 273.15) * (9 / 5) + 32
    ).toString() + "\u00B0F",
    "Day 2 temps:",
    Math.floor((day_two_temps.sort()[0] - 273.15) * (9 / 5) + 32).toString() +
      "\u00B0F",
    Math.ceil(
      (day_two_temps.sort()[day_two_temps.length - 1] - 273.15) * (9 / 5) + 32
    ).toString() + "\u00B0F",
    "Day 3 temps:",
    Math.floor((day_three_temps.sort()[0] - 273.15) * (9 / 5) + 32).toString() +
      "\u00B0F",
    Math.ceil(
      (day_three_temps.sort()[day_three_temps.length - 1] - 273.15) * (9 / 5) +
        32
    ).toString() + "\u00B0F",
    "Day 4 temps:",
    Math.floor((day_four_temps.sort()[0] - 273.15) * (9 / 5) + 32).toString() +
      "\u00B0F",
    Math.ceil(
      (day_four_temps.sort()[day_four_temps.length - 1] - 273.15) * (9 / 5) + 32
    ).toString() + "\u00B0F",
    "Day 5 temps:",
    Math.floor((day_five_temps.sort()[0] - 273.15) * (9 / 5) + 32).toString() +
      "\u00B0F",
    Math.ceil(
      (day_five_temps.sort()[day_five_temps.length - 1] - 273.15) * (9 / 5) + 32
    ).toString() + "\u00B0F",
    "Day 6 temps:",
    Math.floor((day_six_temps.sort()[0] - 273.15) * (9 / 5) + 32).toString() +
      "\u00B0F",
    Math.ceil(
      (day_six_temps.sort()[day_six_temps.length - 1] - 273.15) * (9 / 5) + 32
    ).toString() + "\u00B0F"
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
