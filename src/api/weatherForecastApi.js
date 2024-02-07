import { kelvinToCelsius, timestampToDate } from "../utils/utils";

//----------------------------USING ASYNC/AWAIT-----------------------------//
export const fetchWeatherForecast = async (city) => {
  const result = await fetch(`${import.meta.env.VITE_FORECAST_URL}?q=${city}&appid=${import.meta.env.VITE_API_KEY}`);
  const list = await result.json();
  const extractedData = [];
  for (let i = 8; i < 25; i += 8) {
    const item = list.list[i];
    const { dt, main, weather, wind } = item;
    const tempMin = kelvinToCelsius(main.temp_min);
    const timestamp = timestampToDate(dt);
    const tempMax = kelvinToCelsius(main.temp_max);
    const weatherIcon = weather[0].icon;
    const windSpeed = wind.speed;

    const extractedItem = {
      timestamp,
      tempMin,
      tempMax,
      weatherIcon,
      windSpeed,
    };
    extractedData.push(extractedItem);
  }
  return extractedData;
};

//---------------------USING PROMISES-------------------------//

// export const fetchWeatherForecast = (city) => {
//   return fetch(`${apiUrl}?q=${city}&appid=${apiKey}`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       const list = data.list;
//       const extractedData = [];
//       for (let i = 8; i < 25; i += 8) {
//         const item = list[i];
//         const { dt, main, weather, wind } = item;
//         const tempMin = kelvinToCelsius(main.temp_min);
//         const timestamp = timestampToDate(dt);
//         const tempMax = kelvinToCelsius(main.temp_max);
//         const weatherIcon = weather[0].icon;
//         const windSpeed = wind.speed;

//         const extractedItem = {
//           timestamp,
//           tempMin,
//           tempMax,
//           weatherIcon,
//           windSpeed,
//         };
//         extractedData.push(extractedItem);
//       }
//       return extractedData;
//     })
//     .catch((error) => {
//       throw new Error(`Failed to fetch weather forecast ${error}`);
//     });
// };
