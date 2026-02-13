import "../homecomp/home.css";
type IconatxtProps = {
  Icon: React.FC;
  text: string;
};
export default function Cadrethree({ Icon, text }: IconatxtProps) {
  return (
    <div className="flex flex-col items-start gap-8 glass-card rounded-[40px] p-7.5 w-full h-fit">
      <Icon />
      <div className="txt04">{text}</div>
    </div>
  );
}
