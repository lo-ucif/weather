import imgmetéo from "../../assets/img/photo_2026-01-30_08-08-15.png";
import "../homecomp/home.css";
export default function Cadremetéo() {
  return (
    <div className="flex flex-col justify-center items-center self-center rounded-[80px] glass-card px-40 pb-4">
      <img className="w-70 h-70" src={imgmetéo} />
      <div className="txt02">26°C</div>
      <div className="txt03">Expect high rain today.</div>
    </div>
  );
}
