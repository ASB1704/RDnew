import React, { useEffect, useState } from 'react'
import "../Css/CurrCityInfo.css"
import axios from 'axios'


export const CurrCityInfo = () => {
    const [CurrWeatherdata, SetCurrWeatherdata] = useState({});
    const [loading, Setloading] = useState(true);
    useEffect(() => {
        const success = async (pos) => {
            const crd = pos.coords;
            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            Setloading(true);
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=79e604a1c770f51cd36ac32c59fa1857`);
            console.log(data);
            Setloading(false);
            SetCurrWeatherdata(CurrWeatherdata => ({
                ...CurrWeatherdata,
                ...data
            }))
            console.log(CurrWeatherdata);
        }
        const error = err => console.warn(`ERROR(${err.code}): ${err.message}`);
        navigator.geolocation.getCurrentPosition(success, error);
    }, [])
    var currentdate = new Date();
    var datetime = "Updated at: " + currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes();

    return (
        <div>
            {loading ? <p>loading...</p> : <div className='CurrCitybox'>
                <div id='Name'>{CurrWeatherdata.name}</div>
                <div id='Temp'>
                    <i className="fa-solid fa-cloud"></i>
                    <p>{Math.round(CurrWeatherdata.main.temp-273)}°C</p>
                </div>
                <div><p>{CurrWeatherdata.weather[0].description}</p></div>
                <div><p>{datetime}</p></div>
                <div className='TempWinddetail'>
                    <p>Min temp :{CurrWeatherdata.main.temp_min}</p>
                    <p>Max temp :{CurrWeatherdata.main.temp_max}</p>
                    <p>Wind speed :{CurrWeatherdata.wind.speed}</p>
                </div>
                <div className='OtherWetherdetails'>
                    <p>Pressure :{CurrWeatherdata.main.pressure}</p>
                    <p>Sea level :{CurrWeatherdata.main.sea_level}</p>
                    <p>Humidity :{CurrWeatherdata.main.humidity}</p>
                </div>
            </div>
            }
        </div>
    )
}
