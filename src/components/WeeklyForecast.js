export default function WeeklyForecast({weekly}){
    if(weekly.length < 1){
        return "Loading..."
    }

    const all_temps = weekly.data.list

    let high_temp = 0
    let low_temp = 0

    console.log(all_temps)

    for(let x = 0; x < all_temps.length; x++){
        console.log(all_temps[x].dt.toString().charAt(4))
        // if (all_temps[x].dt[])
    }

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