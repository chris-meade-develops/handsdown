import Link from "next/link";

export default function MobileDropDown({ open, items }: MobileDropDown) {
  if(!open) return null
  return (
    <div className="w-full py-11">
      <ul>
        {items?.map((item) => (
          <li key={item.label} className="mb-5">
            <Link href={item.href} className="text-base font-semibold text-offBlack font-montserrat">{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
