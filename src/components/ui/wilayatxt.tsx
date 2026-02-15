import "./wilaya.css"
type IcontxtProps = {
  Icon: React.FC;
  text: string;
  text02: number;
};
export default function Wilayatxt({ Icon, text, text02 }: IcontxtProps) {
  return (
    <div className="wilayacss  px-6 py-3 bg-black/10 rounded-[40px] inline-flex justify-start items-center gap-3 glass-card w-full">
      <Icon />
      <div className="flex flex-row gap-4">
        <div>{text02}</div>
        <div className="txt01">{text}</div>
      </div>
    </div>
  );
}
