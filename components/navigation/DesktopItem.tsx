import Link from 'next/link'
import DesktopDropDown from './DesktopDropDown'

export default function DesktopItem({
  attributes: { url, title, children },
}: INavigation.Item) {
  return (
    <li className="relative text-base font-semibold leading-5 tracking-widest uppercase font-montserrat group hover:text-accent">
      {title.toLowerCase() === 'shop' ? (
        <span className='cursor-pointer'>{title}</span>
      ) : (
        <Link href={url}>{title}</Link>
      )}

      {children && <DesktopDropDown items={children} />}
    </li>
  )
}
