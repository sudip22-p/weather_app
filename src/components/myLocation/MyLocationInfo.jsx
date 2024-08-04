import React from "react";
import "./myLocation.css";
import { FaSun } from "react-icons/fa";
const MyLocationInfo = () => {
  return (
    <div className="w-[60vw] h-[100vh] flex justify-between flex-col relative text-[#ffffff] bg-[#669EB7]">
      <section className="w-[60vw] px-[3vw] py-[5vh] flex items-end flex-col">
        <div id="my-location" className="text-5xl">
          Pokhara
        </div>
        <div id="country" className="pl-[3vw] text-3xl">
          NEP
        </div>
      </section>
      <section className="w-[60vw] px-[3vw] py-[3vh] flex flex-row justify-between">
        <div className="text-[#000]">
          <div id="time" className="text-3xl">
            17:18:39
          </div>
          <div id="date" className="text-3xl">
            4 August 2024
          </div>
        </div>
        <div id="temperature" className="text-6xl">
          32<sup>o</sup>C
        </div>
      </section>
      <section className="flex justify-between flex-col absolute top-[22vh] left-[20vw]">
        <div className="icon flex justify-center items-center flex-col">
          <FaSun size={300} color="#FDCC17" />
          <div className="text-5xl pt-[3vh] text-[#FDCC17]">HAZE</div>
        </div>
      </section>
      <p className="absolute top-[10vh] left-[3vw] text-3xl text-[#000]">My Location</p>
    </div>
  );
};

export default MyLocationInfo;
