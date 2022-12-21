
const API_KEY = "0f2c78fe24d04bc8969b4c9cbb0b72c5";
const BASE_URL = "https://api.weatherbit.io/v2.0/current";

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  
    return fetch(url).then((res) => res.json());
  };