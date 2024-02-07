export function timestampToDate(timestamp) {
  const milliseconds = timestamp * 1000;

  const date = new Date(milliseconds);

  const dateString = date.toDateString();

  return dateString;
}

export function kelvinToCelsius(kelvin) {
  const celsius = kelvin - 273.15;
  return celsius.toFixed(2);
}
