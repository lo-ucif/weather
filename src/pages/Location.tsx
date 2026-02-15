import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/layout/Loading";
import Wilayatxt from "../components/ui/wilayatxt";
import Gpsicon from "../components/icon/Gpsicon";
import Icontxt from "../components/ui/Icontxt";
import { getWeather } from "../services/getweatherinfo";
interface Wilaya {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export default function Location() {
  const [wilayas, setWilayas] = useState<Wilaya[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchWilayas = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/wilaya.json");
        setWilayas(response.data);
        setLoading(false);
      } catch (err) {
        setError("error update data");
        setLoading(false);
        console.error(err);
      }
    };

    fetchWilayas();
  }, []);
  const handleClick = async (wilaya: Wilaya) => {
    const data = await getWeather(
      wilaya.latitude,
      wilaya.longitude,
      wilaya.name,
    );
    console.log(data);
  };

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col gap-5 mt-3">
      <Icontxt Icon={Gpsicon} text={"all algeria wilaya"} />

      <div className="w-full flex flex-col gap-4">
        {wilayas.map((wilaya) => (
          <div
            key={wilaya.id}
            onClick={() => handleClick(wilaya)}
            className="cursor-pointer transition p-2 flex justify-start  gap-2"
          >
            <Wilayatxt Icon={Gpsicon} text={wilaya.name} text02={wilaya.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
