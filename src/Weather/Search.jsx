import { useContext, useState } from "react";
import {WeatherContext} from "../ContextApi/WeatherContext";

const Search = ()=>{
    const {setCity} = useContext(WeatherContext);
    const [message,setMessage] = useState("");
    const handleChange = (e)=>{
        setMessage(e.target.value);
    }
    const handleSubmit = (e)=>{
        if(e.key === 'Enter'){
            setCity(message);
            e.target.value = "";
        }
    }
    
    return(
        <>
        <div className="">
            <div className="pt-5 flex justify-center">
                <input type="text" placeholder="Search" name="city" onChange={handleChange} onKeyDown={handleSubmit} className="w-[250px] outline-none ps-4 h-8 rounded-2xl" />
            </div>
        </div>
        </>
    )
}

export default Search;