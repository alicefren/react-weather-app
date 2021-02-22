import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather (props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

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
    
    function search() {
        const apiKey = "5c043941096cfca1b8129a71701e2dcf";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        search(city);
    }

    function handleChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
        <div className = "SearchCity">
            <form className="search-bar" onSubmit = {handleSubmit}>
          <input type="text" placeholder="Search" onChange = {handleChange}/>
          <input type="submit" value="search" />
        </form>

        <button>
          {" "}
          <i className="far fa-compass" id="compass"></i>
        </button>
        
        <WeatherInfo data={weatherData}/>
        </div>
        )
    } else {
        search();   
        return ("Loading...");
    }

}