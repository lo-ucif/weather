import Icontxt from "../components/ui/Icontxt";
import Gpsicon from "../components/icon/Gpsicon";
import Precipitationicon from "../components/icon/Precipitationicon";
import Cadremetéo from "../components/homecomp/cadremetéo";
import Cadrethree from "../components/homecomp/Cadrethree";
import Windicon from "../components/icon/Windicon";
import Humidityicon from "../components/icon/Humidityicon";
export default function Home() {
  return (
    <div className="flex gap-6 py-3 flex-col flex-nowrap justify-start items-center">
      <Icontxt Icon={Gpsicon} text="constantine algeria" />
      <Cadremetéo />
      <div className="flex  gap-8 w-full justify-between items-center">
        <Cadrethree Icon={Precipitationicon} text="50 %" />
        <Cadrethree Icon={Windicon} text="11 km" />
        <Cadrethree Icon={Humidityicon} text="20 %" />
      </div>
    </div>
  );
}
