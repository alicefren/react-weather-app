import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather (props) {
    const [weatherData, setWeatherData] = useState({ready: false});

    function handleResponse(response) {
        setWeatherData ({
           ready: true,
           temperature: response.data.main.temp,
           wind: response.data.wind.speed,
           humidity: response.data.main.humidity,
           city: response.data.name,
           description: response.data.weather[0].description,
           date: new Date(response.data.dt *1000),
        });
        
    }

    if (weatherData.ready) {
        return (
    <div className = "Weather">
    <h2 className="city">{weatherData.city}</h2>
        <div className="card-group">
          <div className="card border-primary mb-3">
            <div className="card-body weather-today">
              <h5 className="card-title todays-date"><FormattedDate date={weatherData.date}/></h5>
              <img className="todays-icon"></img>
              <p className="card-text">
                <img src="" classNameass="weather-icon"></img>
                <span className="temp-degrees"></span>
                <a href="#" className="celsius-link active">
                  {Math.round(weatherData.temperature)}
                  °C{" "}
                </a>
                |{" "}
                <a href="#" className="fahrenheit-link">
                  °F
                </a>
              </p>
              <p className="description"></p>
              <div className="row align-items-start">
                <div className="col">
                  <p className="max-temp">Max temp</p>
                </div>
                <div className="col">
                  <p className="min-temp">Min temp</p>
                </div>
              </div>
              <div className="other-weather-info">
                <p>
                  {" "}
                  Humidity: <span className="humidity">{weatherData.humidity}%</span>
                  <br />
                  Wind: <span className="wind">{Math.round(weatherData.wind)}km/h</span>
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
    )

    } else {

    const apiKey = "5c043941096cfca1b8129a71701e2dcf";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    
    return ("Loading...");
    }
}