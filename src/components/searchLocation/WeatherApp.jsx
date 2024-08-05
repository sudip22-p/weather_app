// WeatherApp.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo";
import WeatherDetails from "./WeatherDetails";

const WeatherApp = ({ myLocationData }) => {
  const [city, setCity] = useState(""); // Store input city
  const [weatherData, setWeatherData] = useState(null); // Store fetched weather data
  const [error, setError] = useState(null); // Handle errors
  const [counter, setCounter] = useState(0);

  // Set initial weather data from location if provided
  useEffect(() => {
    if (myLocationData && counter === 0) {
      setWeatherData(myLocationData);
      setCounter((prev) => prev + 1);
    }
  }, []);

  // API key
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  // Function to fetch weather data
  const checkWeather = async () => {
    // Check for empty input
    if (city.trim() === "") {
      alert("You cannot leave the field EMPTY!!!");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = response.data;
      setWeatherData(data);
      setError(null); // Clear previous errors
    } catch (error) {
      // Handle errors
      console.error("Error fetching weather data:", error.message);
      setError("Error Occurred!! No Data Available");
    }
  };

  return (
    <div className="w-[100vw] sm:w-[40vw] h-[100vh] flex flex-col items-start text-[#333] bg-[#a4eff00e] p-2">
      <SearchBar city={city} setCity={setCity} checkWeather={checkWeather} />
      {error && <div className="text-red-500">{error}</div>}
      {weatherData && (
        <>
          <WeatherInfo weatherData={weatherData} />
          <WeatherDetails weatherData={weatherData} />
        </>
      )}
    </div>
  );
};

export default WeatherApp;
