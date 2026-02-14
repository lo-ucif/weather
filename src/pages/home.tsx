import Icontxt from "../components/ui/Icontxt";
import Gpsicon from "../components/icon/Gpsicon";
import Precipitationicon from "../components/icon/Precipitationicon";
import Cadremetéo from "../components/homecomp/Cadremetéo";
import Cadrethree from "../components/homecomp/Cadrethree";
import Windicon from "../components/icon/Windicon";
import Humidityicon from "../components/icon/Humidityicon";
import { useEffect, useState } from "react";
import { getWeather } from "../services/getweatherinfo";
import type { WeatherData } from "../services/getweatherinfo";
import { getWeatherIcon } from "../services/weathercode";

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      const data = await getWeather();
      setWeather(data);
      setLoading(false);
    };

    fetchWeather();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!weather) return <div>Error fetching weather</div>;
  const icon = getWeatherIcon(weather.weather_code);
  return (
    <div className="flex gap-4 py-3 flex-col flex-nowrap justify-start items-center">
      <Icontxt Icon={Gpsicon} text={weather.location} />
      <Cadremetéo
        text01={weather.temperature_2m}
        text02={weather.forecastText}
        Icon={icon}
      />
      <div className="flex  gap-8 w-full justify-between items-center">
        <Cadrethree
          Icon={Precipitationicon}
          text={weather.precipitation}
          mark={1}
        />
        <Cadrethree Icon={Windicon} text={weather.wind_speed_10m} mark={2} />
        <Cadrethree
          Icon={Humidityicon}
          text={weather.relative_humidity_2m}
          mark={3}
        />
      </div>
    </div>
  );
}
