// WeatherProvider.tsx
import { useState , useEffect } from "react";
import type { ReactNode } from "react";
import { WeatherContext } from "./weathercontext";
import type { WeatherData } from "../services/getweatherinfo";
import { getWeather } from "../services/getweatherinfo";
const defaultWeather: WeatherData = {
  temperature_2m: 0,
  relative_humidity_2m: 0,
  precipitation_probability: 0,
  wind_speed_10m: 0,
  weather_code: 0,
  location: "",
};

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [weather, setWeather] = useState<WeatherData>(defaultWeather);

  useEffect(() => {
    const fetchAndFill = async () => {
      const data = await getWeather();
      if (data) setWeather(data);
    };
    fetchAndFill();
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
