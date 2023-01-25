export default function WeeklyForecast({weekly}){
    if(weekly.length < 1){
        return "Loading..."
    }

    const all_temps = weekly.data.list

    console.log(all_temps)



    const d = new Date();
// console.log(d, "sdfds");
// TODO We can use the Date() function to get the current date and time to display on our current weather page ex: Mon Jan 23 2023 17:40:11 GMT-0700 (Mountain Standard Time)
console.log(new Date(all_temps[0].dt * 1000))
// console.log(new Date(1674907200 * 1000), "this one");
let day = d.getDay();
console.log(day);
//TODO This will give you a number that can be used to correspond do a day of the week 0-6.

const current = new Date(1674907200 * 1000)

// console.log(new Date('2023-01-24'))

const newVar = (new Date('2023-01-2'))

const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  }

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

//   const newVar = (new Date('2023-01-2'))

//   console.log(newVar.toDateString().substring(0, 3))

const daysOfWeek = []

for (let x = 0; x<all_temps.length; x++){
daysOfWeek.push(new Date (all_temps[x].dt * 1000).toDateString().substring(0, 3))

}

console.log(daysOfWeek)

const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

console.log(date)


    return(
        <div>

            {/* display the highest and lowest for each day of the week */}
            {/* grab the day of the week (5th number in date), sort the temp values, grab the highest and lowest */}
        <div>
            <h3> Day of the Week</h3>

            <div>
             </div>
        </div>
      
    </div>
    )
}