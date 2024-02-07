import "../styles.css/WeatherDetailsStyles.css";

export const WeatherDetails = ({ weather }) => {
  return weather.name ? (
    <div className="weather-info">
      <h2 className="city-name">
        {weather?.name}, {weather?.sys?.country}
      </h2>
      <p className="temperature">Temperature: {weather?.main?.temp}°C</p>
      <p className="description">
        Description: {weather?.weather[0]?.description}
      </p>
      <h1 className="forecast-heading">Next 3 Days Weather Forecast: </h1>
    </div>
  ) : (
    <div className="no-data">
      No Weather Details Available, Please Enter a City Name
    </div>
  );
};
