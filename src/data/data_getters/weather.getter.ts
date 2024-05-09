import axios from "axios";
import { Weather } from "../../models/weather.model";

export const get_weather=async (location:string="Hanoi")=>{
    try {
      const url=`https://api.weatherapi.com/v1/current.json?q=${location}&key=${process.env.WEATHER_API_KEY}`
        const response = await axios.get(url);

        return Weather.fromJson(response.data)
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Request failed:', error.message);
          console.error('Response status:', error.response?.status);
          console.error('Response data:', error.response?.data);
        } else {
          console.error('An unexpected error occurred:', error);
        }
        return null
      }
}