import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
    <div className = "WeatherInfo">
    <h2 className="city">{props.data.city}</h2>
        <div className="card-group">
          <div className="card border-primary mb-3">
            <div className="card-body weather-today">
              <h5 className="card-title todays-date"><FormattedDate date={props.data.date}/></h5>
              <img className="todays-icon"></img>
              <p className="card-text">
                <img src="" className="weather-icon"></img>
                <span className="temp-degrees"></span>
                <a href="#" className="celsius-link active">
                  {Math.round(props.data.temperature)}
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
                  Humidity: <span className="humidity">{props.data.humidity}%</span>
                  <br />
                  Wind: <span className="wind">{Math.round(props.data.wind)}km/h</span>
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
    );

}
