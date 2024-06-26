export default function DirectionInput({
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      className="border-2 border-slate-500 h-[64px] rounded-md px-[42px] text-xl"
      {...props}
    />
  );
}
