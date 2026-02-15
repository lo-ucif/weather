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
    <div className="flex flex-row sm:flex-col justify-between sm:justify-center  items-center gap-6 glass-card rounded-[40px] p-5 w-full sm:h-fit h-18">
      <Icon />
      <div className="txt04">
        {text}
        {marklogo}
      </div>
    </div>
  );
}
