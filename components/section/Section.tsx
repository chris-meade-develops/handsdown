import DivJoin from "../ui/DivJoin";

export default function Section({
  children,
  bgColor,
  className,
  ...props
}: ISection.Props) {
  return (
    <section className={"max-w-screen " + className} {...props}>
      <DivJoin color={bgColor} />
      <div className="overflow-hidden max-w-screen">
        {children}
      </div>
    </section>
  );
}
