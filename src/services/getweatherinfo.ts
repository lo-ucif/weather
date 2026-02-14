import axios from "axios";
import { getUserLocation } from "./getUserLocation";

export interface WeatherData {
  temperature_2m: number;
  relative_humidity_2m: number;
  precipitation_probability: number;
  wind_speed_10m: number;
  weather_code: number;
  location: string;
}
export const getWeather = async (
  customLat?: number,
  customLon?: number,
  customLocation?: string,
): Promise<WeatherData | null> => {
  try {
    let latitude: number;
    let longitude: number;
    let location: string;

    if (customLat && customLon) {
      latitude = customLat;
      longitude = customLon;
      location = customLocation || "Custom Location";
    } else {
      const userLocation = await getUserLocation();
      latitude = userLocation.latitude;
      longitude = userLocation.longitude;
      location = userLocation.location;
    }

    const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
      params: {
        latitude,
        longitude,
        current:
          "temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m,weather_code",
      },
    });

    const current = response.data.current;

    return {
      temperature_2m: current.temperature_2m,
      relative_humidity_2m: current.relative_humidity_2m,
      precipitation_probability: current.precipitation_probability,
      wind_speed_10m: current.wind_speed_10m,
      weather_code: current.weather_code,
      location,
    };
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
};
