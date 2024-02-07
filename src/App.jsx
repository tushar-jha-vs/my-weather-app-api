import { useState } from "react";
import { WeatherDetails } from "./components/WeatherDetails";
import { fetchWeatherData } from "./api/weatherAppApi";
import { fetchWeatherForecast } from "./api/weatherForecastApi";
import { WeatherForecast } from "./components/WeatherForecast";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  // const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [forecastData, setForecastData] = useState([]);

  //----------------------------USING ASYNC/AWAIT-----------------------------//
  const handleSearch = (e) => {
    e.preventDefault();
    if (city) {
      fetchWeatherData(city).then((data) => setData(data));
      fetchWeatherForecast(city).then((data) => setForecastData(data));
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
        {/* {error && <div className="error">{error}</div>} */}
        {data && <WeatherDetails weather={data} />}
      </div>
      {forecastData && <WeatherForecast data={forecastData} />}
    </>
  );
};

export default App;
