import SunIcon from "../components/svg/Sun";
import CloudIcon from "../components/svg/Cloudy";
import RainIcon from "../components/svg/Rain";
import SnowIcon from "../components/svg/Snow";
import FogIcon from "../components/svg/Fog";
import PartlyCloudyIcon from "../components/svg/Fog";
import type { FC, SVGProps } from "react";
export const getWeatherIcon = (code: number): FC<SVGProps<SVGSVGElement>> => {
  switch (code) {
    case 0:
      return SunIcon;

    case 1:
    case 2:
      return PartlyCloudyIcon;

    case 3:
      return CloudIcon;

    case 45:
    case 48:
      return FogIcon;

    case 51:
    case 53:
    case 55:
    case 61:
    case 63:
    case 65:
      return RainIcon;

    case 71:
    case 73:
    case 75:
      return SnowIcon;

    case 95:
    case 96:
    case 99:
    default:
      return SunIcon;
  }
};
