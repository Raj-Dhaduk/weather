"use client";
import React, { useState } from "react";
import "./page.css";
import axios from "axios";
import Page from "../wathdetails/page";
const page = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  
  const apiKey = process.env.API_KEY;

  const getwather = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.get(
        
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(responce.data);
    
      
    } catch (error) {}
  };
  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <form onSubmit={getwather}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button type="submit">Get Weather</button>
      </form>

      {weather && <Page weather={weather} />}
    </div>
  );
};

export default page;
