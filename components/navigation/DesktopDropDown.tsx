import Link from 'next/link'

export default function DesktopDropDown({
  items: { data },
}: {
  items: INavigation.Items
}) {
  return (
    <div className="absolute hidden pt-6 -translate-x-1/2 group-hover:block left-1/2">
      <ul className="border-t border-accent bg-primary-text w-fit ">
        {data.map((item: INavigation.Item) => {
          const {
            attributes: { url, title },
          } = item
          return (
            <li key={title}>
              <Link
                href={url}
                className="block text-base font-normal leading-5 capitalize border-b px-13 py-9 border-white/35 whitespace-nowrap hover:text-accent text-white/85 font-montserrat "
              >
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
