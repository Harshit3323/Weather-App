import { useState, useEffect } from 'react'
import Navbar from './navbar'
import Current from './current'
import NextWeek from './nextWeek'
import searchIcon from './assets/search.png'
function App() {
  const [location,setLocation] = useState('');
  const handleSearch = () => {
    var cityname = document.getElementById('cityName');
    if(cityname.value == ""){
      alert("Error: Please enter a city name.")
    } else{
      setLocation(cityname.value);
    }
    
  };
 
  document.addEventListener('keydown', (event)=>{
    if(event.key =='Enter'){
      
      handleSearch();
    }
  })
  return (
    <div id='app'>
      <div id="nav">
        <h1>Weather</h1>
        <div className="search">
          <input type="search" name="" id="cityName" placeholder="Search City" className="search_bar"/>
          <button   onClick={handleSearch}>
            <img src={searchIcon} alt="" className="search_icon"/>
          </button>
        </div>
      </div>
      <Current city = {location}/>
      <NextWeek city = {location}/>
    </div>
  )
}

export default App
