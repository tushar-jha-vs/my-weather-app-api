import { checkResponse } from "../utils/index";

//----------------------------USING ASYNC/AWAIT-----------------------------//
export const fetchWeatherData = async (city) => {
  try {
    const result = await fetch(
      `${import.meta.env.VITE_WEATHER_URL}?q=${city}&appid=${
        import.meta.env.VITE_API_KEY
      }`
    );
    checkResponse(result);
    return await result.json();
  } catch (err) {
    alert(err.message);
  }
};

//---------------------USING PROMISES-------------------------//

// export const fetchWeatherData = (city) => {
//   return fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
//     .then((response) => {
//       return response.json();
//     })
//     .catch((error) => {
//       throw new Error(`Failed to fetch weather data ${error}`);
//     });
// };
