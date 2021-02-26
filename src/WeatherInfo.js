import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TempConversion from "./TempConversion";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (
    <div className = "weather-info">
    <h2 className="city">{props.data.city}</h2>
    <h6 className="todays-date"> <span>Last updated on <FormattedDate date={props.data.date}/></span> </h6>
        <div className="weather-today row">
         <ul className="spacer col-1">
         </ul>
         <ul className="weather col-3">
              <li className ="weather-description">{props.data.description} </li>
              <li> <WeatherIcon code={props.data.icon}/> </li>
            </ul>
            <ul className="temp-conversion col-3">
              <li> <TempConversion celsius={props.data.temperature}/></li>
            </ul>
            <ul className="weather-extras col-3">
              <li className="max-min-temp"> Max temp: {Math.round(props.data.max)}°C </li>
              <li className="max-min-temp"> Min temp: {Math.round(props.data.min)}°C </li>
              <li> Humidity: <span className="humidity">{props.data.humidity}%</span></li>
              <li> Wind: <span className="wind">{Math.round(props.data.wind)}km/h</span></li>
          </ul>
          </div>
    </div>
    );

}
