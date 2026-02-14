import type { FC, SVGProps } from "react";

import SunIcon from "../components/svg/Sun";
import PartlyCloudyIcon1 from "../components/svg/Partcloud1";
import PartlyCloudyIcon2 from "../components/svg/Partcloud2";
import CloudIcon from "../components/svg/Cloudy";
import FogIcon from "../components/svg/Fog";
import DrizzleIcon1 from "../components/svg/drizzle01";
import DrizzleIcon2 from "../components/svg/drizzle02";
import DrizzleIcon3 from "../components/svg/drizzle03";
import RainIcon from "../components/svg/Rain";
import SnowIcon1 from "../components/svg/SnowIcon1";
import SnowIcon2 from "../components/svg/SnowIcon2";

type IconType = FC<SVGProps<SVGSVGElement>>;

type WeatherInfo = {
  icon: IconType;
  text: string;
};

const weatherMap: Record<number, WeatherInfo> = {
  0: { icon: SunIcon, text: "Clear sky" },

  1: { icon: PartlyCloudyIcon1, text: "Mainly clear" },
  2: { icon: PartlyCloudyIcon2, text: "Partly cloudy" },

  3: { icon: CloudIcon, text: "Overcast" },

  45: { icon: FogIcon, text: "Foggy" },
  48: { icon: FogIcon, text: "Freezing fog" },

  51: { icon: DrizzleIcon1, text: "Light drizzle" },
  53: { icon: DrizzleIcon2, text: "Moderate drizzle" },
  55: { icon: DrizzleIcon3, text: "Heavy drizzle" },

  61: { icon: DrizzleIcon3, text: "Light rain" },
  63: { icon: DrizzleIcon3, text: "Moderate rain" },
  65: { icon: RainIcon, text: "Heavy rain" },

  71: { icon: SnowIcon1, text: "Light snow" },
  73: { icon: SnowIcon1, text: "Moderate snow" },
  75: { icon: SnowIcon2, text: "Heavy snow" },

  80: { icon: DrizzleIcon3, text: "Rain showers" },
  81: { icon: DrizzleIcon3, text: "Moderate showers" },
  82: { icon: RainIcon, text: "Heavy showers" },

  95: { icon: RainIcon, text: "Thunderstorm" },
  96: { icon: RainIcon, text: "Thunderstorm with hail" },
  99: { icon: RainIcon, text: "Heavy thunderstorm" },
};
export const getWeathercode = (code: number): WeatherInfo => {
  return (
    weatherMap[code] || {
      icon: SunIcon,
      text: "Weather unavailable",
    }
  );
};
