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
export default function NextWeek () {
    return (
        <>
            <div id="coming">
                <h3>Coming Week</h3>
                <div className="coming_weather">
                    <div className="coming_comp">
                        <img src={clear} alt="" className='weather_icon'/>
                        <div className="info">
                            <p className="max">33°</p>
                            <p className="min">27°</p>
                        </div>
                    </div>
                    <div className="coming_comp">
                        <img src={clear} alt="" className='weather_icon'/>
                        <div className="info">
                            <p className="max">33°</p>
                            <p className="min">27°</p>
                        </div>
                    </div>
                    <div className="coming_comp">
                        <img src={clear} alt="" className='weather_icon'/>
                        <div className="info">
                            <p className="max">33°</p>
                            <p className="min">27°</p>
                        </div>
                    </div>
                    <div className="coming_comp">
                        <img src={clear} alt="" className='weather_icon'/>
                        <div className="info">
                            <p className="max">33°</p>
                            <p className="min">27°</p>
                        </div>
                    </div>
                    <div className="coming_comp">
                        <img src={clear} alt="" className='weather_icon'/>
                        <div className="info">
                            <p className="max">33°</p>
                            <p className="min">27°</p>
                        </div>
                    </div>
                    <div className="coming_comp">
                        <img src={clear} alt="" className='weather_icon'/>
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