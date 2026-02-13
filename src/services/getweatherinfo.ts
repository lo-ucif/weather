import axios from "axios";

export interface WeatherData {
  temperature_2m: number;
  relative_humidity_2m: number;
  precipitation: number;
  wind_speed_10m: number;
  weather_code: number;
  location: string;
  forecastText: string;
}

const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=36.75&longitude=3.06&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,weather_code";
export const getWeather = async (): Promise<WeatherData | null> => {
  try {
    const response = await axios.get(API_URL);

    const current = response.data.current;
    

    let forecastText = "";

    switch (true) {
      case current.precipitation > 5:
        forecastText = "Expect heavy rain today.";
        break;
      case current.precipitation > 0:
        forecastText = "Light rain expected today.";
        break;
      case current.weatherCode === 0:
        forecastText = "Clear sky today.";
        break;
      case current.weatherCode >= 1 && current.weatherCode <= 3:
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
      location: "Constantine, Algeria",
      forecastText: forecastText,
    };
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
};
