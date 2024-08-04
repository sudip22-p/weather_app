import React from "react";

import { FaSun } from "react-icons/fa";
const SearchLocationInfo = () => {
  return (
    <div className="w-[60vw] h-[100vh] flex justify-start items-start flex-col relative text-[#000000] bg-[#00000092]">
      <div className="search-box">
        <input type="text" placeholder="search city" />
        <span>search icon</span>
      </div>
      <p>line</p>
      <div className="icon">
        <FaSun size={120} color="orange" />
        <div className="text-xl pl-[3vw]">HAZE</div>
      </div>
      <p>line</p>
      <div className="info">
        <div>
          Temperature : 32<sup>o</sup>C (HAZE)
        </div>
        <div>
          <span>
            High : 32<sup>o</sup>C
          </span>
          <span>
            Low : 32<sup>o</sup>C
          </span>
        </div>
        <p>line</p>
        <div>Humidity : 22 g/cc</div>
        <p>line</p>
        <div>Visibility : 22 g/cc</div>
        <p>line</p>
        <div>Wind Speed : 22 g/cc</div>
        <p>line</p>
        <div>
          <span>Sunrise : 5 AM</span>
          <span>Sunset : 5 PM</span>
        </div>
      </div>
    </div>
  );
};

export default SearchLocationInfo;
