import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
 return (
    <div className="App">
      <div className="container">
      <Weather />
        <form className="search-bar">
          <input type="text" placeholder="Search" />
          <input type="submit" value="search" />
        </form>

        <button>
          {" "}
          <i className="far fa-compass" id="compass"></i>
        </button>
               
        <h3 className="forecast">5 day forecast</h3>

        <div className="5-day-forecast">
          <div className="row">
            <div className="col">
              Day
              <br />
              Temp °C
            </div>
            <div className="col">
              Day
              <br />
              Temp °C
            </div>
            <div className="col">
              Day
              <br />
              Temp °C
            </div>
            <div className="col">
              Day
              <br />
              Temp °C
            </div>
            <div className="col">
              Day
              <br />
              Temp °C
            </div>
          </div>
        </div>
      </div>
      <a href="https://github.com/alicefren/react-weather-app" target = "_blank">Open source code</a>
    </div>
  );
}
