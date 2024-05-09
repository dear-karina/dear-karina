import axios from "axios";
import { Weather } from "../../models/weather.model";

export const getCurrentWeather=async (location:string="Hanoi")=>{
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?q=${location}&key=${process.env.WEATHER_API_KEY}`);
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