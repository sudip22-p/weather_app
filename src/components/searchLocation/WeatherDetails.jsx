import React from "react";

// Props for the WeatherDetails component
const WeatherDetails = ({ weatherData }) => {
  return (
    <div className="info text-sm md:text-xl w-full">
      <hr className="bg-gray-700 my-2" />
      <div>
        Temperature: {Math.round(weatherData.main.temp)}
        <sup>o</sup>C ({weatherData.weather[0].main})
      </div>
      <div>
        <span>
          High: {Math.round(weatherData.main.temp_max)}
          <sup>o</sup>C
        </span>
        <span className="ml-5">
          Low: {Math.round(weatherData.main.temp_min)}
          <sup>o</sup>C
        </span>
      </div>
      <hr className="bg-gray-700 my-2" />
      <div>Humidity: {weatherData.main.humidity}%</div>
      <hr className="bg-gray-700 my-2" />
      <div>Visibility: {weatherData.visibility} m</div>
      <hr className="bg-gray-700 my-2" />
      <div>Wind Speed: {weatherData.wind.speed} Km/H</div>
      <hr className="bg-gray-700 my-2" />
      <div className="flex flex-col lg:block">
        <span>
          Sunrise:{" "}
          {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
        </span>
        <span className="ml-0 lg:ml-5">
          Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
        </span>
      </div>
      <hr className="bg-gray-700 my-2" />
    </div>
  );
};

export default WeatherDetails;
