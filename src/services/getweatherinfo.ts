import axios from "axios";
import { getUserLocation } from "./getUserLocation";

export interface WeatherData {
  temperature_2m: number;
  relative_humidity_2m: number;
  precipitation: number;
  wind_speed_10m: number;
  weather_code: number;
  location: string;
  forecastText: string;
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

    let forecastText = "";

    switch (true) {
      case current.precipitation > 5:
        forecastText = "Expect heavy rain today.";
        break;
      case current.precipitation > 0:
        forecastText = "Light rain expected today.";
        break;
      case current.weather_code === 0:
        forecastText = "Clear sky today.";
        break;
      case current.weather_code >= 1 && current.weather_code <= 3:
        forecastText = "Partly cloudy today.";
        break;
      default:
        forecastText = "Weather is normal today.";
    }

    return {
      temperature_2m: current.temperature_2m,
      relative_humidity_2m: current.relative_humidity_2m,
      precipitation: current.precipitation,
      wind_speed_10m: current.wind_speed_10m,
      weather_code: current.weather_code,
      location: location,
      forecastText,
    };
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
};
