import React, { useEffect, useState } from "react";
import "./css/stle.css";

const Tmp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");
    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=10e6a5c62433d2e879aacf7b838db753`
            const response = await fetch(url);
            const data=await response.json();
           
            setCity(data.main);
           
}
        fetchApi();
    },[search])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        value={search}
                        onChange={(event)=>{
                            setSearch(event.target.value)
                        }}
                    />


                </div>
                {!city ? (
                    <p>No data found</p>
                ) : (
                    <div>
                    <div className="info">
                    <h2 className="location">
                        <i class="fas fa-street-view"></i>{search}
                    </h2>
                    <h1 className="temp">{city.temp}°Cel</h1>
                    <h3 className="tempmin_max">Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
                </div>
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                </div>
                )
                }

                
            </div>

        </>
    )
}
export default Tmp;