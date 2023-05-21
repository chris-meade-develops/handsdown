import navItems from "@/temporary_data/navigation";
import MobileNavItem from "./MobileNavItem";

export default function SideDrawer({ open }: SideDrawer) {
  return (
    <aside
      className={`w-full z-1 h-screen bg-secondary transition-all duration-300 fixed top-0 left-0 ${
        open ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <nav className="pl-24 mt-47">
        <ul className="flex flex-col w-full">
          {navItems.map((item) => (
            <MobileNavItem
              key={item.label}
              href={item.href}
              label={item.label}
              items={item.items ? item.items : undefined}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
