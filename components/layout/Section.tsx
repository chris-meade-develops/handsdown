import DivJoin from "../DivJoin";

export default function Section({
  children,
  bgColor,
  className,
  ...props
}: Layout) {
  return (
    <section className={className} {...props}>
      <DivJoin color={bgColor} />
      {children}
    </section>
  );
}
