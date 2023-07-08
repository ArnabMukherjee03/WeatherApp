import { useContext } from "react";
import {WeatherContext} from "../ContextApi/WeatherContext";

import humadity from "./Images/humidity.png";
import windSpeed from "./Images/wind.png";



const Weather = () => {
  const {weatherData,wind,icons,city} = useContext(WeatherContext);
  console.log(icons.id);
  return (
    <>
      <div className=" text-[#fff]">
        <div className="flex items-center justify-center flex-col">
          <img src={`https://openweathermap.org/img/wn/${icons.icon}@4x.png`} className="w-[100px]" alt="" />
          <div className="text-[40px] ">
            {Math.round(weatherData.temp)}<span className="text-[35px]">°C</span>
          </div>
          <div className="text-sm">{Math.round(weatherData.temp_min)}°C ~ {Math.round(weatherData.temp_max)}°C</div>
          <h2 className="text-5xl pt-3">{city}</h2>
        </div>
        <div className="flex mt-9 justify-between mx-5 ">
          {/* Humadity */}
          <div className="flex w-[45%] gap-2">
            <img src={humadity} className="w-[30%]" alt="" />
            <div className="w-[60%]">
              <p>{weatherData.humidity}%</p>
              <p className="text-sm">Humidity</p>
             </div>
          </div>
          {/* Wind Speed */}
          <div className="flex w-[45%] gap-2">
             <img src={windSpeed} className="w-[30%]" alt="" />
             <div className="w-[60%]">
              <p>{wind.speed} m/s</p>
              <p className="text-sm">Wind Speed</p>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
