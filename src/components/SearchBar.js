import { useEffect, useState } from "react";

export default function SearchBar({ currentSearch, weeklySearch }) {
  const [citySearch, setCitySearch] = useState("");
  const [stateSearch, setStateSearch] = useState("");

  // if citysearch or statesearch = "", then message
  // if ciitysearch or statesearch are mispelled/incorrect, then alert
  // else, createSearch function

  function handleSearch(e) {
    e.preventDefault();
    if (citySearch == "" && stateSearch == "") {
      console.log("Please input city and state");
    } else if (citySearch == "") {
      console.log("Please input city");
    } else if (stateSearch == "") {
      console.log("Please input state");
    } else {
      currentSearch(citySearch, stateSearch);
      weeklySearch(citySearch, stateSearch);
    }
    // setCitySearch('')
    // setStateSearch('')
  }

  return (
    <div className="search-bar">
      <form className="form-search" onSubmit={(e) => handleSearch(e)}>
        <h1>Search Your Location</h1>
        <div>
          <input
            className="input_search"
            type="search"
            placeholder="City"
            value={citySearch}
            onChange={(e) => setCitySearch(e.target.value)}
          ></input>
          <br />
          <input
            className="input_search"
            type="search"
            placeholder="State/Country"
            value={stateSearch}
            onChange={(e) => setStateSearch(e.target.value)}
          ></input>
          <br />
          <button className="search_button" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
