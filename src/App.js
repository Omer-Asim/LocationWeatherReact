import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
import { usePosition } from "use-position";

function App() {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();
  const dil = navigator.language.split("-")[0];
  let key = process.env.REACT_APP_API_KEY;
  let username = process.env.REACT_APP_USERNAME;

  const getWeather = async (lat, lon) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${dil}&units=metric`
      );
      setWeather(data);
    } catch (error) {}
  };
  useEffect(() => {
    latitude && longitude && getWeather(latitude, longitude);
  }, [latitude, longitude]);
  return (
    <React.StrictMode>
      <div>
        <Header />
        <Weather weather={weather} />
      </div>
    </React.StrictMode>
  );
}

export default App;
