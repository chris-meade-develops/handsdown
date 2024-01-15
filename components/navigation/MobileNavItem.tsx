'use client'
import useToggle from '@/hooks/useToggle'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Plus, Minus } from '@/icons'

const DynamicDropDown = dynamic(() => import('./MobileDropDown'))

export default function MobileNavItem({
  attributes: { url, title, children },
}: INavigation.Item) {
  const { open, toggle } = useToggle({ initial: false })
  if (children)
    return (
      <li className="my-5">
        <button
          onClick={toggle}
          className="flex items-center text-2xl font-bold leading-7 capitalize font-montserrat text-offBlack "
        >
          {title}{' '}
          {open ? (
            <Minus className="w-10 h-10 ml-6 fill-offBlack" />
          ) : (
            <Plus className="w-10 h-10 ml-6 fill-offBlack" />
          )}
        </button>
        <DynamicDropDown open={open} items={children} />
      </li>
    )
  return (
    <li className="my-5">
      <Link
        href={url}
        className="text-2xl font-bold leading-7 capitalize font-montserrat text-offBlack"
      >
        {title}
      </Link>
    </li>
  )
}
