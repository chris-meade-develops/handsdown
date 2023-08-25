"use client";

export default function BurgerMenu({ onClick, open }: INavigation.BurgerMenu) {
  return (
    <button
      className="flex flex-col justify-between h-8 w-13"
      onClick={onClick}
    >
      <div
        className={`w-full h-1  rounded-sm transition-all duration-200 ${
          open
            ? "rotate-45 -translate-x-[1px] translate-y-3 bg-offBlack"
            : "rotate-0 translate-x-0 translate-y-0 bg-white"
        }`}
      ></div>
      <div
        className={`w-full h-1 rounded-sm transition-transform duration-200 bg-white ${
          open ? "scale-0" : "scale-100"
        }`}
      ></div>
      <div
        className={`w-full h-1 rounded-sm transition-all duration-200 ${
          open
            ? "-rotate-45 -translate-x-[1px] -translate-y-[8px] bg-offBlack"
            : "rotate-0 translate-x-0 translate-y-0 bg-white"
        }`}
      ></div>
    </button>
  );
}
