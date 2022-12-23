import { Link, Router } from "react-router-dom";

function navBar() {
  return (
    <div className="App">
      <h1>weather stuff</h1>
      <div>
        <Router>
        <Link to="/">Home</Link>
        <Link to="/currentWeather">Current Weather</Link>
        <Link to="/weeklyWeather">Weekly Weather</Link>
        <Link to="/weatherMaps">Weather Maps</Link>
        </Router>
      </div>
    </div>
  );
}

export default navBar;
