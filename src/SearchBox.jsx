import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ updateWeatherInfo }) {
  const [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const getWeatherInfo = async () => {
    const response = await fetch(
      `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`
    );
    return response.json();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getWeatherInfo();
    if (data.cod !== 200) {
      alert("City not found");
      return;
    }
    updateWeatherInfo({
      city: data.name,
      temp: data.main.temp,
      feelsLike: data.main.feels_like,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      weather: data.weather[0].description,
    });
    setCity("");
  };

  return (
    <div className="search-wrapper">
      <form onSubmit={handleSubmit} className="search-form">
        <TextField
          label="City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>
    </div>
  );
}
