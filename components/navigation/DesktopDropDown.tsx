import Link from 'next/link'

export default function DesktopDropDown({
  items,
}: {
  items: INavigation.Item[]
}) {
  return (
    <div className="absolute hidden pt-6 -translate-x-1/2 group-hover:block left-1/2">
      <ul className="border-t border-accent bg-primary-text w-fit ">
        {items.map((item) => {
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className="block text-base font-normal leading-5 capitalize border-b px-13 py-9 border-white/35 whitespace-nowrap hover:text-accent text-white/85 font-montserrat "
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
