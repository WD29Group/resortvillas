import React, { useState, useEffect, useRef } from 'react';
import Carousel from "../ReUse/Carousel.jsx";

function Weather() {
    const [data, setData] = useState(null);
    const icon = useRef(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                'https://api.weatherbit.io/v2.0/current?city=El-Nido&key=0f2c78fe24d04bc8969b4c9cbb0b72c5&include=minutely',

            );
            const json = await response.json();
            setData(json);
            icon.current = require(`../img/icons/${data.data[0].weather.icon}.png`);
        }
        fetchData()
    }, []);

    const temp = data ? data.data[0].app_temp : '35';
    const description = data ? data.data[0].weather.description : 'Cloudy';
    const city = data ? data.data[0].city_name : 'El nido';
    const country = data ? data.data[0].country_code : 'PH';

    return (
        <>
            <div className="wBody">
                <div className="container" id="weather1">
                    <div className="row">
                        <div className="weatherbod col-md-4">
                            <div className="col-md-12">
                                <span className="fw-bold h1 pt-5 ps-5 pe-5">{temp} °C </span> <img className="ms-5 ps-5"src={icon.current} alt="..." />
                                <br />
                                <span className="ps-5">{description} at {city}, {country}</span>
                            </div>
                        </div>
                        <div className="weatherbod col-md-8">
                            <div className="col-md-3">
                                <span className="fw-bold h1 text-center pt-5 ps-5">{temp} °C </span>
                                <br />
                                <span className="ps-5">{description} at {city}, {country}</span>
                            </div>
                            <div className="col-md-3">
                                <img src={icon.current} alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Weather;