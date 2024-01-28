'use client'
import useToggle from '@/hooks/useToggle'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Plus, Minus } from '@/icons'
import useExpander from '@/hooks/useExpander'

const DynamicDropDown = dynamic(() => import('./MobileDropDown'))

export default function MobileNavItem({
  attributes: { url, title, children },
}: INavigation.Item) {
  const {
    ref,
    maxHeight,
    isExpanded: open,
    handleToggle,
  } = useExpander<HTMLDivElement>()

  if (children.data.length)
    return (
      <li className="my-5">
        <button
          type="button"
          onClick={handleToggle}
          className="flex items-center text-2xl font-bold leading-7 capitalize font-montserrat text-offBlack "
        >
          {title}{' '}
          {open ? (
            <Minus className="w-10 h-10 ml-6 fill-offBlack" />
          ) : (
            <Plus className="w-10 h-10 ml-6 fill-offBlack" />
          )}
        </button>
        <div ref={ref} style={{ maxHeight }} className='overflow-hidden transition-all duration-150'>
          <DynamicDropDown
            items={children}
          />
        </div>
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
