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
import { useState,useEffect } from 'react'
export default function NextWeek ({city,}) {
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
    const dayMap = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat']
    const [dayone,setDayOne] = useState('');
    const [daytwo,setDayTwo] = useState('');
    const [daythree,setDayThree] = useState('');
    const [dayfour,setDayFour] = useState('');
    const [dayfive,setDayFive] = useState('');
    const [daysix,setDaySix] = useState('');
    const day = new Date().getDay();
    var dayNames = [];
    var count = day;
    for (var i = 0; i<=5; i++){
        if(count==6){
            count = 0;
            dayNames.push(dayMap[count]);
        } else{
            ++count;
            dayNames.push(dayMap[count]);
        }
    }
    const search = async (cityname)=>{
        try{
            const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityname}&cnt=7&appid=bd5e378503939ddaee76f12ad7a97608&units=metric`;
            const res = await fetch(url);
            const data = await res.json();
            setDayOne({
                max : Math.floor(data.list[1].temp.max),
                min : Math.floor(data.list[1].temp.min),
                weather_icon : data.list[1].weather[0].icon,
                day : dayNames[0],
            
            });
            setDayTwo({
                max : Math.floor(data.list[2].temp.max),
                min : Math.floor(data.list[2].temp.min),
                weather_icon : data.list[2].weather[0].icon,
                day : dayNames[1],
            
            });
            setDayThree({
                max : Math.floor(data.list[3].temp.max),
                min : Math.floor(data.list[3].temp.min),
                weather_icon : data.list[3].weather[0].icon,
                day : dayNames[2],
            
            });
            setDayFour({
                max : Math.floor(data.list[4].temp.max),
                min : Math.floor(data.list[4].temp.min),
                weather_icon : data.list[4].weather[0].icon,
                day : dayNames[3],
            
            });
            setDayFive({
                max : Math.floor(data.list[5].temp.max),
                min : Math.floor(data.list[5].temp.min),
                weather_icon : data.list[5].weather[0].icon,
                day : dayNames[4],
            
            });
            setDaySix({
                max : Math.floor(data.list[6].temp.max),
                min : Math.floor(data.list[6].temp.min),
                weather_icon : data.list[6].weather[0].icon,
                day : dayNames[5],
            
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
        if(!city){
            search('delhi');
        }
    }, []);
    return (
        <>
            <div id="coming">
                <h3>Coming Week</h3>
                <div className="coming_weather">
                    <div className="coming_component">
                        <p><strong>{dayone.day}</strong></p>
                        <div className="coming_comp">
                            <img src={iconMap[dayone.weather_icon]} alt="" className='weather_icon'/>
                            <div className="info">
                                <p className="max">{dayone.max}°</p>
                                <p className="min">{dayone.min}°</p>
                            </div>
                        </div>
                    </div>
                    <div className="coming_component">
                        <p><strong>{daytwo.day}</strong></p>
                        <div className="coming_comp">
                            <img src={iconMap[daytwo.weather_icon]} alt="" className='weather_icon'/>
                            <div className="info">
                                <p className="max">{daytwo.max}°</p>
                                <p className="min">{daytwo.min}°</p>
                            </div>
                        </div>
                    </div>
                    <div className="coming_component">
                        <p><strong>{daythree.day}</strong></p>
                        <div className="coming_comp">
                            <img src={iconMap[daythree.weather_icon]} alt="" className='weather_icon'/>
                            <div className="info">
                                <p className="max">{daythree.max}°</p>
                                <p className="min">{daythree.min}°</p>
                            </div>
                        </div>
                    </div>
                    <div className="coming_component">
                        <p><strong>{dayfour.day}</strong></p>
                        <div className="coming_comp">
                            <img src={iconMap[dayfour.weather_icon]} alt="" className='weather_icon'/>
                            <div className="info">
                                <p className="max">{dayfour.max}°</p>
                                <p className="min">{dayfour.min}°</p>
                            </div>
                        </div>
                    </div>
                    <div className="coming_component">
                        <p><strong>{dayfive.day}</strong></p>
                        <div className="coming_comp">
                            <img src={iconMap[dayfive.weather_icon]} alt="" className='weather_icon'/>
                            <div className="info">
                                <p className="max">{dayfive.max}°</p>
                                <p className="min">{dayfive.min}°</p>
                            </div>
                        </div>
                    </div>
                    <div className="coming_component">
                        <p><strong>{daysix.day}</strong></p>
                        <div className="coming_comp">
                            <img src={iconMap[daysix.weather_icon]} alt="" className='weather_icon'/>
                            <div className="info">
                                <p className="max">{daysix.max}°</p>
                                <p className="min">{daysix.min}°</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}