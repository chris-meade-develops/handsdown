'use client'
import useToggle from '@/hooks/useToggle'
import Desktop from './Desktop'
import Mobile from './Mobile'
import SideDrawer from './SideDrawer'
import { useEffect } from 'react'
import useScrolled from '@/hooks/useScrolled'

export default function NavigationComposer({
  scrollable,
  navData,
}: {
  scrollable: boolean
  navData: INavigation.Navigation
}) {
  const {
    open: drawerOpen,
    toggle: toggleDrawer,
  } = useToggle({
    initial: false,
  })

  const scrolled = useScrolled({ scrollable })

  useEffect(() => {
    // if drawerOpen is true, aprevent scrolling on the body
    if (drawerOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [drawerOpen])

  return (
    <div>
      <Desktop scrolled={scrolled} navItems={navData.attributes.items} />
      <Mobile open={drawerOpen} onClick={toggleDrawer} scrolled={scrolled} />
      <SideDrawer open={drawerOpen} items={navData.attributes.items} />
    </div>
  )
}
