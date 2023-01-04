import React, { useState, useEffect } from 'react';
// import Weatherforecast from '../pages/weatherforecast';
import Wforecast from '../pages/weatherforecast';
import Footer from "../ReUse/Footer";

function Weather() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // in case of calls of api is maxed out use this key:1046089c61b14b8c884e8edf1f4ffe0b
      const response = await fetch(
        'https://api.weatherbit.io/v2.0/current?city=El-Nido&key=0f2c78fe24d04bc8969b4c9cbb0b72c5',
      );
      const json = await response.json();
      setData(json);

    }
    fetchData();
  }, []);




  if (!data) {
    return <div>Loading...</div>;
  }

  const temp = data.data[0].temp;
  const description = data.data[0].weather.description;
  const city = data.data[0].city_name;
  const country = data.data[0].country_code;
  const aqi = data.data[0].aqi;
  const wndspd = data.data[0].wind_spd;
  const sunrise = data.data[0].sunrise;
  const sunset = data.data[0].sunset;

  return (
    <>
      <div className="wBody">
        <div className="container" id="weather1">
          <div className="row">
            <div className="weatherbod col-md-4">
              <div className="col-md-11" style={{minWidth: "230px"}}>
                <center  style={{minWidth: "230px",}}>
                  <span>Current weather</span>
                  <br />
                  <br />
                  <div className="fw-bold h1">{temp} °C </div>
                  <span className="">{description}<br /> at {city}, {country}</span>
                </center>
                {/* Make sure to use the correct path to the image file */}
                <div className="d-flex align-items-center justify-content-center pt-3">
                <img src={process.env.PUBLIC_URL + `/icons/${data.data[0].weather.icon}.png`} alt={process.env.PUBLIC_URL + `/icons/${data.data[0].weather.icon}.png`} />
                </div>
                <center style={{margin:"0 0 0 -20px"}}>
                  <div>Air Quality Index : {aqi}</div>
                  <div>Wind speed : {wndspd}m/s</div>
                  <div>Sunrise : {sunrise} am</div>
                  <div>Sunset : {sunset} pm</div>
                </center>
              </div>
            </div>
            <div className="weatherbod col-md-8">
                <h1 className="text-center p-3 myFontFam myFontStrong display-5">El Nido Palawan</h1>
              <div className="text-center fw-bold pb-3 h2"> 7 Day Forecast</div>
              <hr />
              <span className>
                <Wforecast />
              </span>
              <br />
              <span className="ps-5"></span>
            </div>
          </div>
        </div>
      </div>
      <Footer scrollAmount="-10" setBGcolor="rgba(0, 0, 0, 0.50)" />
    </>
  );
}

export default Weather;
