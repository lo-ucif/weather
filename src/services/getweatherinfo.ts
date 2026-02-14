import axios from "axios";
import { getUserLocation } from "./getUserLocation";

export interface WeatherData {
  temperature_2m: number;
  relative_humidity_2m: number;
  precipitation: number;
  wind_speed_10m: number;
  weather_code: number;
  location: string;
}

export const getWeather = async (): Promise<WeatherData | null> => {
  try {
    const { latitude, longitude, location } = await getUserLocation();

    const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
      params: {
        latitude,
        longitude,
        current:
          "temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,weather_code",
      },
    });

    const current = response.data.current;

    return {
      temperature_2m: current.temperature_2m,
      relative_humidity_2m: current.relative_humidity_2m,
      precipitation: current.precipitation,
      wind_speed_10m: current.wind_speed_10m,
      weather_code: current.weather_code,
      location: location,
    };
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
};
