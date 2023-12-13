namespace INavigation {
  interface Clickable {
    onClick: () => void
  }

  interface Toggleable {
    open: boolean
  }

  interface ItemAttributes {
    order: number
    title: string
    url: string
    target: string
    createdAt: string
    updatedAt: string
    children: Items
  }

  interface Item {
    id: number
    attributes: ItemAttributes
  }

  interface Items {
    data: NavigationItem[]
  }

  interface Attributes {
    title: string
    slug: string
    createdAt: string
    updatedAt: string
    items: NavigationItems
  }

  interface Navigation {
    id: number
    attributes: Attributes
  }

  type ApiResponse = {
    data: Navigation[]
  }

  interface MobileNav extends Clickable, Toggleable {}

  interface BurgerMenu extends Clickable, Toggleable {}

  interface MobileDropDown extends Toggleable, List {}

  interface SideDrawer extends Toggleable {}

  interface MobileItem extends Item, List {}
}
