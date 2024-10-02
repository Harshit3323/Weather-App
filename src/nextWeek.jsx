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
export default function NextWeek ({city, country}) {
    const iconMap = {
        "800" : clear,
        "801" : cloudy,
        "802" : scattered,
        "803" : broken,
        "804" : broken,
        "700" : haze,
        "711" : haze,
        "721" : haze,
        "731" : haze,
        "741" : haze,
        "751" : haze,
        "600" : snow,
        "601" : snow,
        "602" : snow,
        "610" : snow,
        "611" : snow,
        "612" : snow,
        "621" : snow,
        "622" : snow,
        "623" : snow,
        "300" : shower,
        "301" : shower,
        "302" : shower,
        "500" : shower,
        "501" : shower,
        "502" : shower,
        "511" : shower,
        "520" : shower,
        "521" : shower,
        "522" : shower,
        "900" : shower,
        "200" : storm,
        "201" : storm,
        "202" : storm,
        "230" : storm,
        "231" : storm,
        "232" : storm,
        "233" : storm,
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
    const search = async (cityname, countryname)=>{
        try{
            const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityname},${countryname}&key=0291198a5217478796c2f3f56c8782f7&days=7`;
            const res = await fetch(url);
            const data = await res.json();
            setDayOne({
                max : Math.floor(data.data[1].max_temp),
                min : Math.floor(data.data[1].min_temp),
                weather_icon : data.data[1].weather.code,
                day : dayNames[0],
            
            });
            setDayTwo({
                max : Math.floor(data.data[2].max_temp),
                min : Math.floor(data.data[2].min_temp),
                weather_icon : data.data[2].weather.code,
                day : dayNames[1],
            
            });
            setDayThree({
                max : Math.floor(data.data[3].max_temp),
                min : Math.floor(data.data[3].min_temp),
                weather_icon : data.data[3].weather.code,
                day : dayNames[2],
            
            });
            setDayFour({
                max : Math.floor(data.data[4].max_temp),
                min : Math.floor(data.data[4].min_temp),
                weather_icon : data.data[4].weather.code,
                day : dayNames[3],
            
            });
            setDayFive({
                max : Math.floor(data.data[5].max_temp),
                min : Math.floor(data.data[5].min_temp),
                weather_icon : data.data[5].weather.code,
                day : dayNames[4],
            
            });
            setDaySix({
                max : Math.floor(data.data[6].max_temp),
                min : Math.floor(data.data[6].min_temp),
                weather_icon : data.data[6].weather.code,
                day : dayNames[5],
            
            });
          
        } catch {
            
        }
    }
    useEffect(() => {
        if (city && country) { 
          search(city, country);
        }
      }, [city, country]); 
    useEffect(() => {
        if(!city && !country){
            search('delhi', 'in');
        }
    }, []);
    console.log(dayone);
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