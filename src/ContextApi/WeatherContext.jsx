import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

const WeatherProvider = ({children})=>{
    const [weatherData,setWeatherData] = useState([]);
    const [wind,setWind] = useState([]);
    const [icons,setIcons] = useState([]);
    const [city,setCity] = useState("Kolkata");
    useEffect(()=>{
        const ApiKey = "8af08bcde511a9e1adc3b0074d84009d";
        const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ApiKey}`;

        const FetchData = async ()=>{
            try {
                const response = await axios.get(ApiUrl);
                const data = response.data;
                setWind(data.wind)
                setWeatherData(data.main);
                setIcons(data.weather[0]);
            } catch (error) {
                console.log("Error ::- "+error);
            }
        }

        FetchData();
    },[city]);


    return(
        <WeatherContext.Provider value={{weatherData,wind,icons,city,setCity}}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherProvider;