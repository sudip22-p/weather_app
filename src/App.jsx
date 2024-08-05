import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import MyLocationInfo from "./components/myLocation/MyLocationInfo";
import WeatherApp from "./components/searchLocation/WeatherApp";

function App() {
  const [myLocationData, setMyLocationData] = useState(null);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          console.error("Geolocation error:", error.message);
          alert(
            "Error: Unable to retrieve your location. Please allow location access."
          );
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const fetchWeatherData = async (lat, lng) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`;
      const locationResponse = await axios.get(url);
      const data = locationResponse.data;
      setMyLocationData(data);
    } catch (error) {
      // Log the error for debugging purposes
      console.error("Error fetching weather data:", error.message);
      alert("Error fetching your location data. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between content-center w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto sm:overflow-y-hidden">
      {myLocationData ? (
        <>
          <MyLocationInfo myLocationData={myLocationData} />
          <WeatherApp myLocationData={myLocationData} />
        </>
      ) : (
        <p>Loading location data...</p>
      )}
    </div>
  );
}

export default App;
