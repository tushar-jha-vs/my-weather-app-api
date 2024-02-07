
//----------------------------USING ASYNC/AWAIT-----------------------------//
export const fetchWeatherData = async (city) => {
  try {
    const result = await fetch(
      `${import.meta.env.VITE_WEATHER_URL}?q=${city}&appid=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return await result.json();
  } catch (err) {
    console.log(err);
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
