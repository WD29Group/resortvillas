import React, { useState, useEffect } from 'react';

function Weather() {
  const [data, setData] = useState(null);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://api.weatherbit.io/v2.0/current?city=El-Nido&key=0f2c78fe24d04bc8969b4c9cbb0b72c5&include=minutely',
      );
      const json = await response.json();
      setData(json);
      setIcon(require(`../img/icons/${json.data[0].weather.icon}.png`));
    }
    fetchData();
  }, []); // The empty array ensures that the effect only runs on mount

  if (!data) {
    return <div>Loading...</div>;
  }

  const temp = data.data[0].app_temp;
  const description = data.data[0].weather.description;
  const city = data.data[0].city_name;
  const country = data.data[0].country_code;
  const aqi = data.data[0].aqi;
  const wndspd = data.data[0].wind_spd;

  return (
    <>
      <div className="wBody">
        <div className="container" id="weather1">
          <div className="row">
            <div className="weatherbod col-md-4">
              <div className="col-md-11">
                <span className="fw-bold h1 pt-5 ps-5 pe-5">{temp} °C </span> 
                <br />
                <span className="ps-5">{description} at {city}, {country}</span>
                <div className="d-flex align-items-center justify-content-center pt-3"><img src={icon} alt="..." /></div>
                <div className="pt-5 ps-4">Air Quality Index : {aqi}</div>
                <div className="ps-4">Wind speed : {wndspd}m/s</div>
              </div>
            </div>
            <div className="weatherbod col-md-8">
              <div className="col-md-3">
                <span className="fw-bold h1 text-center pt-5 ps-5">{temp} °C </span>
                <br />
                <span className="ps-5">{description} at {city}, {country}</span>
              </div>
              <div className="col-md-3">
                <img src={icon} alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
