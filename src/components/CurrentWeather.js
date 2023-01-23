export default function CurrentWeather({current, showWeather}){

    if(current.length < 1){
        return "Loading..."
    }

    
    // const name = showWeather.data.name
    // const icon = showWeather.data.weather[0].icon
    // const temp = Math.floor((showWeather.data.main.temp - 273.15) * 9/5 + 32)
    // const weatherDescription = showWeather.data.weather[0].description
    // const wind = showWeather.data.wind.speed < 10 ? "Slight Wind" : showWeather.data.wind.speed > 10 && showWeather.data.wind.speed < 30 ? "Moderate Wind" : "High Wind"


console.log(current)
    const name = current.data.name
    const icon = current.data.weather[0].icon
    const temp = Math.floor((current.data.main.temp - 273.15) * 9/5 + 32)
    const weatherDescription = current.data.weather[0].description
    const wind = current.data.wind.speed < 10 ? "Slight Wind" : current.data.wind.speed > 10 && current.data.wind.speed < 30 ? "Moderate Wind" : "High Wind"

    return(
        <div>
            <div>
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
            </div>
        </div>
    )
}