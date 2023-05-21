import Link from "next/link";

export default function DesktopItem({ href, label }: NavigationItem) {
  return (
    <li className="text-base font-semibold leading-5 tracking-widest uppercase font-montserrat text-secondary-text">
      <Link href={href}>{label}</Link>
    </li>
  );
}
