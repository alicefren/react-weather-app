import React, { useState } from "react";
import axios from "axios";

export default function Test(props) {
  let [temperature, setTemperature] = useState(null);

  function displayTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=5c043941096cfca1b8129a71701e2dcf&units=metric`;

  axios.get(url).then(displayTemperature);

  return (
    <div>
      It is {Math.round(temperature)}°C in {props.city}
    </div>);

  }
