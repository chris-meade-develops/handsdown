import DesktopItem from "./DesktopItem";
import navItems from "@/temporary_data/navigation";

export default function Desktop() {
  const firstHalf = navItems.slice(0, 3);
  const secondHalf = navItems.slice(3, 8);
  return (
    <nav className="absolute top-0 left-0 justify-between hidden w-full bg-transparent xl:flex xl:py-21 xl:px-41 xl:mb-14 z-1">
      <ul className="flex justify-between list-none w-1/3 max-w-[468px] items-center">
        {firstHalf.map((item) => (
          <DesktopItem key={item.label} label={item.label} href={item.href} />
        ))}
      </ul>
      <ul className="flex justify-between list-none max-w-[478px] w-1/3 items-center">
        {secondHalf.map((item) => (
          <DesktopItem key={item.label} label={item.label} href={item.href} />
        ))}
      </ul>
    </nav>
  );
}
