import "../homecomp/home.css";
import type { FC, SVGProps } from "react";
type texttwo = {
  text01: number;
  text02: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
};
export default function Cadremetéo({ text01, text02, Icon }: texttwo) {
  return (
    <div className="flex flex-col justify-center items-center self-center rounded-[80px] glass-card px-40 pb-4">
      <Icon className="w-16 h-16" />
      <div className="txt02">{text01} °C</div>
      <div className="txt03">{text02}</div>
    </div>
  );
}
