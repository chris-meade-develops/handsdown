"use client";
import useWindowResize from "@/hooks/useWindowResize";

export default function DivJoin({ color }: { color: string }) {
  const windowSize = useWindowResize();

  const numSquares = Array.from(
    Array(Math.floor(windowSize.width / 40) + 1).keys()
  );

  return (
    <div className="bg-transparent w-[110%] overflow-hidden h-[15px] flex absolute -top-[7px] left-0">
      {numSquares.map((_, i) => (
        <Square key={i} color={color} />
      ))}
    </div>
  );
}

function Square({ color }: { color: string }) {
  return <span className={`${color} h-[15px] w-[25px] mr-[15px]`}></span>;
}
