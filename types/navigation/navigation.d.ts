namespace INavigation {
  interface Clickable {
    onClick: () => void
  }

  interface Toggleable {
    open: boolean
  }

  interface Item {
    href: string
    label: string
    items?: Item[]
  }

  interface List {
    items?: Item[]
  }

  interface MobileNav extends Clickable, Toggleable {}

  interface BurgerMenu extends Clickable, Toggleable {}

  interface MobileDropDown extends Toggleable, List {}

  interface SideDrawer extends Toggleable {}

  interface MobileItem extends Item, List {}
}
