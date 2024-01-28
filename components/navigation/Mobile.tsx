"use client";
import { Phone } from "@/icons";
import BurgerMenu from "./BurgerMenu";

export default function Mobile({ open, onClick }: INavigation.MobileNav) {
  return (
    <nav className="absolute top-0 left-0 w-full py-20 md:hidden px-14 z-3">
      <ul className="flex items-center justify-between list-none">
        <li>
          <BurgerMenu open={open} onClick={onClick} />
        </li>
        <li>
          <a href="tel:0123456789" className="block w-13 h-13">
            <Phone className={`w-full h-full -rotate-12 transition-colors duration-300 ${open ? "fill-offBlack" : "fill-secondary-text"}`} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
