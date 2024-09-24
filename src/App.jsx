import { useState, useEffect } from 'react'
import Navbar from './navbar'
import Current from './current'
import NextWeek from './nextWeek'
import searchIcon from './assets/search.png'
function App() {
  const [city,setCity] = useState('');
  function sendSearch() {
    var city = document.getElementById('cityName');
    setCity(city.value);
    city.innerHTML(null);
  }
  return (
    <div id='app'>
      <div id="nav">
        <h1>Weather</h1>
        <div className="search">
          <input type="search" name="" id="cityName" placeholder="Search City" className="search_bar"/>
          <button onClick={sendSearch}>
            <img src={searchIcon} alt="" className="search_icon"/>
            </button>
        </div>
      </div>
      <Current city = {city}/>
      <NextWeek/>
    </div>
  )
}

export default App
