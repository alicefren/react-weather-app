import React from "react";
import Weather from "./Weather";

import './App.css';

export default function App() {
 return (
    <div className="App">
      <div className="container">
      
      <Weather defaultCity = "London"/>
      
      </div>
      <footer>
      <a href="https://github.com/alicefren/react-weather-app">Open source code</a>
      </footer>
    </div>
  );
}
