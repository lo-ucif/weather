import type { FC, SVGProps } from "react";

import SunIcon from "../components/svg/Sun";
import PartlyCloudyIcon from "../components/svg/Sun";
import CloudIcon from "../components/svg/Sun";
import FogIcon from "../components/svg/Fog";
import DrizzleIcon from "../components/svg/Sun";
import RainIcon from "../components/svg/Rain";
import SnowIcon from "../components/svg/Snow";
import ShowerIcon from "../components/svg/Sun";
import ThunderstormIcon from "../components/svg/Sun";

// type IconType = FC<SVGProps<SVGSVGElement>>;

type WeatherInfo = {
  icon: FC<SVGProps<SVGSVGElement>>;
  text: string;
};

const weatherMap: Record<number, WeatherInfo> = {
  0: { icon: SunIcon, text: "Clear sky" },

  1: { icon: PartlyCloudyIcon, text: "Mainly clear" },
  2: { icon: PartlyCloudyIcon, text: "Partly cloudy" },

  3: { icon: CloudIcon, text: "Overcast" },

  45: { icon: FogIcon, text: "Foggy" },
  48: { icon: FogIcon, text: "Freezing fog" },

  51: { icon: DrizzleIcon, text: "Light drizzle" },
  53: { icon: DrizzleIcon, text: "Moderate drizzle" },
  55: { icon: DrizzleIcon, text: "Heavy drizzle" },

  61: { icon: RainIcon, text: "Light rain" },
  63: { icon: RainIcon, text: "Moderate rain" },
  65: { icon: RainIcon, text: "Heavy rain" },

  71: { icon: SnowIcon, text: "Light snow" },
  73: { icon: SnowIcon, text: "Moderate snow" },
  75: { icon: SnowIcon, text: "Heavy snow" },

  80: { icon: ShowerIcon, text: "Rain showers" },
  81: { icon: ShowerIcon, text: "Moderate showers" },
  82: { icon: ShowerIcon, text: "Heavy showers" },

  95: { icon: ThunderstormIcon, text: "Thunderstorm" },
  96: { icon: ThunderstormIcon, text: "Thunderstorm with hail" },
  99: { icon: ThunderstormIcon, text: "Heavy thunderstorm" },
};
export const getWeathercode = (code: number): WeatherInfo => {
  return (
    weatherMap[code] || {
      icon: SunIcon,
      text: "Weather unavailable",
    }
  );
};
 