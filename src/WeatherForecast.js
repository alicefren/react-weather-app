import React, { useState } from "react";
import axios from "axios";
import WeatherForecastCalc from "./WeatherForecastCalc";

import "./WeatherForecast.css";

export default function WeatherForecast(props){
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecast(response){
    setForecast(response.data);
    setLoaded(true);
    }

    if (loaded && props.city === forecast.city.name) {
        return (
        <div className="WeatherForecast">
        <br />
        <p className="dailyForecast">Today's forecast</p>
        
        <div className="forecast row">
        <WeatherForecastCalc data={forecast.list[0]}/>
        <WeatherForecastCalc data={forecast.list[1]}/>
        <WeatherForecastCalc data={forecast.list[2]}/>
        <WeatherForecastCalc data={forecast.list[3]}/>
        <WeatherForecastCalc data={forecast.list[4]}/>

        </div>
        </div>
    );
    } else {

    let apiKey = "5c043941096cfca1b8129a71701e2dcf";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecast);
    
    return null;    
        
}
}