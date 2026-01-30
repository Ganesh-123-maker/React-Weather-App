import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./App.css"

export default function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  return (
    <div className="app-container">
      <SearchBox updateWeatherInfo={setWeatherInfo} />
      {weatherInfo && <InfoBox info={weatherInfo} />}
    </div>
  );
}
