import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TempConversion from "./TempConversion";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (
    <div className = "WeatherInfo">
    <h2 className="city">{props.data.city}</h2>
         <div className="weather-today">
              <h5 className="todays-date">Last updated <FormattedDate date={props.data.date}/></h5>
               <p className ="weather-description">{props.data.description}</p>
              <WeatherIcon code={props.data.icon} />
               
              <TempConversion celsius={props.data.temperature}/>
              
                <div className="max-min-temp row">
                  <p className="max-min-temp col-2">Max temp {Math.round(props.data.max)}°C </p>
                  <p className="max-min-temp col-2">Min temp {Math.round(props.data.min)}°C</p>
                </div>
              
              <div className="other-weather-info">
                <p>
                  {" "}
                  Humidity: <span className="humidity">{props.data.humidity}%</span>
                  <br />
                  Wind: <span className="wind">{Math.round(props.data.wind)}km/h</span>
                </p>
              </div>
            </div>
    </div>
        
    
    );

}
