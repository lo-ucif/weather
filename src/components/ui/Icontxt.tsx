type IcontxtProps = {
  Icon: React.FC;
  text: string;
};
export default function Icontxt({ Icon, text }: IcontxtProps) {
  return (
    <div className="px-6 py-3 bg-black/10 rounded-[40px] inline-flex justify-center items-center gap-2.5 glass-card">
      <Icon />
      <div className="txt01">{text}</div>
    </div>
  );
}
