import "../styles.css/WeatherForecastStyles.css";
export const WeatherForecast = ({ data }) => {
  console.log("Weather Data: ",data);
  const imgSrc = "https://openweathermap.org/img/wn";
  return (
    <div className="weather-container">
      { data && data.map((item, index) => (
        <div className="weather-item" key={index}>
          <img
            src={`${imgSrc}/${item.weatherIcon.slice(0, -1) + "d"}@4x.png`}
          />
          <p>
            <b>Date: </b>
            {item.timestamp}
          </p>
          <p>
            <b>Temp Min: </b>
            {item.tempMin}
          </p>
          <p>
            <b>Temp Max: </b>
            {item.tempMax}
          </p>
          <p>
            <b>Wind Speed: </b>
            {item.windSpeed}
          </p>
        </div>
      ))}
    </div>
  );
};
