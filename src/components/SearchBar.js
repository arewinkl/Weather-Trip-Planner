import { useEffect, useState } from 'react'

export default function SearchBar({onStateSearch, onCitySearch}) {
    const [citySearch, setCitySearch] = useState('')
    const [stateSearch, setStateSearch] = useState('')
  

  function handleSearch(e) {
    e.preventDefault()
    onCitySearch(citySearch)
    onStateSearch(stateSearch)
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
