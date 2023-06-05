import Link from "next/link";

export default function Primary({ href, children }: iLinkProps) {
  return (
    <Link
      href={href}
      className="bg-accent w-full h-full rounded-[28px] shadow-[0px,3px,6px,#00000029] flex justify-center items-center"
    >
      {children}
    </Link>
  );
}
