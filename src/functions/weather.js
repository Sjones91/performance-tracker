import "../App.scss";
import React, {useState} from 'react';


function GetWeather(){
    const url = "https://goweather.herokuapp.com/weather/London";
    let weather = "";
    fetch(url)
        .then((res)=> res.json())
        .then((data)=> {
            weather = data;
            
        })
        .catch((error)=> {
            console.log(error)
        })
        
        return (
            <p>weather</p>
        )

}

export default GetWeather;