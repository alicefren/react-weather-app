import React from "react";

export default function TempConversion(props){
    return(
        <div className="temperature">
        <span className="temp-degrees"></span>
            <a href="#" className="celsius-link active">
             {Math.round(props.data.temperature)} °C{" "}
            </a>
            |{" "}
            <a href="#" className="fahrenheit-link"> °F
            </a>
        </div>
    );
}