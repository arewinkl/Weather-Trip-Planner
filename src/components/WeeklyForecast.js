import { all } from "axios"

export default function WeeklyForecast({ weekly }) {
  if (weekly.length < 1) {
    return 'Loading...'
  }

  const all_temps = weekly.data.list

  console.log(all_temps)

  const d = new Date()
  // console.log(d, "sdfds");
  // TODO We can use the Date() function to get the current date and time to display on our current weather page ex: Mon Jan 23 2023 17:40:11 GMT-0700 (Mountain Standard Time)
  console.log(new Date(all_temps[0].dt * 1000))
  // console.log(new Date(1674907200 * 1000), "this one");
  let day = d.getDay()
  console.log(day)
  //TODO This will give you a number that can be used to correspond do a day of the week 0-6.




  const daysOfWeek = []
  const newDaysOfWeek = []

  const day1 = []

  for (let x = 0; x < all_temps.length - 1; x++) {
    // console.log(new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3))
    if (
      !daysOfWeek.includes(
        new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3),
      )
    )
      daysOfWeek.push(
        new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3),
      )

      if (new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3) == daysOfWeek[0]){
            console.log(all_temps[x].main.temp)
      }


    // if (new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3) == ){
    // } 
    //     console.log(new Date(all_temps[x].dt * 1000).toDateString().substring(0, 3))

      
  }

  console.log(daysOfWeek)


  return (
    <div>
      {/* display the highest and lowest for each day of the week */}
      {/* grab the day of the week (5th number in date), sort the temp values, grab the highest and lowest */}
      <div>
        <h3> Day of the Week</h3>

        <div></div>
      </div>
    </div>
  )
}
