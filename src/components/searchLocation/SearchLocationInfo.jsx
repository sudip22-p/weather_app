import React from "react";

import { FaSun, FaSearch } from "react-icons/fa";
const SearchLocationInfo = () => {
  return (
    <div className="w-[40vw] h-[100vh] flex justify-start items-start flex-col relative text-[#333] bg-[#ffffff86] px-[3vw] py-[5vh]">
      <div className="search-box flex flex-row relative">
        <input
          type="text"
          placeholder="search city"
          className="outline-none px-[25px] py-[2vh] bg-transparent w-[32vw] rounded-l-full text-[#669EB7] border-[#669EB7] border-[2px] text-2xl"
        />
        <span className="flex justify-center items-center w-[5vw] h-[10vh] p-[15px] bg-[#669EB7] rounded-full relative bottom-[0px] right-[2vw] cursor-pointer">
          <FaSearch size={30} color="white" />
        </span>
      </div>
      <section className="flex flex-row w-[40vw] my-[5vh] text-[#000]">
        <div className="icon flex justify-center items-start flex-col pl-[5vw] w-[10vw] text-3xl">
          <div className="text-3xl">Pokhara</div>
          <div className="pl-[3vw] text-xl">NEP</div>
        </div>
        <div className="icon flex justify-center items-center flex-col w-[25vw]">
          <FaSun size={120} color="#FDCC17" />
          <div className="text-xl">HAZE</div>
        </div>
      </section>
      <div className="info text-2xl w-[40vw]">
        <hr className="bg-[#333] relative right-[3vw] m-[10px]" />
        <div>
          Temperature : 32<sup>o</sup>C (HAZE)
        </div>
        <div className="text-xl">
          <span>
            High : 32<sup>o</sup>C
          </span>
          <span className="ml-[5vw]">
            Low : 32<sup>o</sup>C
          </span>
        </div>
        <hr className="bg-[#333] relative right-[3vw] m-[10px]" />
        <div>Humidity : 22 g/cc</div>
        <hr className="bg-[#333] relative right-[3vw] m-[10px]" />
        <div>Visibility : 22 g/cc</div>
        <hr className="bg-[#333] relative right-[3vw] m-[10px]" />
        <div>Wind Speed : 22 g/cc</div>
        <hr className="bg-[#333] relative right-[3vw] m-[10px]" />
        <div>
          <span>Sunrise : 5 AM</span>
          <span className="ml-[5vw]">Sunset : 5 PM</span>
        </div>
        <hr className="bg-[#333] relative right-[3vw] m-[10px]" />
      </div>
    </div>
  );
};

export default SearchLocationInfo;
