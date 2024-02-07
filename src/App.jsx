import { useState } from "react";
import { WeatherDetails } from "./components/WeatherDetails";
import { fetchWeatherData } from "./api/get-current-weather";
import { fetchWeatherForecast } from "./api/get-weather-forecast";
import { WeatherForecast } from "./components/WeatherForecast";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [forecastData, setForecastData] = useState([]);

  //----------------------------USING ASYNC/AWAIT-----------------------------//
  const handleSearch = async (e) => {
    e.preventDefault();
    if (city) {
      const weatherData = await fetchWeatherData(city);
      setData(weatherData);
      const fetchdata = await fetchWeatherForecast(city);
      setForecastData(fetchdata);
      setCity("");
    } else {
      alert("Please Enter City Name");
    }
  };
  //---------------------USING PROMISES-------------------------//

  // const handleSearch = async(e) => {
  //   e.preventDefault();
  //   if (city) {
  //     fetchWeatherData(city)
  //       .then((data) => {
  //         setData(data);
  //         setError(null);
  //       })
  //       .catch((error) => {
  //         setData(null);
  //         setError(error.message);
  //       });

  //     fetchWeatherForecast(city)
  //       .then((data) => {
  //         setForecastData(data);
  //         setError(null);
  //       })
  //       .catch((error) => {
  //         setForecastData(null);
  //         setError(error.message);
  //       });

  //       setCity("")
  //   } else {
  //     alert("Please Enter City Name");
  //   }
  // };

  return (
    <>
      <div className="weather-app">
        <form onSubmit={handleSearch} className="searchField">
          <input
            className="cityInput"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter City Name"
          />
          <button className="search-btn">Search</button>
        </form>
        {data && <WeatherDetails weather={data} />}
      </div>
      {forecastData && <WeatherForecast data={forecastData} />}
    </>
  );
};

export default App;
