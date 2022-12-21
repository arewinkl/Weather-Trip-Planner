import "./App.css";
require("dotenv").config();
console.log(process.env.REACT_APP_WEATHER_API_KEY);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Weather Planner</h2>
      </header>
      <body>
        <p>Take some time to check the weather for your upcoming location!</p>
        <input type="search"></input>
        <button>Search</button>
      </body>
    </div>
  );
}

export default App;
