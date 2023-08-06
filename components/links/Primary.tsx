import Link from 'next/link'

export default function Primary({ href, children }: iLinkProps) {
  return (
    <Link
      href={href}
      className="bg-accent w-full h-full rounded-[28px] shadow-[0px,3px,6px,#00000029] flex justify-center items-center hover:translate-y-[10px] after:absolute after:w-full after:h-full after:border after:border-accent/70 before:absolute before:w-full before:h-full before:border before:border-accent hover:after:-translate-y-[10px] hover:before:-translate-y-[7px] transition-all duration-300 before:left-0 after:left-0 after:rounded-[28px] before:rounded-[28px] before:top-0 after:top-0 after:transition-transform after:duration-300 before:transition-transform before:duration-300 group relative "
    >
      <span className="absolute w-full h-full border border-accent rounded-[28px] top-0 left-0 transition-transform duration-300 group-hover:-translate-y-[4px]" />
      {children}
    </Link>
  )
}
