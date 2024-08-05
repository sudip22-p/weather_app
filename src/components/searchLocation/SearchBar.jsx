import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const SearchBar = ({ city, setCity, checkWeather }) => {
  const [suggestions, setSuggestions] = useState([]); // State to store suggestions
  const [showSuggestions, setShowSuggestions] = useState(false); // State to toggle suggestion list visibility

  // Function to fetch city suggestions
  const fetchCitySuggestions = async (input) => {
    if (input.trim().length === 0) {
      setSuggestions([]);
      return;
    }
    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY; // Ensure this is correctly configured
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${apiKey}`
      );
      const cityList = response.data.map(
        (city) => `${city.name}, ${city.country}`
      );
      setSuggestions(cityList);
      setShowSuggestions(true);
    } catch (error) {
      console.error("Error fetching city suggestions:", error);
      setSuggestions([]);
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const input = e.target.value;
    setCity(input);
    fetchCitySuggestions(input);
  };

  // Handle suggestion selection
  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion);
    setShowSuggestions(false);
    checkWeather(); // Fetch weather data immediately after selection
  };

  return (
    <div className="search-box flex flex-col relative mb-5 w-full">
      <div className="flex">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Search city"
          className="outline-none px-2 md:px-6 py-2 bg-transparent w-full rounded-full text-[#669EB7] border-[#669EB7] border-2 text-md sm:text-lg md:text-2xl"
          onFocus={() => setShowSuggestions(true)} // Show suggestions on focus
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Hide suggestions on blur
        />
        <span
          className="flex justify-center items-center p-3 md:p-4 bg-[#669EB7] rounded-full cursor-pointer ml-1"
          onClick={checkWeather}
        >
          <div className="hidden md:block">
            <FaSearch size={30} color="white" />
          </div>
          <div className="block md:hidden">
            <FaSearch size={20} color="white" />
          </div>
        </span>
      </div>
      {showSuggestions && suggestions.length > 0 && (
        <ul className="bg-white border border-[#669EB7] rounded-md mt-[9vh] absolute z-10 w-[30vw]">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 cursor-pointer hover:bg-[#669EB7] hover:text-white"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
