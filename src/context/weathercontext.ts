import { createContext } from "react";
import type { WeatherData } from "../services/getweatherinfo";

export type WeatherContextType = {
  weather: WeatherData;
  setWeather: React.Dispatch<React.SetStateAction<WeatherData>>;
};

export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined,
);
