import { RESPONSES } from "./constants.js";

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


export const checkResponse = (res) =>{
   if(res.ok) return;
   else if(RESPONSES[res.status]){
    throw new Error(RESPONSES[res.status]);
   }else{
    throw new Error("Some Error occured");
   }
}
