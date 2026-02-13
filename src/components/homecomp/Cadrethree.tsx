import "../homecomp/home.css";

type IconatxtProps = {
  Icon: React.FC;
  text: number;
  mark: number;
};

export default function Cadrethree({ Icon, text, mark }: IconatxtProps) {
  let marklogo = "";
  switch (mark) {
    case 1:
      marklogo = "%";
      break;
    case 2:
      marklogo = "km/h";
      break;
    case 3:
      marklogo = "%";
      break;
    default:
      marklogo = "";
  }

  return (
    <div className="flex flex-col items-start gap-8 glass-card rounded-[40px] p-7.5 w-full h-fit">
      <Icon />
      <div className="txt04">
        {text}
        {marklogo}
      </div>
    </div>
  );
}
