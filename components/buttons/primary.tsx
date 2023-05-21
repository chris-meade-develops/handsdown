"use client"

export default function Primary({ children, onClick, type }: Button) {
  return (
    <button type={type} onClick={onClick} className="bg-accent w-full h-full rounded-[28px] shadow-[0px,3px,6px,#00000029]">
        {children}
    </button>
  )
}