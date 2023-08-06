interface Clickable {
  onClick: () => void;
}

interface Toggleable {
  open: boolean;
}

interface NavigationItem {
  href: string;
  label: string;
  items?: NavigationItem[];
}

interface NavigationList {
  items?: NavigationItem[];
}

interface MobileNav extends Clickable, Toggleable {}

interface BurgerMenu extends Clickable, Toggleable {}

interface MobileDropDown extends Toggleable, NavigationList {}

interface SideDrawer extends Toggleable {}

interface MobileNavItem extends NavigationItem, NavigationList {}
