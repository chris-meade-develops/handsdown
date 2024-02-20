'use client'

export default function BurgerMenu({
  onClick,
  open,
  scrolled,
}: INavigation.BurgerMenu) {
  return (
    <button className="flex flex-col justify-between h-8 w-13" onClick={onClick}>
    <div
      className={`w-full h-1 rounded-sm transition-all duration-200 ${
        (open || scrolled) ? 'bg-offBlack' : 'bg-white'
      } ${
        open
          ? 'rotate-45 -translate-x-[1px] translate-y-3'
          : 'rotate-0 translate-x-0 translate-y-0'
      }`}
    />
    <div
      className={`w-full h-1 rounded-sm transition-transform duration-200 ${
        (open || scrolled) ? 'bg-offBlack' : 'bg-white'
      } ${open ? 'scale-0' : 'scale-100'}`}
    />
    <div
      className={`w-full h-1 rounded-sm transition-all duration-200 ${
        (open || scrolled) ? 'bg-offBlack' : 'bg-white'
      } ${
        open
          ? '-rotate-45 -translate-x-[1px] -translate-y-[8px]'
          : 'rotate-0 translate-x-0 translate-y-0'
      }`}
    />
  </button>
  
  )
}
