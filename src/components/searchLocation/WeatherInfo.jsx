import React from "react";

// Props for the WeatherInfo component
const WeatherInfo = ({ weatherData }) => {
  const weatherCondition = weatherData.weather[0].description;
  const iconId = weatherData.weather[0].icon;
  const weatherIconUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
  return (
    <section className="flex flex-row w-full my-5 text-black ml-[3vw]">
      <div className="flex flex-col items-center justify-center w-1/3">
        <div className="text-2xl lg:text-3xl">{weatherData.name}</div>
        <div className="text-md lg:text-xl">{weatherData.sys.country}</div>
      </div>
      <div className="flex flex-col items-center w-2/3">
        <img src={weatherIconUrl} alt={weatherCondition} className="" />
        <div className="text-md lg:text-xl">
          {weatherData.weather[0].description}
        </div>
      </div>
    </section>
  );
};

export default WeatherInfo;
