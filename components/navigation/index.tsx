'use client'
import useToggle from '@/hooks/useToggle'
import Desktop from './Desktop'
import Mobile from './Mobile'
import SideDrawer from './SideDrawer'
import { useEffect } from 'react'

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
    handleOpen: openDrawer,
    handleClose: closeDrawer,
  } = useToggle({
    initial: false,
  })

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
      <Desktop scrollable={scrollable} navItems={navData.attributes.items} />
      <Mobile open={drawerOpen} onClick={toggleDrawer} />
      <SideDrawer open={drawerOpen} items={navData.attributes.items} />
    </div>
  )
}
