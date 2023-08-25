import DivJoin from "../ui/DivJoin";

export default function Section({
  children,
  bgColor,
  className,
  ...props
}: ISection.Props) {
  return (
    <section className={className} {...props}>
      <DivJoin color={bgColor} />
      {children}
    </section>
  );
}
