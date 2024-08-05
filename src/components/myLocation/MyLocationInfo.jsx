import React from "react";
import { useState } from "react";
import "./myLocation.css";
const MyLocationInfo = ({ myLocationData }) => {
  const [time, setTime] = React.useState("");
  const [date, setDate] = React.useState("");
  function updateCurrentTimeDate() {
    const nowUTC = new Date();
    const localTimestamp = nowUTC.getTime();
    const localDate = new Date(localTimestamp);

    // Extract components
    const localYear = localDate.getFullYear();
    let localMonth = localDate.getMonth() + 1;
    const localDay = localDate.getDate();
    const localHour = localDate.getHours();
    const localMinute = localDate.getMinutes();
    const localSecond = localDate.getSeconds();

    // Month name
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const localMonthName = monthNames[localMonth - 1] || "Invalid Month";

    // Format the date and time
    const formattedDate = `${String(localDay).padStart(
      2,
      "0"
    )} ${localMonthName} ${localYear}`;
    const formattedTime = `${String(localHour).padStart(2, "0")}:${String(
      localMinute
    ).padStart(2, "0")}:${String(localSecond).padStart(2, "0")}`;
    setTime(formattedTime);
    setDate(formattedDate);
  }
  if (!myLocationData) {
    return <p>Loading location data...</p>;
  }
  setInterval(() => {
    updateCurrentTimeDate();
  }, 1000);

  const temperatureCelsius = Math.round(myLocationData.main.temp);
  const feelsLike = Math.round(myLocationData.main.feels_like);
  const weatherCondition = myLocationData.weather[0].description;
  const iconId = myLocationData.weather[0].icon;
  const weatherIconUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
  return (
    <div className="w-[100vw] sm:w-[60vw] min-h-[100vh] sm:h-[100vh] flex justify-between flex-col relative text-[#ffffff] bg-[#669EB7]">
      <section className="w-[100vw] sm:w-[60vw] px-[3vw] py-[5vh] flex items-end flex-col">
        <div
          id="time"
          className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
        >
          {time}
        </div>
        <div
          id="date"
          className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
        >
          {date}
        </div>
      </section>
      <section className="flex justify-center items-center flex-col w-[100vw] sm:w-[60vw]">
        <div
          id="my-location"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl text-[#FDCC17]"
        >
          {myLocationData.name}
        </div>
        <div
          id="country"
          className="text-md sm:text-lg md:text-xl lg:text-3xl xl:text-5xl text-[#FDCC17]"
        >
          {myLocationData.sys.country}
        </div>
      </section>
      <section className="w-[100vw] sm:w-[60vw] px-[3vw] py-[5vh] grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-0 lg:flex flex-row justify-between">
        <div className="info md:text-md lg:text-lg xl:text-xl text-[#0a1414] md:pt-[7vh] lg:pt-[2vh]">
          <div className="flex items-center justify-center">
            Humidity: {myLocationData.main.humidity}%
          </div>
          <div className="flex items-center justify-center">
            Wind Speed: {myLocationData.wind.speed} Km/H
          </div>
          <div className="flex items-center justify-center">
            Sunrise:{" "}
            {new Date(myLocationData.sys.sunrise * 1000).toLocaleTimeString()}
          </div>
          <div className="flex items-center justify-center">
            Sunset:{" "}
            {new Date(myLocationData.sys.sunset * 1000).toLocaleTimeString()}
          </div>
        </div>
        <div className="icon flex justify-center items-center flex-col mt-[-10vh] lg:mt-0">
          <img src={weatherIconUrl} alt={weatherCondition} className="" />
          <div className="md:text-xl lg:text-2xl xl:text-3xl text-[#000] font-semibold mt-[-3vh]">
            {weatherCondition}
          </div>
        </div>

        <div className="flex justify-center items-center flex-col text-black">
          <div id="temperature" className="text-3xl lg:text-4xl xl:text-6xl">
            {temperatureCelsius}
            <sup>o</sup>C
          </div>
          <div id="temperature" className="text-sm xl:text-lg">
            Feels like
            {" " + feelsLike}
            <sup>o</sup>C
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center w-full text-sm xl:text-lg">
            <span>
              High: {Math.round(myLocationData.main.temp_max)}
              <sup>o</sup>C
            </span>
            <span className="ml-0 lg:ml-[3vw]">
              Low: {Math.round(myLocationData.main.temp_min)}
              <sup>o</sup>C
            </span>
          </div>
        </div>
      </section>
      <p className="absolute top-2 sm:top-[10vh] left-[3vw] text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
        My Location
      </p>
    </div>
  );
};

export default MyLocationInfo;
