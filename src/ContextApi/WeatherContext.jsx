import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

const WeatherProvider = ({children})=>{
    const [weatherData,setWeatherData] = useState([]);

    useEffect(()=>{
        const ApiKey = "8af08bcde511a9e1adc3b0074d84009d";
        const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${ApiKey}`;

        const FetchData = async ()=>{
            try {
                const response = await axios.get(ApiUrl);
                const data = response.data;
                setWeatherData(data);
                
            } catch (error) {
                console.log("Error ::- "+error);
            }
        }

        FetchData();
    },[]);


    return(
        <WeatherContext.Provider value={{weatherData}}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherProvider;