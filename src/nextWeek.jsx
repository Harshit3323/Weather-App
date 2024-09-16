import clearIcon from './assets/clear.png'
import cloudIcon from './assets/cloud.png'
import drizzleIcon from './assets/drizzle.png'
import humidityIcon from './assets/humidity.png'
import rainIcon from './assets/rain.png'
import snowIcon from './assets/snow.png'
import windIcon from './assets/wind.png'

export default function NextWeek () {
    return (
        <>
            <div id="coming">
                <h3>Coming Week</h3>
                <div className="coming_weather">
                    <div className="coming_comp">
                        <img src={clearIcon} alt="" className='weather_icon'/>
                        <div className="info">
                            <p className="max">33°</p>
                            <p className="min">27°</p>
                        </div>
                    </div>
                    <div className="coming_comp">
                        <img src={clearIcon} alt="" className='weather_icon'/>
                        <div className="info">
                            <p className="max">33°</p>
                            <p className="min">27°</p>
                        </div>
                    </div>
                    <div className="coming_comp">
                        <img src={clearIcon} alt="" className='weather_icon'/>
                        <div className="info">
                            <p className="max">33°</p>
                            <p className="min">27°</p>
                        </div>
                    </div>
                    <div className="coming_comp">
                        <img src={clearIcon} alt="" className='weather_icon'/>
                        <div className="info">
                            <p className="max">33°</p>
                            <p className="min">27°</p>
                        </div>
                    </div>
                    <div className="coming_comp">
                        <img src={clearIcon} alt="" className='weather_icon'/>
                        <div className="info">
                            <p className="max">33°</p>
                            <p className="min">27°</p>
                        </div>
                    </div>
                    <div className="coming_comp">
                        <img src={clearIcon} alt="" className='weather_icon'/>
                        <div className="info">
                            <p className="max">33°</p>
                            <p className="min">27°</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}