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
    data: Item[]
  }

  interface Attributes {
    title: string
    slug: string
    createdAt: string
    updatedAt: string
    items: Items
  }

  interface Navigation {
    id: number
    attributes: Attributes
  }

  type ApiResponse = {
    data: Navigation[]
  }

  interface MobileNav extends Clickable, Toggleable {
    scrolled: boolean
    promoBlock: ICms.Announcement | null
  }

  interface BurgerMenu extends Clickable, Toggleable {
    scrolled: boolean
  }

  interface MobileDropDown {
    items: INavigation.Items
  }

  interface SideDrawer extends Toggleable {
    items: Items
  }

  interface MobileItem extends Item, List {}
}
