import Link from 'next/link'
import DesktopDropDown from './DesktopDropDown'

export default function DesktopItem({ href, label, items }: INavigation.Item) {
  return (
    <li
      className="relative text-base font-semibold leading-5 tracking-widest uppercase font-montserrat group hover:text-accent"
    >
      <Link href={href}>{label}</Link>

      {items && <DesktopDropDown items={items} />}
    </li>
  )
}
