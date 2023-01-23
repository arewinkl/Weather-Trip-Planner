export default function WeeklyForecast({weekly}){
    if(weekly.length < 1){
        return "Loading..."
    }
    console.log(weekly.data)
    return(
        <div>
        {/* <div>
            {name}
        </div>
        <div>
            {temp} ˚F
        </div>
        <div>
            {weatherDescription}
        </div>
        <div>
            {wind} 
        </div>
        <div>
            <img src ={`https://openweathermap.org/img/w/${icon}.png`} />
        </div> */}
    </div>
    )
}