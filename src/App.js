import './App.css';

export default function App() {
 return (
    <div className="App">
      <div className="container">
        <form className="search-bar">
          <input type="text" placeholder="Search" />
          <input type="submit" value="search" />
        </form>

        <button>
          {" "}
          <i className="far fa-compass" id="compass"></i>
        </button>

        <h2 className="city">London</h2>
        <div className="card-group">
          <div className="card border-primary mb-3">
            <div className="card-body weather-today">
              <h5 className="card-title todays-date">Today's date</h5>
              <img className="todays-icon"></img>
              <p className="card-text">
                <img src="" classNameass="weather-icon"></img>
                <span className="temp-degrees"></span>
                <a href="#" className="celsius-link active">
                  {" "}
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
                  Humidity: <span className="humidity">%</span>
                  <br />
                  Wind: <span className="wind">km/h</span>
                </p>
              </div>
            </div>
          </div>
        </div>
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
