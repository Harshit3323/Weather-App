import clear from './assets/01d.png'
import clearN from './assets/01n.png'
import cloudy from './assets/02d.png'
import cloudyN from './assets/02n.png'
import scattered from './assets/03d.png'
import broken from './assets/04d.png'
import shower from './assets/09d.png'
import storm from './assets/11d.png'
import snow from './assets/13d.png'
import haze from './assets/50d.png'
import { useState, useEffect } from 'react'
export default function Current({city}) {
    const dayMap = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const iconMap = {
        "01d" : clear,
        "01n" : clearN,
        "02d" : cloudy,
        "02n" : cloudyN,
        "03d" : scattered,
        "03n" : scattered,
        "04d" : broken,
        "04n" : broken,
        "09d" : shower,
        "09n" : shower,
        "10d" : shower,
        "10n" : shower,
        "11d" : storm,
        "11n" : storm,
        "13d" : snow,
        "13n" : snow,
        "50d" : haze,
        "50n" : haze,
    }
    
    const [today,setToday] = useState('');
    const search = async (cityname)=>{
        try{
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=8715ff55a242861520cd1ebc7c042646&units=metric`;
          const res = await fetch(url);
          const data = await res.json();
          if(data.cod != "200"){
            alert(`API error: ${data.message}`)
          }
          setToday({
            location : data.name,
            temp : Math.floor(data.main.temp),
            max_temp : Math.floor(data.main.temp_max),
            feels_like : Math.floor(data.main.feels_like),
            description : data.weather[0].main,
            wind : Math.floor(data.wind.speed*3.6),
            humidity : data.main.humidity,
            pressure : data.main.pressure,
            weather_icon : data.weather[0].icon,
            country : data.sys.country,
            
          });
        } catch {
    
        }
    }
    useEffect(() => {
        if (city) { 
          search(city);
        }
      }, [city]); 
    useEffect(() => {
      search("delhi")
    }, [])
    console.log(today.time)
    return (
        <center>
            <div id='current_day'>
                <p className='currentDay'>
                    Current Weather 
                    <br />
                </p>
                <div className="location">
                    <h1 className='location'>{today.location}  </h1>
                    <p>{today.country}</p>
                </div>
                
                <div className="current">
                    <img src={iconMap[today.weather_icon]} alt="" className='weather_icon'/>
                    <h1>{today.temp}°</h1>
                    <div className="container">
                        <p>{today.description}</p>
                        <p>Feels like {today.feels_like}°</p>
                    </div>
                
                </div>
                <p>The Highs can reach up to {today.max_temp}°</p>
                <div id="other">
                    {/* wind humidity pressure  */}
                    <div className="wind other_compo">
                        <h4>Wind</h4>
                        <p>{today.wind} Km/h</p>
                    </div>
                    <div className="humidity other_compo">
                        <h4>Humidity</h4>
                        <p>{today.humidity}%</p>
                    </div>
                    <div className="pressure other_compo">
                        <h4>Air Pressure</h4>
                        <p>{today.pressure} mb</p>
                    </div>
                </div>
            </div>
        </center>
    )
}