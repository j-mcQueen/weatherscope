import meteocons from "./exports/meteocons";

export default function Overview({...props}) {
    return (
        <div className="overview weather-container">
            <div className="location">
                <h1>{props.weather.location.toLowerCase()}</h1>
            </div>

            <div className="current-temp">
                {
                    props.temp === "C"
                    ?
                    Math.floor(props.weather.current.temp_c)
                    :
                    Math.floor(props.weather.current.temp_f)
                }

                <span>
                    {/* will change depending on weather condition value inside weather api data */}
                    <img className="day-icon" src={meteocons.sun} alt=""/>
                </span>
            </div>

            <div className="rain-chance">
                <span>
                    <img className="day-icon" src={meteocons.raindrops} alt="An animated graphic of two raindrops"/>
                </span>
                chance of rain: {props.weather.forecast.rain_chance}%
            </div>

            <div className="sunset">
                <span>
                    <img className="day-icon" src={meteocons.sunset} alt="An animated graphic of the sun behind a horizon"/>
                </span>
                sunset: {props.weather.forecast.sunset}
            </div>
        </div>
    )
}