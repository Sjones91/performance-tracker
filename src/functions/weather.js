import "../App.scss";
import React, { useState } from 'react';

function GetWeather(){
    const url = "https://goweather.herokuapp.com/weather/London";
    const [weather,setWeather] = useState()
    fetch(url)
     .then((res)=>{
         res.json()
     })
     .then((data)=>{
         setWeather(data)
     })
     .catch((error) => {
         console.log(error)
     }
    )
    console.log(weather);
    return(
        <p>{weather}</p>
    )
}

export default GetWeather;