import React, { useState, useEffect } from 'react';
import Carousel from "../ReUse/Carousel.jsx";

function Weather() {
    const [data, setData] = useState(null);
    const icon = require(`../img/icons/${data.data[0].weather.icon}.png`);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                'https://api.weatherbit.io/v2.0/current?city=El-Nido&key=0f2c78fe24d04bc8969b4c9cbb0b72c5&include=minutely'
            );
            const json = await response.json();
            setData(json);
            icon = require(`../img/icons/${data.data[0].weather.icon}.png`);
        }
        fetchData();
    }, []);

    return (
        <>
            <div className="wBody">
                <div className="container" id="weather1">
                    <div className="row">
                        <div className="weatherbod">
                            <div className="col-md-3">
                                <span className="fw-bold h1 text-center pt-5 ps-5">{data ? data.data[0].app_temp : 'Loading...'} °C </span>
                                <img src={icon} alt="..." />
                                <br />
                                <span className="ps-5">{data ? data.data[0].weather.description : 'Loading...'} at {data ? data.data[0].city_name : '...'}, Palawan</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Weather;