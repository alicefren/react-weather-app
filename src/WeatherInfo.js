import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TempConversion from "./TempConversion";

export default function WeatherInfo(props) {
    return (
    <div className = "WeatherInfo">
    <h2 className="city">{props.data.city}</h2>
        <div className="card-group">
          <div className="card border-primary mb-3">
            <div className="card-body weather-today">
              <h5 className="card-title todays-date"><FormattedDate date={props.data.date}/></h5>
              <WeatherIcon code={props.data.icon} />
                <p className="card-text" >{props.data.description}</p>
              <TempConversion celsius={props.data.temperature}/>
       
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
