import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Weather = () => {
   const [data, setData] = useState({})
  const [search, setSearch] = useState('')
  const [icon, setIcon] = useState('')
  const [errormsg, setErrormsg] = useState('')
  const [isShown, setIsShown] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=90bf7be9e254846890831e3f355c777a`

  const OnSubmit = (event) => {
    if(event.key === 'Enter')
    {
      axios.get(url)
      .then((response) => {
        setData(response.data)
        setIcon(response.data.weather[0].icon)
        console.log(response.data)
        console.log(response.data.weather[0].icon)
        setIsShown(true);
      })
      .catch(error => {
        console.log(error.response.data.cod)
        setErrormsg(error.response.data.cod)
      });
      setSearch('')
    }}
  return (
    <div className='wholesome'>

    <div className='wrapper'>
        <div className="search-wrap">
        <input type="text"
        value={search} 
        onKeyPress={OnSubmit}
        onChange={(e) => {
            setSearch(e.target.value);
        }}
        placeholder="Enter Location"/>
        </div>
            <div className="weather-wrap">
            <div className="upper">
                
            <div className="city-name">
            <p>{data.name}</p>
            </div>
            <div className="display-both">
            <div className="temp">
            {data.main ? <p>{((data.main.temp - 32)*(5/9)).toFixed(2)}°C</p> : null}
            </div>
            <div className="weather-icon">
            { ((icon === "50d") || (icon === "50n")) ?
            (<div>
            <img src='https://openweathermap.org/img/wn/50d@2x.png' height={300} width={300} />
            </div>) : ((icon === "13d") || (icon === "13n")) ?
            (<div>
            <img src='https://openweathermap.org/img/wn/13d@2x.png' height={300} width={300} />
            </div>) : ((icon === "11d") || (icon === "11n")) ?
            (<div>
            <img src='https://openweathermap.org/img/wn/11d@2x.png' height={300} width={300} />
            </div>) : ((icon === "10d") || (icon === "10n")) ?
            (<div>
            <img src='https://openweathermap.org/img/wn/10d@2x.png' height={300} width={300} />
            </div>) : ((icon === "09d") || (icon === "09n")) ?
            (<div>
            <img src='https://openweathermap.org/img/wn/50d@2x.png' height={300} width={300} />
            </div>) : ((icon === "04d") || (icon === "04n")) ?
            (<div>
            <img src='https://openweathermap.org/img/wn/04d@2x.png' height={300} width={300} />
            </div>) : ((icon === "03d") || (icon === "03n")) ?
            (<div>
            <img src='https://openweathermap.org/img/wn/03d@2x.png' height={300} width={300} />
            </div>) : ((icon === "02d") || (icon === "02n")) ?
            (<div>
            <img src='https://openweathermap.org/img/wn/02d@2x.png' height={300} width={300} />
            </div>) : ((icon === "01d") || (icon === "01n")) ?
            (<div>
            <img src='https://openweathermap.org/img/wn/01d@2x.png' height={300} width={300} />
            </div>) : null}
            </div>
            </div>
            <div className="sky">
            <p> {data.weather ? <p>{data.weather[0].description}</p> : null}</p>
            </div>
         
            </div>
            
            { isShown && (<div className="lower">
                <div className="feels-like">
                <p>{data.main ? <h1>{((data.main.feels_like - 32)*(5/9)).toFixed(2)}°C</h1> : null}</p>
                <p id='feels-txt'>Feels like</p>
                </div>
                <div className="humidity">
                <p>{data.main ? <h1>{data.main.humidity} %</h1> : null}</p>
                <p id='humidity-txt'>Humidity</p>
                </div>
                <div className="wind">
                <p>{data.wind ? <h1>{data.wind.speed} MPH</h1> : null}</p>
                <p id='wind-txt'>Wind</p>

                </div>
                
            </div>)}
        </div> 
        
    </div>
    </div>
  )
}

export default Weather