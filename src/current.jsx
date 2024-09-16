import clearIcon from './assets/clear.png'
import cloudIcon from './assets/cloud.png'
import drizzleIcon from './assets/drizzle.png'
import humidityIcon from './assets/humidity.png'
import rainIcon from './assets/rain.png'
import snowIcon from './assets/snow.png'
import windIcon from './assets/wind.png'

export default function Current() {
    return (
        <center>
            <div id='current_day'>
                <h1>Delhi</h1>
                <div className="current">
                    <img src={cloudIcon} alt="" className='weather_icon'/>
                    <h1>33°</h1>
                    <div className="container">
                        <p>Haze</p>
                        <p>Feels like 37°</p>
                    </div>
                
                </div>
                <p>The Highs can reach up to 33°</p>
                <div className="other">
                    
                </div>
            </div>
        </center>
    )
}