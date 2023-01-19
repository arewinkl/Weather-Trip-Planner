import { useEffect, useState } from 'react'

export default function SearchBar({currentSearch, weeklySearch}) {
    const [citySearch, setCitySearch] = useState('')
    const [stateSearch, setStateSearch] = useState('')
  
// if citysearch or statesearch = "", then message
// if ciitysearch or statesearch are mispelled/incorrect, then alert
// else, createSearch function 
  function handleSearch(e) {
    e.preventDefault()
    if (citySearch == '' && stateSearch == ''){
        console.log("Please input city and state")
    }else if(citySearch == ''){
        console.log("Please input city")
    } else if (stateSearch == ''){
        console.log("Please input state")
    }else{
        currentSearch(citySearch, stateSearch)
        weeklySearch(citySearch, stateSearch)
    }
    // setCitySearch('')
    // setStateSearch('')
  }

  return (
    <div className="search-bar">
      <form className="student-search" onSubmit={(e) => handleSearch(e)}>
        <h1>Search Your Location</h1>
        <input 
            type="search" 
            placeholder="City"
            value={citySearch}
            onChange={(e) => setCitySearch(e.target.value)}
        >
        </input>
        <br />
        <input 
            type="search" 
            placeholder="State/Country"
            value={stateSearch}
            onChange={(e) => setStateSearch(e.target.value)}
        >
        </input>
        <br />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}
